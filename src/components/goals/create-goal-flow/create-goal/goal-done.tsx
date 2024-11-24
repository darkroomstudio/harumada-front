'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Check, ChevronLeft } from 'lucide-react'

export function GoalDone({
  open,
  onOpenChange,
  handleSend,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  handleSend: () => void
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-center rounded-full py-6"
        >
          다음 &gt;
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
              목표 설정이 <br /> 끝났어요 💫
            </DrawerTitle>
            <DrawerDescription>
              설정한 목표를 친구와 공유하여 <br /> 서로 동기부여를 높여보세요
            </DrawerDescription>
            <Button
              variant="default"
              className="mb-2 w-full justify-center rounded-full bg-blue-600 py-6 text-white hover:bg-blue-700"
              onClick={handleSend}
            >
              전송하기 &gt;
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
