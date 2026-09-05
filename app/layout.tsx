import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sushilbishowkarma.com'),
  title: {
    default: 'Sushil Bishowkarma — Full-Stack Developer',
    template: '%s',
  },
  description:
    'Full-Stack Developer building AI, Web3, and humanitarian-tech products with TypeScript, Next.js, NestJS, and PostgreSQL. Portfolio and living archive of Sushil Bishowkarma.',
  generator: 'v0.app',
  icons: {
    icon: '/TabLogo.png',
    shortcut: '/TabLogo.png',
    apple: '/TabLogo.png',
  },
  openGraph: {
    title: 'Sushil Bishowkarma — Full-Stack Developer',
    description:
      'Full-Stack Developer building AI, Web3, and humanitarian-tech products with TypeScript, Next.js, NestJS, and PostgreSQL.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171a24',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
