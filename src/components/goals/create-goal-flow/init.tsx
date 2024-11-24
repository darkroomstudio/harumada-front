'use client'

import type { Goal } from '@/components/goals/filter-tabs'
import { useState } from 'react'
import { AskInvitationCode } from './ask-invitation-code'
import { WriteInvitationCode } from './has-invitation/write-invitation-code'
import { InvitationPreview } from './has-invitation/invitation-preview'
import { InvitationInfo } from './has-invitation/invitation-info'
import { InvitationDeclined } from './has-invitation/invitation-declined'
import { toast } from 'sonner'

export function CreateGoalFlowInit() {
  const [openAskInvitationCode, setOpenAskInvitationCode] = useState(false)
  const [openWriteInvitation, setOpenWriteInvitation] = useState(false)
  const [openInvitationPreview, setOpenInvitationPreview] = useState(false)
  const [openInvitationInfo, setOpenInvitationInfo] = useState(false)
  const [openInvitationDeclined, setOpenInvitationDeclined] = useState(false)
  const [invitationCode, setInvitationCode] = useState('')
  const [goalInfo, setGoalInfo] = useState<Goal | undefined>()

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
    // close all drawers
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

  return (
    <AskInvitationCode
      open={openAskInvitationCode}
      onOpenChange={setOpenAskInvitationCode}
    >
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
    </AskInvitationCode>
  )
}
