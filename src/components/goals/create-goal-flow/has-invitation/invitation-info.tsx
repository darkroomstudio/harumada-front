'use client'

import type { SetStateAction } from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ChevronLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function ViewInvitation() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      console.log(inputValue)
    }
  }

  // TODO: Replace with SWR
  const getInvitationInfo = (invitationCode: string) => {
    console.log({ invitationCode })
    return {
      title: '스쿠버 다이빙 배우기',
      dueDate: '2024-06-30',
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <Button
          className="w-full justify-start rounded-full py-6 text-slate-950 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          variant="outline"
          onClick={() => setOpen(true)}
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
                  onClick={() => setOpen(false)}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                이전
              </div>
            </div>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <DrawerTitle className="mb-4 text-2xl font-bold">
              초대 코드를 입력해주세요
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              친구와 공유할 수 있는 목표를 입력해주세요
            </DrawerDescription>
            <div className="space-y-4">
              <Input
                className="rounded-[44px] border-none bg-[#F8F8F8] placeholder:text-black"
                type="text"
                placeholder="입력하세요"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
              />
              <Button
                variant="outline"
                className="w-full justify-start rounded-full bg-blue-500 py-6 text-white hover:bg-blue-600"
                onClick={() => getInvitationInfo(inputValue)}
              >
                인증 완료하기 &gt;
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
