import { NextResponse } from 'next/server';
import { ConfigManager } from '@/utils/configManager';
import { type SectionStickers } from '@/config/stickers';

export async function GET() {
    try {
        const config = ConfigManager.readConfig();
        return NextResponse.json(config);
    } catch (error) {
        console.error('Error reading config:', error);
        return NextResponse.json(
            { error: 'Failed to read stickers configuration' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const config = await req.json() as SectionStickers;

        // Validate config structure
        if (!config || typeof config !== 'object') {
            throw new Error('Invalid configuration format');
        }

        await ConfigManager.saveConfig(config);

        // Return the updated config after saving
        const updatedConfig = ConfigManager.readConfig();
        return NextResponse.json(updatedConfig);
    } catch (error) {
        console.error('Error saving config:', error);
        const errorMessage = error instanceof Error
            ? error.message
            : 'Unknown error occurred while saving configuration';

        return NextResponse.json(
            { error: `Failed to save stickers configuration: ${errorMessage}` },
            { status: 500 }
        );
    }
}