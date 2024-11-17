'use client';

import { useState, useEffect } from 'react';
import { defaultStickers } from '@/config/stickers';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import StickerList from '@/components/admin/StickerList';
import StickerEditor from '@/components/admin/StickerEditor';
import { type Sticker, type SectionStickers } from '@/config/stickers';
import Loading from './loading';

export default function StickersAdmin() {
  // Initialize with defaultStickers to prevent undefined errors
  const [stickers, setStickers] = useState<SectionStickers>(defaultStickers);
  const [selectedSection, setSelectedSection] = useState<string>(Object.keys(defaultStickers)[0]);
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const { toast } = useToast();

  // Load configuration
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/api/stickers', {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (!response.ok) throw new Error('Failed to load configuration');
        
        const config = await response.json();
        
        // Validate config before setting
        if (config && typeof config === 'object' && Object.keys(config).length > 0) {
          setStickers(config);
        } else {
          // Fallback to default if config is invalid
          setStickers(defaultStickers);
        }
      } catch (error) {
        console.error('Error loading config:', error);
        // Fallback to default stickers on error
        setStickers(defaultStickers);
        toast({
          title: "Warning",
          description: "Using default configuration due to loading error",
          variant: "destructive",
        });
      } finally {
        setIsInitialLoading(false);
      }
    };

    loadConfig();
  }, [toast]);

  const saveConfig = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/stickers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stickers),
      });

      if (!response.ok) throw new Error('Failed to save configuration');

      const updatedConfig = await response.json();
      if (updatedConfig && typeof updatedConfig === 'object') {
        setStickers(updatedConfig);
      }

      toast({
        title: "Success",
        description: "Stickers configuration saved successfully",
        className: "bg-green-50 text-green-900 border-green-200",
      });
    } catch (error) {
      console.error('Error saving config:', error);
      toast({
        title: "Error",
        description: "Failed to save stickers configuration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStickerUpdate = (index: number, updates: Partial<Sticker>) => {
    setStickers(prev => ({
      ...prev,
      [selectedSection]: prev[selectedSection].map((sticker, i) =>
        i === index ? { ...sticker, ...updates } : sticker
      )
    }));
  };

  const handleDeleteSticker = (index: number) => {
    setStickers(prev => ({
      ...prev,
      [selectedSection]: prev[selectedSection].filter((_, i) => i !== index)
    }));
    setSelectedSticker(null);
  };

  const handleAddSticker = () => {
    const newSticker: Sticker = {
      src: '/new-sticker.svg',
      alt: 'New Sticker',
      size: { width: 4, height: 4 },
      position: { type: 'absolute', top: '50%', left: '50%' },
      animation: {
        animate: { rotate: [0, 360] },
        transition: { duration: 2, repeat: Infinity }
      }
    };

    setStickers(prev => ({
      ...prev,
      [selectedSection]: [...prev[selectedSection], newSticker]
    }));
  };

  if (isInitialLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to site</span>
          </Link>
          <Button
            onClick={saveConfig}
            className="bg-green-600 hover:bg-green-700 text-white"
            disabled={isLoading}
          >
            <Save className="mr-2 h-5 w-5" />
            {isLoading ? 'Saving...' : 'Save Configuration'}
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Sticker Configuration</h1>

          <Tabs
            value={selectedSection}
            onValueChange={setSelectedSection}
            className="text-gray-900"
          >
            <TabsList className="mb-8 bg-gray-100">
              {Object.keys(stickers).map(section => (
                <TabsTrigger
                  key={section}
                  value={section}
                  className="capitalize data-[state=active]:bg-white data-[state=active]:text-gray-900"
                >
                  {section} Section
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(stickers).map(section => (
              <TabsContent key={section} value={section}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-1">
                    <StickerList
                      stickers={stickers[section]}
                      selectedSticker={selectedSticker}
                      onSelect={setSelectedSticker}
                      onDelete={handleDeleteSticker}
                      onAdd={handleAddSticker}
                    />
                  </div>

                  <div className="col-span-2">
                    {selectedSticker !== null && (
                      <StickerEditor
                        sticker={stickers[section][selectedSticker]}
                        onUpdate={(updates) => handleStickerUpdate(selectedSticker, updates)}
                      />
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}