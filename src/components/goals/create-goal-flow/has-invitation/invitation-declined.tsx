'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Check, ChevronLeft } from 'lucide-react'

interface InvitationDeclinedProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  handleDecline: () => void
}

export function InvitationDeclined({
  open,
  onOpenChange,
  handleDecline,
}: InvitationDeclinedProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-center rounded-full py-6"
        >
          목표 거절하기 &gt;
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-full border-l-0 p-0 sm:max-w-full">
        <div className="flex h-full flex-col">
          <DrawerHeader className="border-b px-4 py-3">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 h-9 w-9 rounded-full"
                onClick={() => onOpenChange(false)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <span className="text-lg font-semibold">이전</span>
            </div>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <DrawerTitle className="mb-2 text-2xl font-bold">
              정말 거절하시겠어요? 🥲
            </DrawerTitle>
            <p className="mb-4 text-sm text-gray-500">
              수락하려면 이전으로 돌아가세요. 나중에도 코드만 있으면 언제든지
              수락할 수 있어요.
            </p>
            <Button
              variant="default"
              className="mb-2 w-full justify-center rounded-full bg-blue-600 py-6 text-white hover:bg-blue-700"
              onClick={handleDecline}
            >
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
