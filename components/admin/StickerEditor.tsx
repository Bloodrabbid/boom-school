'use client';

import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { type Sticker } from '@/config/stickers';
import { useEffect, useState } from 'react';

interface StickerEditorProps {
  sticker: Sticker;
  onUpdate: (updates: Partial<Sticker>) => void;
}

export default function StickerEditor({ sticker, onUpdate }: StickerEditorProps) {
  const [width, setWidth] = useState(sticker.size.width);
  const [height, setHeight] = useState(sticker.size.height);

  useEffect(() => {
    setWidth(sticker.size.width);
    setHeight(sticker.size.height);
  }, [sticker]);

  const handleSizeChange = (dimension: 'width' | 'height', value: number) => {
    if (value > 0 && value <= 20) {
      onUpdate({
        size: {
          ...sticker.size,
          [dimension]: value
        }
      });
    }
  };

  const handlePositionChange = (position: 'top' | 'left', value: string) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      const updatedPosition = {
        ...sticker.position,  // Сначала копируем существующие свойства
        [position]: `${value}%`  // Затем добавляем новое значение
      };

      onUpdate({
        position: updatedPosition
      });
    }
  };

  // Normalize path for display
  const normalizePath = (path: string) => {
    return path.replace(/_/g, '-');
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-gray-900">Edit Sticker</h3>

      <div className="space-y-6">
        <div className="border rounded-lg p-4 bg-gray-50">
          <Label className="block text-sm font-medium text-gray-700 mb-2">Preview</Label>
          <div className="relative h-40 bg-white border rounded-md">
            <img
              src={normalizePath(sticker.src)}
              alt={sticker.alt}
              style={{
                width: `${width}rem`,
                height: `${height}rem`,
                position: 'absolute',
                top: sticker.position.top || '50%',
                left: sticker.position.left || '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-1">Source URL</Label>
          <Input
            value={normalizePath(sticker.src)}
            onChange={(e) => onUpdate({ src: e.target.value.replace(/-/g, '_') })}
            className="bg-white text-gray-900 border-gray-300"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</Label>
          <Input
            value={sticker.alt}
            onChange={(e) => onUpdate({ alt: e.target.value })}
            className="bg-white text-gray-900 border-gray-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between mb-1">
              <Label className="text-sm font-medium text-gray-700">Width (rem)</Label>
              <span className="text-sm text-gray-500">{width}</span>
            </div>
            <Slider
              value={[width]}
              min={1}
              max={20}
              step={0.5}
              onValueChange={([value]) => {
                setWidth(value);
                handleSizeChange('width', value);
              }}
              className="py-4"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <Label className="text-sm font-medium text-gray-700">Height (rem)</Label>
              <span className="text-sm text-gray-500">{height}</span>
            </div>
            <Slider
              value={[height]}
              min={1}
              max={20}
              step={0.5}
              onValueChange={([value]) => {
                setHeight(value);
                handleSizeChange('height', value);
              }}
              className="py-4"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Position Top (%)</Label>
            <Input
              value={sticker.position.top?.replace('%', '') || ''}
              onChange={(e) => handlePositionChange('top', e.target.value)}
              placeholder="e.g., 50"
              className="bg-white text-gray-900 border-gray-300"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Position Left (%)</Label>
            <Input
              value={sticker.position.left?.replace('%', '') || ''}
              onChange={(e) => handlePositionChange('left', e.target.value)}
              placeholder="e.g., 50"
              className="bg-white text-gray-900 border-gray-300"
            />
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-1">Z-Index</Label>
          <Input
            type="number"
            value={sticker.zIndex || 10}
            onChange={(e) => onUpdate({ zIndex: parseInt(e.target.value) })}
            className="bg-white text-gray-900 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}