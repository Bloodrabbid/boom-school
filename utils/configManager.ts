import { readFileSync, writeFileSync } from 'fs';
import { load, dump } from 'js-yaml';
import { type SectionStickers } from '@/config/stickers';
import path from 'path';

export const CONFIG_PATH = path.join(process.cwd(), 'config', 'stickers.yaml');

export const ConfigManager = {
    readConfig: (): SectionStickers => {
        try {
            // Ensure the file exists
            if (!readFileSync(CONFIG_PATH, 'utf8')) {
                throw new Error('Configuration file not found');
            }

            const fileContent = readFileSync(CONFIG_PATH, 'utf8');
            const config = load(fileContent) as SectionStickers;
            
            if (!config || typeof config !== 'object') {
                throw new Error('Invalid configuration format');
            }

            // Normalize image paths and ensure proper structure
            const normalizedConfig: SectionStickers = {};
            Object.entries(config).forEach(([section, stickers]) => {
                if (!Array.isArray(stickers)) {
                    throw new Error(`Invalid stickers array in section: ${section}`);
                }

                normalizedConfig[section] = stickers.map(sticker => ({
                    ...sticker,
                    src: sticker.src.replace(/_/g, '-'),
                    size: {
                        width: Number(sticker.size.width) || 4,
                        height: Number(sticker.size.height) || 4
                    },
                    position: {
                        ...(sticker.position || { type: 'absolute' }) // Исправлено здесь
                    },
                    animation: {
                        animate: sticker.animation.animate || {},
                        transition: sticker.animation.transition || {}
                    },
                    zIndex: Number(sticker.zIndex) || 10
                }));
            });
            
            return normalizedConfig;
        } catch (error) {
            console.error('Error reading config:', error);
            // Return default stickers if config reading fails
            return require('../config/stickers').stickers;
        }
    },

    saveConfig: async (config: SectionStickers): Promise<void> => {
        try {
            // Prepare config for saving
            const configToSave = JSON.parse(JSON.stringify(config));
            
            // Normalize and validate before saving
            Object.keys(configToSave).forEach(section => {
                if (!Array.isArray(configToSave[section])) {
                    throw new Error(`Invalid section data: ${section}`);
                }

                configToSave[section] = configToSave[section].map((sticker: any) => ({
                    src: sticker.src.replace(/-/g, '_'),
                    alt: sticker.alt || '',
                    size: {
                        width: Number(sticker.size.width) || 4,
                        height: Number(sticker.size.height) || 4
                    },
                    position: {
                        ...(sticker.position || { type: 'absolute' }) // И здесь
                    },
                    animation: {
                        animate: sticker.animation.animate || {},
                        transition: sticker.animation.transition || {}
                    },
                    ...(sticker.zIndex ? { zIndex: Number(sticker.zIndex) } : {})
                }));
            });

            const yamlStr = dump(configToSave, {
                indent: 2,
                lineWidth: -1,
                noRefs: true,
                sortKeys: true,
                quotingType: '"'
            });
            
            // Ensure directory exists
            const dir = path.dirname(CONFIG_PATH);
            const { mkdir } = require('fs/promises');
            await mkdir(dir, { recursive: true });

            writeFileSync(CONFIG_PATH, yamlStr, 'utf8');
        } catch (error) {
            console.error('Error saving config:', error);
            const errorMessage = error instanceof Error
                ? error.message
                : 'Unknown error occurred';
            throw new Error(`Failed to save configuration: ${errorMessage}`);
        }
    }
};