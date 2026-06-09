import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Saurav Kumar | Software Engineer',
  description:
    'Software Engineer specializing in building scalable systems, modern web applications, and exceptional digital experiences. Passionate about clean code, performance, and elegant solutions.',
  keywords: [
    'Saurav Kumar',
    'Software Engineer',
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Saurav Kumar' }],
  creator: 'Saurav Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sauravkumar.dev',
    title: 'Saurav Kumar | Software Engineer',
    description:
      'Software Engineer specializing in building scalable systems, modern web applications, and exceptional digital experiences.',
    siteName: 'Saurav Kumar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saurav Kumar - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Kumar | Software Engineer',
    description:
      'Software Engineer specializing in building scalable systems, modern web applications, and exceptional digital experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} antialiased bg-[#020617] text-white font-sans selection:bg-blue-500/30 selection:text-blue-200`}>
        {children}
      </body>
    </html>
  );
}
