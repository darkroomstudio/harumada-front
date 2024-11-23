'use client'

import { X, Bell, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

interface Notification {
  id: string
  avatar: string
  username: string
  message: string
  timestamp: string
}

interface NotificationsProps {
  notifications: Notification[]
  onClose: () => void
}

const notifications = [
  {
    id: '1',
    avatar: '/placeholder.svg?height=40&width=40',
    username: 'Dojo님이',
    message: '고양이 댄스 목표에 도전했습니다.',
    timestamp: '15분 전',
  },
  {
    id: '2',
    avatar: '/placeholder.svg?height=40&width=40',
    username: 'Dojo님이',
    message: '고양이 댄스 목표에 도전했습니다.',
    timestamp: '1시간 전',
  },
  {
    id: '3',
    avatar: '/placeholder.svg?height=40&width=40',
    username: 'Dojo님이',
    message: '고양이 댄스 목표에 도전했습니다.',
    timestamp: '1일 전',
  },
  {
    id: '4',
    avatar: '/placeholder.svg?height=40&width=40',
    username: 'Dojo님이',
    message: '고양이 댄스 목표에 도전했습니다.',
    timestamp: '5일 전',
  },
  {
    id: '5',
    avatar: '/placeholder.svg?height=40&width=40',
    username: 'Dojo님이',
    message: '고양이 댄스 목표에 도전했습니다.',
    timestamp: '1주일 전',
  },
]

export default function Notifications({
  notifications = [],
  onClose,
}: NotificationsProps) {
  const isEmpty = notifications.length === 0

  return (
    <div className="fixed inset-0 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-xl font-semibold">알림</h1>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
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
              취로가기
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

      {/* Bottom Navigation */}
      <div className="fixed inset-x-0 bottom-0 border-t bg-white">
        <div className="flex justify-around p-4">
          <Button variant="ghost" size="icon" className="flex-col gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 21V13H15V21M3 9L12 2L21 9V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 21 19 21H5C4.46957 3.96086 3.58579 20.4142C3.21071 3 19V9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H21M3 21H21M12 3V21M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs">Feed</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 5.92172 5.17157 16.1716C4.42143 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 8 7C8 4.79086 9.79086 3 3C14.2091 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
