'use client'

import type { Goal } from '@/types/progress'
import Image from 'next/image'
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
import { ProfileModal } from '@/components/profile-modal'
import { useState } from 'react'

interface InvitationPreviewProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  invitationCode: string
  goalInfo?: Goal
  onGetInvitationInfo: (code: string) => void
  children: React.ReactNode
}

export function InvitationPreview({
  open,
  onOpenChange,
  invitationCode,
  goalInfo,
  onGetInvitationInfo,
  children,
}: InvitationPreviewProps) {
  const [profileModalOpen, setProfileModalOpen] = useState(false)

  return (
    <>
      <Drawer open={open} onOpenChange={onOpenChange} direction="right">
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start rounded-full bg-blue-500 py-6 text-white hover:bg-blue-600"
            onClick={() => onGetInvitationInfo(invitationCode)}
          >
            인증 완료하기 &gt;
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-full border-l-0 p-0 sm:max-w-full">
          {goalInfo && (
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
                <DrawerTitle className="mb-8 text-3xl font-bold leading-tight">
                  이런! {goalInfo.participants[0].name} 님에게서 <br /> 거부할
                  수 없는 <br /> 제안이 왔어요 🤪
                </DrawerTitle>
                <DrawerDescription className="sr-only">
                  초대 코드를 입력하면 초대된 목표를 확인할 수 있어요.
                </DrawerDescription>
                <div className="mb-8 flex flex-col items-center">
                  <Image
                    src={goalInfo.participants[0].avatarUrl}
                    alt={`${goalInfo.participants[0].name}'s avatar`}
                    width={100}
                    height={100}
                    className="mb-2 rounded-full"
                  />
                  <p className="font-semibold">
                    {goalInfo.participants[0].name}
                  </p>
                  <Button variant="link" className="text-blue-600">
                    프로필 보기
                  </Button>
                </div>
                {children}
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
      {goalInfo?.participants[0] && (
        <ProfileModal
          open={profileModalOpen}
          onOpenChange={setProfileModalOpen}
          data={goalInfo.participants[0]}
        />
      )}
    </>
  )
}
