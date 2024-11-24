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

export function SetDescription({
  open,
  onOpenChange,
  description,
  onDescriptionChange,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  description: string
  onDescriptionChange: (description: string) => void
  children: React.ReactNode
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
              목표를 상세히 <br /> 설명해 주세요 🧐
            </DrawerTitle>
            <DrawerDescription>
              목표를 설정한 이유와 이를 달성하기 위한 <br /> 구체적인 계획을
              작성해 주세요
            </DrawerDescription>
            <div className="space-y-4">
              <div className="relative">
                <Textarea
                  value={description}
                  onChange={(e) => onDescriptionChange(e.target.value)}
                  placeholder="매일 열한시 전에 술을 계획 할 수 있도록 할 것"
                  className="min-h-[120px] resize-none pr-12"
                  maxLength={100}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {description.length}/100
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
