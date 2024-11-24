import { Header } from '@/components/layouts/header'
import { BottomNav } from '@/components/layouts/bottom-nav'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
    </>
  )
}
