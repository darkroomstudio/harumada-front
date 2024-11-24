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

const chips = [
  { label: '입주일', value: 'move-in' },
  { label: '한 달', value: 'one-month' },
  { label: '세달', value: 'three-months' },
  { label: '여섯 달', value: 'six-months' },
  { label: '열두 달', value: 'twelve-months' },
  { label: '기한 없음', value: 'no-limit' },
]

export function SetDateRange({
  open,
  onOpenChange,
  dateRange,
  onDateRangeChange,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  dateRange: string
  onDateRangeChange: (range: string) => void
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
          기간 설정하기 &gt;
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
              목표 기간을 설정해주세요.
            </DrawerTitle>
            <DrawerDescription>
              적절한 기간을 선택하여 꾸준히 목표를 달성해보세요
            </DrawerDescription>
            <div className="space-y-4">
              {/* Chips */}
              <div className="mb-8 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <button
                    key={chip.value}
                    onClick={() => onDateRangeChange(chip.value)}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      dateRange === chip.value
                        ? 'bg-[#4E3FFF] text-white'
                        : 'bg-[#F8F8F8] text-black'
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
              {children}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
