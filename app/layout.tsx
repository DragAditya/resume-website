import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aditya Wagh - Software Developer & AI Enthusiast',
    template: '%s | Aditya Wagh'
  },
  description: 'Innovative Computer Applications student and aspiring software developer with expertise in Java, Python, and AI. Building practical solutions and contributing to open-source projects.',
  keywords: [
    'Aditya Wagh',
    'Software Developer',
    'AI Enthusiast',
    'Full Stack Developer',
    'Java Developer',
    'Python Developer',
    'Web Developer',
    'Portfolio',
    'Computer Applications',
    'dragaditya'
  ],
  authors: [{ name: 'Aditya Wagh', url: 'https://github.com/dragaditya' }],
  creator: 'Aditya Wagh',
  publisher: 'Aditya Wagh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dragadi-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dragadi-portfolio.vercel.app',
    title: 'Aditya Wagh - Software Developer & AI Enthusiast',
    description: 'Innovative Computer Applications student and aspiring software developer with expertise in Java, Python, and AI.',
    siteName: 'Aditya Wagh Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aditya Wagh - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Wagh - Software Developer & AI Enthusiast',
    description: 'Innovative Computer Applications student and aspiring software developer with expertise in Java, Python, and AI.',
    images: ['/og-image.jpg'],
    creator: '@dragaditya',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jetbrains.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}