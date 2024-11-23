import { Home, Flag, User } from 'lucide-react'
import Link from 'next/link'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[999] flex items-center justify-around border-t bg-white p-4">
      <Link href="/" className="flex flex-col items-center text-blue-600">
        <Home className="h-6 w-6" />
        <span className="mt-1 text-xs">Home</span>
      </Link>
      <Link href="/goals" className="flex flex-col items-center text-gray-400">
        <Flag className="h-6 w-6" />
        <span className="mt-1 text-xs">Goals</span>
      </Link>
      <Link
        href="/profile"
        className="flex flex-col items-center text-gray-400"
      >
        <User className="h-6 w-6" />
        <span className="mt-1 text-xs">Profile</span>
      </Link>
    </nav>
  )
}
