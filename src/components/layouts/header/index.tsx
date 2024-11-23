import { NotificationDrawer } from '@/components/notifications/notification-drawer'

export async function Header() {
  return (
    <header className="pt-[71px]">
      <div className="mb-2 flex items-center justify-between px-2 py-[2.5px]">
        <h1 className="text-3xl font-extrabold">홈</h1>
        <NotificationDrawer />
      </div>
    </header>
  )
}
