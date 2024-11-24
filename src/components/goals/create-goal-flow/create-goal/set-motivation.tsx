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
import { Textarea } from '@/components/ui/textarea'

export function SetMotivation({
  open,
  onOpenChange,
  motivation,
  onMotivationChange,
  handleCreateGoal,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  motivation: string
  onMotivationChange: (motivation: string) => void
  handleCreateGoal: () => void
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerTrigger asChild>
        <Button
          className="w-full justify-start rounded-full py-6 text-slate-950 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          variant="outline"
          onClick={() => onOpenChange(true)}
        >
          다음 &gt;
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
              마지막으로 다짐 <br /> 한마디를 적어주세요 👊
            </DrawerTitle>
            <DrawerDescription>
              목표를 이루기 위한 다짐을 적어주세요!
            </DrawerDescription>
            <div className="space-y-4">
              <div className="relative">
                <Textarea
                  value={motivation}
                  onChange={(e) => onMotivationChange(e.target.value)}
                  placeholder="나가 살아"
                  className="min-h-[120px] resize-none pr-12"
                  maxLength={50}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {motivation.length}/50
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full justify-center rounded-full py-6"
                onClick={handleCreateGoal}
              >
                다음 &gt;
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
