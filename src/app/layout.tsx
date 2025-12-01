import type { Metadata, Viewport } from 'next';
import { Syne, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/common/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ChatWidget } from "@/components/ChatWidget";

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abisheik S | Creative Developer',
  description: 'Art-driven portfolio of Abisheik S — crafting digital experiences with code and story.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Abisheik S | Creative Developer',
    description: 'Art-driven portfolio of Abisheik S — crafting digital experiences with code and story.',
    type: 'website',
    url: 'https://yourdomain.com', // Replace with actual domain
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=Abisheik+S+Portfolio', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Abisheik S Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abisheik S | Creative Developer',
    description: 'Art-driven portfolio of Abisheik S — crafting digital experiences with code and story.',
    images: ['https://placehold.co/1200x630.png?text=Abisheik+S+Portfolio'], // Replace with actual Twitter image
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#050505' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ParallaxBackground />
          {children}
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
