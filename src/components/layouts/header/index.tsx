import Link from 'next/link'
import Image from 'next/image'
import { MotivationInput } from './motivation-input'

export function Header() {
  return (
    <header className="pt-[71px]">
      <div className="mb-2 flex items-center justify-between px-2 py-[2.5px]">
        <h1 className="text-3xl font-extrabold">홈</h1>
        <Link
          href="/notifications"
          className="hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-md"
        >
          <Image
            src="/notification.svg"
            alt="notification"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <MotivationInput />
    </header>
  )
}
