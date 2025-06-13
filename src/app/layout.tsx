import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/common/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Abisheik S | Full Stack & AI Developer Portfolio',
  description: 'Explore the hyper-realistic developer portfolio of Abisheik S — from chatbot AI to cloud-integrated UIs.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Abisheik S | Full Stack & AI Developer Portfolio',
    description: 'Explore the hyper-realistic developer portfolio of Abisheik S — from chatbot AI to cloud-integrated UIs.',
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
    title: 'Abisheik S | Full Stack & AI Developer Portfolio',
    description: 'Explore the hyper-realistic developer portfolio of Abisheik S — from chatbot AI to cloud-integrated UIs.',
    images: ['https://placehold.co/1200x630.png?text=Abisheik+S+Portfolio'], // Replace with actual Twitter image
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6F00FF' },
    { media: '(prefers-color-scheme: dark)', color: '#6F00FF' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" /> {/* Placeholder, ensure favicon.ico exists in public */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Placeholder */}
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
