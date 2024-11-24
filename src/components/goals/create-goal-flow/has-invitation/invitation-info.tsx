'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ChevronLeft } from 'lucide-react'
import { Goal } from '@/types/progress'
import Image from 'next/image'

interface InvitationInfoProps {
  goalInfo: Goal
  open: boolean
  onOpenChange: (open: boolean) => void
  children?: React.ReactNode
}

export function InvitationInfo({
  goalInfo,
  open,
  onOpenChange,
  children,
}: InvitationInfoProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="default"
          className="w-full justify-center rounded-full bg-blue-600 py-6 text-white hover:bg-blue-700"
        >
          목표 확인하기 &gt;
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
              초대장 내용을 <br /> 확인해보세요 ✉️
            </DrawerTitle>
            <p className="mb-4 text-sm text-gray-500">
              꼭 수락하지 않아도 돼요 :&#41;
            </p>
            <div className="mb-4 rounded-lg border p-4">
              <h3 className="mb-2 text-xl font-semibold">{goalInfo.title}</h3>
              <div className="mb-2 flex items-center">
                <Image
                  src={goalInfo.participants[0].avatarUrl}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="mr-2 rounded-full"
                />
                <span>{goalInfo.participants[0].name}</span>
              </div>
              <p className="mb-2 text-sm text-gray-500">목표 기한</p>
              <p className="mb-2 text-sm">
                {goalInfo.startDate} - {goalInfo.endDate}
              </p>
              <p className="mb-2 text-sm text-gray-500">상세 설명</p>
              <p className="mb-2">{goalInfo.description}</p>
              <p className="text-sm text-gray-500">다짐 한마디</p>
              <p>나가 살아</p>
            </div>
            <Button
              variant="default"
              className="mb-2 w-full justify-center rounded-full bg-blue-600 py-6 text-white hover:bg-blue-700"
            >
              목표 참가하기 &gt;
            </Button>
            {children}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
