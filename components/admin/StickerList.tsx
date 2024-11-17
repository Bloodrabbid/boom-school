'use client';

import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { type Sticker } from '@/config/stickers';

interface StickerListProps {
  stickers: Sticker[];
  selectedSticker: number | null;
  onSelect: (index: number) => void;
  onDelete: (index: number) => void;
  onAdd: () => void;
}

export default function StickerList({
  stickers,
  selectedSticker,
  onSelect,
  onDelete,
  onAdd,
}: StickerListProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Stickers</h3>
        <Button 
          onClick={onAdd} 
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Sticker
        </Button>
      </div>
      <div className="space-y-2">
        {stickers.map((sticker, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedSticker === index 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-white hover:bg-gray-50 border-gray-100'
            } border`}
            onClick={() => onSelect(index)}
          >
            <div className="flex items-center justify-between">
              <span className="truncate text-gray-900">{sticker.alt}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(index);
                }}
                className="hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}