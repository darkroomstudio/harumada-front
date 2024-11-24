'use client'

import type { Goal } from '@/components/goals/filter-tabs'
import { useState } from 'react'
import { toast } from 'sonner'
import { WriteInvitationCode } from './has-invitation/write-invitation-code'
import { InvitationPreview } from './has-invitation/invitation-preview'
import { InvitationInfo } from './has-invitation/invitation-info'
import { InvitationDeclined } from './has-invitation/invitation-declined'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { SetGoal } from './create-goal/set-goal'
import { SetDateRange } from './create-goal/set-date-range'
import { SetStartDate } from './create-goal/set-start-date'
import { SetDescription } from './create-goal/set-description'
import { SetMotivation } from './create-goal/set-motivation'
import { GoalDone } from './create-goal/goal-done'
import { useRouter } from 'next/navigation'

export function CreateGoalFlowInit() {
  const [openInit, setOpenInit] = useState(false)
  // Has Invitation
  const [openAskInvitationCode, setOpenAskInvitationCode] = useState(false)
  const [openWriteInvitation, setOpenWriteInvitation] = useState(false)
  const [openInvitationPreview, setOpenInvitationPreview] = useState(false)
  const [openInvitationInfo, setOpenInvitationInfo] = useState(false)
  const [openInvitationDeclined, setOpenInvitationDeclined] = useState(false)
  const [invitationCode, setInvitationCode] = useState('')
  const [goalInfo, setGoalInfo] = useState<Goal | undefined>()
  // Create Goal
  const [openSetGoal, setOpenSetGoal] = useState(false)
  const [openSetDateRange, setOpenSetDateRange] = useState(false)
  const [openSetStartDate, setOpenSetStartDate] = useState(false)
  const [openSetDescription, setOpenSetDescription] = useState(false)
  const [openSetMotivation, setOpenSetMotivation] = useState(false)
  const [openGoalDone, setOpenGoalDone] = useState(false)
  const [goalTitle, setGoalTitle] = useState('')
  const [dateRange, setDateRange] = useState('week')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [description, setDescription] = useState('')
  const [motivation, setMotivation] = useState('')
  const [goalDone, setGoalDone] = useState(false)

  const router = useRouter()

  const getInvitationInfo = (code: string) => {
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

  const handleDecline = () => {
    // close has invitation flow drawers
    setOpenInit(false)
    setOpenAskInvitationCode(false)
    setOpenWriteInvitation(false)
    setOpenInvitationPreview(false)
    setOpenInvitationInfo(false)
    setOpenInvitationDeclined(false)

    // FIXME: Toast not displayed
    toast('거절이 완료됐어요. 언제든지 코드로 재수락 가능해요.', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      position: 'top-center',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    })
  }

  const handleCreateGoal = () => {
    const goalData = {
      title: goalTitle,
      dateRange,
      startDate,
      description,
      motivation,
    }

    // redirect to create page with data
    router.push(
      `/goals/create?data=${encodeURIComponent(JSON.stringify(goalData))}`
    )
  }

  return (
    <Drawer open={openInit} onOpenChange={setOpenInit} direction="right">
      <DrawerTrigger asChild>
        <Button
          className="w-full bg-[#4E3FFF] text-white hover:bg-[#4E3FFF]/90"
          variant="outline"
          onClick={() => setOpenInit(true)}
        >
          + 목표 추가하기
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
                  onClick={() => setOpenInit(false)}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                이전
              </div>
            </div>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <DrawerTitle className="mb-4 text-2xl font-bold">
              초대 코드를 받으셨나요?
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              초대 코드를 입력하면 초대된 목표를 확인할 수 있어요.
            </DrawerDescription>
            <div className="space-y-4">
              <WriteInvitationCode
                open={openWriteInvitation}
                onOpenChange={setOpenWriteInvitation}
                invitationCode={invitationCode}
                onInvitationCodeChange={setInvitationCode}
              >
                <InvitationPreview
                  open={openInvitationPreview}
                  onOpenChange={setOpenInvitationPreview}
                  invitationCode={invitationCode}
                  goalInfo={goalInfo}
                  onGetInvitationInfo={getInvitationInfo}
                >
                  <InvitationInfo
                    open={openInvitationInfo}
                    onOpenChange={setOpenInvitationInfo}
                    goalInfo={goalInfo!}
                  >
                    <InvitationDeclined
                      open={openInvitationDeclined}
                      onOpenChange={setOpenInvitationDeclined}
                      handleDecline={handleDecline}
                    />
                  </InvitationInfo>
                </InvitationPreview>
              </WriteInvitationCode>
              <SetGoal
                open={openSetGoal}
                onOpenChange={setOpenSetGoal}
                goalTitle={goalTitle}
                onGoalTitleChange={setGoalTitle}
              >
                <SetDateRange
                  open={openSetDateRange}
                  onOpenChange={setOpenSetDateRange}
                  dateRange={dateRange}
                  onDateRangeChange={setDateRange}
                >
                  <SetStartDate
                    open={openSetStartDate}
                    onOpenChange={setOpenSetStartDate}
                    startDate={startDate}
                    onStartDateChange={setStartDate}
                  >
                    <SetDescription
                      open={openSetDescription}
                      onOpenChange={setOpenSetDescription}
                      description={description}
                      onDescriptionChange={setDescription}
                    >
                      <SetMotivation
                        open={openSetMotivation}
                        onOpenChange={setOpenSetMotivation}
                        motivation={motivation}
                        onMotivationChange={setMotivation}
                        handleCreateGoal={handleCreateGoal}
                      />
                    </SetDescription>
                  </SetStartDate>
                </SetDateRange>
              </SetGoal>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
