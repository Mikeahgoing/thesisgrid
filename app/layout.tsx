import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'ThesisGrid Capital | AI-Native Research Infrastructure',
  description: 'Transform unstructured financial information into structured intelligence, collaborative workflows, and decision-ready investment insight for institutional investors.',
  keywords: ['investment research', 'AI', 'hedge funds', 'asset management', 'financial analysis', 'institutional investors'],
  authors: [{ name: 'ThesisGrid Capital' }],
  verification: {
    google: 'zFZoezIxIMwdMs56YEQNTP69mSynDQpU_0DxcZuW02s',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ThesisGrid Capital | AI-Native Research Infrastructure',
    description: 'Transform unstructured financial information into structured intelligence for institutional investors.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0c10',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
