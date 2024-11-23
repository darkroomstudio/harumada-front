import { X, Bell, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { XButton } from './x-button'

type Notification = {
  id: string
  avatar: string
  username: string
  message: string
  timestamp: string
}

async function getNotifications(): Promise<Notification[]> {
  return []
}

export default async function Notifications() {
  const notifications = await getNotifications()
  const isEmpty = notifications.length === 0

  return (
    <div className="fixed inset-0 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">알림</h1>
        <XButton />
      </div>

      <ScrollArea className="h-[calc(100vh-8rem)]">
        {isEmpty ? (
          // Empty state
          <div className="flex h-full flex-col items-center justify-center space-y-4 p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Bell className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-lg font-medium">새로운 알림이 없어요</h2>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              알림이 생기면 꼭 확인할게요 🔔✨
            </p>
            <Button className="bg-[#4263eb] text-white hover:bg-[#3b5bde]">
              뒤로가기
            </Button>
          </div>
        ) : (
          // Notifications list
          <div className="divide-y">
            {/* Warning notification */}
            <div className="flex items-start gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  오늘의 출석체크 가능 시간이 1시간째에 남지 않았어요
                </p>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  3분 전
                </span>
              </div>
            </div>

            {/* Regular notifications */}
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 p-4">
                <Avatar className="shrink-0">
                  <AvatarImage
                    src={notification.avatar}
                    alt={notification.username}
                  />
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{notification.username}</span>
                    {notification.message}
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
