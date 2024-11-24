import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { SendInvitationButton } from './send-button'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const Fallback = () => {
  return (
    <>
      <h2 className="mb-2 text-2xl font-bold">
        초대 코드를 <br /> 생성 중이에요 👷
      </h2>
      <h3>잠시만 기다려주세요</h3>
      <Button
        variant="default"
        className="mb-2 w-full justify-center rounded-full bg-gray-400 py-6 text-white"
        disabled
      >
        전송하기 &gt;
      </Button>
    </>
  )
}

type GoalInitData = {
  title: string
  startDate: string
  endDate: string
  description: string
  motivation: string
}

async function getGoalInvitationCode(goalInitData: GoalInitData) {
  console.log({ goalInitData })
  return '123456'
}

export default async function CreateGoalPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const goalDataStr: string = (await searchParams).goalData as string
  const goalData: GoalInitData = JSON.parse(goalDataStr)

  const goalInvitationCode = await getGoalInvitationCode(goalData)

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <Suspense fallback={<Fallback />}>
          <h2 className="mb-2 text-2xl font-bold">
            목표 설정이 <br /> 끝났어요 💫
          </h2>
          <h3>
            설정한 목표를 친구와 공유하여 <br /> 서로 동기부여를 높여보세요
          </h3>
          <SendInvitationButton goalInvitationCode={goalInvitationCode} />
        </Suspense>
      </div>
    </div>
  )
}
