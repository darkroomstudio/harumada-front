import type { Goal } from '@/types/progress'
import { FilterTabs } from '@/components/goals/filter-tabs'
import { CreateGoalFlowInit } from '@/components/goals/create-goal-flow/init'

async function getGoals(): Promise<Goal[]> {
  const goals = [
    {
      id: '1',
      title: '매일 운동하기',
      description: '매일 30분 이상 운동하여 건강한 생활 습관 만들기',
      status: 'completed' as const,
      startDate: '2024-03-01',
      endDate: '2024-03-30',
      participants: [
        {
          id: '1',
          name: 'Jiwon Choi',
          description: '',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '2',
            completed: '5',
            totalPartners: '3',
          },
        },
        {
          id: '2',
          name: 'GG Kim',
          description: '',
          avatarUrl: 'https://github.com/ggkim0614.png',
          stats: {
            inProgress: '1',
            completed: '3',
            totalPartners: '2',
          },
        },
      ],
      boatType: 'pirate' as const,
    },
    {
      id: '2',
      title: '새로운 언어 배우기',
      description: '스페인어 기초 회화 마스터하기',
      status: 'in-progress' as const,
      startDate: '2024-01-01',
      endDate: '2024-06-15',
      participants: [
        {
          id: '1',
          name: 'Jiwon Choi',
          description: '',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '3',
            completed: '4',
            totalPartners: '2',
          },
        },
        {
          id: '3',
          name: 'Jeongho Yang',
          description: '',
          avatarUrl: 'https://github.com/jeonghoyang12.png',
          stats: {
            inProgress: '2',
            completed: '1',
            totalPartners: '4',
          },
        },
      ],
      boatType: 'boat' as const,
    },
    {
      id: '3',
      title: '독서 모임 시작하기',
      description: '매월 한 권의 책을 읽고 토론하는 모임 운영',
      status: 'planned' as const,
      startDate: '2024-04-01',
      endDate: '2024-12-31',
      participants: [
        {
          id: '1',
          name: 'Jiwon Choi',
          description: '',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '4',
            completed: '2',
            totalPartners: '5',
          },
        },
        {
          id: '2',
          name: 'GG Kim',
          description: '',
          avatarUrl: 'https://github.com/ggkim0614.png',
          stats: {
            inProgress: '1',
            completed: '6',
            totalPartners: '3',
          },
        },
      ],
      boatType: 'pirate' as const,
    },
    {
      id: '4',
      title: '작은 정원 가꾸기',
      description: '베란다에 허브와 채소 키우기',
      status: 'in-progress' as const,
      startDate: '2024-03-01',
      endDate: '2024-05-20',
      participants: [
        {
          id: '1',
          name: 'Jiwon Choi',
          description: '',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '2',
            completed: '3',
            totalPartners: '1',
          },
        },
        {
          id: '3',
          name: 'Jeongho Yang',
          description: '',
          avatarUrl: 'https://github.com/jeonghoyang12.png',
          stats: {
            inProgress: '5',
            completed: '2',
            totalPartners: '4',
          },
        },
      ],
      boatType: 'boat' as const,
    },
    {
      id: '5',
      title: '프로그래밍 프로젝트',
      description: '개인 포트폴리오 웹사이트 제작하기',
      status: 'planned' as const,
      startDate: '2024-05-01',
      endDate: '2024-07-15',
      participants: [
        {
          id: '1',
          name: 'Jiwon Choi',
          description: '',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '3',
            completed: '4',
            totalPartners: '2',
          },
        },
        {
          id: '3',
          name: 'Jeongho Yang',
          description: '',
          avatarUrl: 'https://github.com/jeonghoyang12.png',
          stats: {
            inProgress: '1',
            completed: '5',
            totalPartners: '3',
          },
        },
      ],
      boatType: 'pirate' as const,
    },
    {
      id: '6',
      title: '요리 도전',
      description: '매주 새로운 요리 레시피 시도하기',
      status: 'planned' as const,
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      participants: [
        {
          id: '1',
          name: 'Jiwon Choi',
          description: '',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '2',
            completed: '3',
            totalPartners: '4',
          },
        },
        {
          id: '2',
          name: 'GG Kim',
          description: '',
          avatarUrl: 'https://github.com/ggkim0614.png',
          stats: {
            inProgress: '4',
            completed: '1',
            totalPartners: '2',
          },
        },
      ],
      boatType: 'boat' as const,
    },
  ] satisfies Goal[]
  return goals
}

// TODO: Use Suspense and loading state
export default async function Goals() {
  const goals = await getGoals()

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950">
      <FilterTabs goals={goals} />
      <div className="p-4">
        <CreateGoalFlowInit />
      </div>
    </div>
  )
}
