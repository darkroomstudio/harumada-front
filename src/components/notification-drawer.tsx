'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, Bell, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

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

export function NotificationDrawer() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (open) {
      setLoading(true)
      getNotifications().then((data) => {
        setNotifications(data)
        setLoading(false)
      })
    }
  }, [open])

  const isEmpty = notifications.length === 0 && !loading

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* TODO: Suspense fallback */}
        <Image
          src="/notification.svg"
          alt="notification"
          width={24}
          height={24}
        />
      </SheetTrigger>
      <SheetContent side="right" className="w-full p-0 sm:max-w-md">
        <SheetHeader className="border-b p-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-semibold">알림</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-auto p-0"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-5rem)]">
          {isEmpty ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 p-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Bell className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-lg font-medium">새로운 알림이 없어요</h2>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                알림이 생기면 꼭 확인할게요 🔔✨
              </p>
              <Button
                className="bg-[#4263eb] text-white hover:bg-[#3b5bde]"
                onClick={() => setOpen(false)}
              >
                뒤로가기
              </Button>
            </div>
          ) : (
            <div className="divide-y">
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

              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-3 p-4"
                >
                  <Avatar className="shrink-0">
                    <AvatarImage
                      src={notification.avatar}
                      alt={notification.username}
                    />
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">
                        {notification.username}
                      </span>
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
      </SheetContent>
    </Sheet>
  )
}
