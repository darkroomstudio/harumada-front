'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

type AskInvitationCodeProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function AskInvitationCode({
  open,
  onOpenChange,
  children,
}: AskInvitationCodeProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          className="w-full bg-[#4E3FFF] text-white hover:bg-[#4E3FFF]/90"
          variant="outline"
          onClick={() => onOpenChange(true)}
        >
          + 목표 추가하기
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-full border-l-0 p-0 sm:max-w-full">
        <div className="flex h-full flex-col">
          <DrawerHeader className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="text-left text-lg font-semibold">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 h-9 w-9 rounded-full"
                  onClick={() => onOpenChange(false)}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                이전
              </div>
            </div>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <DrawerTitle className="mb-4 text-2xl font-bold">
              초대 코드를 받으셨나요?
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              초대 코드를 입력하면 초대된 목표를 확인할 수 있어요.
            </DrawerDescription>
            <div className="space-y-4">
              <Button className="w-full justify-start rounded-full bg-blue-500 py-6 text-white hover:bg-blue-600">
                초대 코드가 있어요 &gt;
              </Button>
              {children}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
