import { Nanum_Gothic } from 'next/font/google'
import { Header } from '@/components/layouts/header'
import { BottomNav } from '@/components/layouts/bottom-nav'
import { cn } from '@/lib/utils'
import './globals.css'

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  variable: '--font-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body
        className={cn(
          'container mx-auto flex h-screen max-w-md flex-col font-sans antialiased',
          nanumGothic.variable
        )}
      >
        <Header />
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
