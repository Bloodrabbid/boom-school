// utils/storage.ts
import { type SectionStickers } from '@/config/stickers';

export const storage = {
    get: (key: string) => {
        if (typeof window === 'undefined') return null;
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },

    set: (key: string, value: any) => {
        if (typeof window === 'undefined') return;
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }
};

export const getInitialStickers = (defaultStickers: SectionStickers): SectionStickers => {
    const savedStickers = storage.get('stickers-config');
    return savedStickers || defaultStickers;
};