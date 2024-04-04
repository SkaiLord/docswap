import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from './components/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://docswap.vercel.app/'),

  title: 'DocSwap | SkaiLord',
  authors: {
    name: 'SkaiLord',
  },
  icons: {
    icon: '/icon.ico',
  },

  description:
    'DocSwap - your ultimate file transformation companion. Seamlessly switch between document formats with ease and efficiency.',
  openGraph: {
    title: 'DocSwap | SkaiLord',
    description:
      'DocSwap - your ultimate file transformation companion. Seamlessly switch between document formats with ease and efficiency.',
    url: 'https://docswap.vercel.app/',
    siteName: 'DocSwap | SkaiLord',
    images: '/og.png',
    type: 'website',
  },
  keywords: ['docswap', 'skailord', 'file converter'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
