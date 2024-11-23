'use client'

import type { Goal } from '@/components/goals/filter-tabs'
import Image from 'next/image'
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
import { InvitationInfo } from './invitation-info'

// TODO: Use suspense stream
function DrawerContents({
  goalInfo,
  onClose,
}: {
  goalInfo: Goal
  onClose: () => void
}) {
  return (
    <div className="flex h-full flex-col">
      <DrawerHeader className="border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-left text-lg font-semibold">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 h-9 w-9 rounded-full"
              onClick={onClose}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            이전
          </div>
        </div>
      </DrawerHeader>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <DrawerTitle className="mb-8 text-3xl font-bold leading-tight">
          이런! {goalInfo.participants[0].name} 님에게서 <br /> 거부할 수 없는{' '}
          <br /> 제안이 왔어요 🤪
        </DrawerTitle>
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={
              goalInfo.participants[0].avatar ||
              '/placeholder.svg?height=100&width=100'
            }
            alt={`${goalInfo.participants[0].name}'s avatar`}
            width={100}
            height={100}
            className="mb-2 rounded-full"
          />
          <p className="font-semibold">{goalInfo.participants[0].name}</p>
          <Button variant="link" className="text-blue-600">
            프로필 보기
          </Button>
        </div>
        <InvitationInfo goalInfo={goalInfo} />
      </div>
    </div>
  )
}

export function InvitationPreview({
  invitationCode,
}: {
  invitationCode: string
}) {
  const [open, setOpen] = useState(false)
  const [goalInfo, setGoalInfo] = useState<Goal>()

  const getInvitationInfo = (invitationCode: string) => {
    console.log({ invitationCode })
    // TODO: Replace with SWR
    const goal = {
      id: '1',
      title: '스쿠버 다이빙 배우기',
      description: '스쿠버 다이빙 배우기',
      startDate: '2024-06-30',
      endDate: '2024-07-01',
      participants: [
        {
          id: '0',
          name: '최지원',
          avatar: 'https://github.com/devjiwonchoi.png',
        },
      ],
      boatType: 'pirate',
      status: 'planned',
    } satisfies Goal

    setGoalInfo(goal)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start rounded-full bg-blue-500 py-6 text-white hover:bg-blue-600"
          onClick={() => getInvitationInfo(invitationCode)}
        >
          인증 완료하기 &gt;
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-full border-l-0 p-0 sm:max-w-full">
        {goalInfo && (
          <DrawerContents goalInfo={goalInfo} onClose={() => setOpen(false)} />
        )}
      </DrawerContent>
    </Drawer>
  )
}
