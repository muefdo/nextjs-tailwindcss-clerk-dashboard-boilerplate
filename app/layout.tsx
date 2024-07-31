import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark, neobrutalism } from '@clerk/themes';
import { Toaster } from '@/components/ui/toaster';
import { Magnet } from 'lucide-react';
import ModalProvider from '@/components/ui/modal-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bradi GO | Subscription based Development | Bradi.Tech',
  description:
    'Subscription based Dev. Bradi GO, hire top-notch devs for a low monthly fee. No upfront costs. No hidden fees. Cancel or stop anytime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: dark,
    // }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <main>
            <ModalProvider />
            {children}
            </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
