import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'БУМ - Студия музыки',
  description: 'Музыкальная школа в Хабаровске',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}