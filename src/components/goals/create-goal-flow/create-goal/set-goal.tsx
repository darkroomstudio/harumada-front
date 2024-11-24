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
import { Input } from '@/components/ui/input'

export function SetGoal({
  open,
  onOpenChange,
  goalTitle,
  onGoalTitleChange,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  goalTitle: string
  onGoalTitleChange: (title: string) => void
  children: React.ReactNode
}) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onGoalTitleChange(event.target.value)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerTrigger asChild>
        <Button
          className="w-full justify-start rounded-full py-6 text-slate-950 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          variant="outline"
          onClick={() => onOpenChange(true)}
        >
          직접 목표 설정하기 &gt;
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
              목표를 설정해주세요.
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              친구와 공유할 수 있는 목표를 입력해주세요
            </DrawerDescription>
            <div className="space-y-4">
              <Input
                value={goalTitle}
                onChange={handleInputChange}
                className="rounded-[44px] border-none bg-[#F8F8F8] placeholder:text-black"
                type="text"
                placeholder="입력하세요"
              />
              {children}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
