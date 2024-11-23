import type { Goal } from '@/components/goals/filter-tabs'
import { FilterTabs } from '@/components/goals/filter-tabs'
import { GoalCard } from '@/components/goals/goal-card'
import { PaperBoat } from '@/components/paper-boat'
import { Button } from '@/components/ui/button'

async function getGoals(): Promise<Goal[]> {
  const goals = [
    {
      id: '1',
      title: '목표 1',
      description: '목표 1 설명',
      status: 'completed' as const,
      date: '2024-06-30',
      participants: [],
      boatType: 'pirate' as const,
    },
    {
      id: '2',
      title: '목표 2',
      description: '목표 2 설명',
      status: 'in-progress' as const,
      date: '2024-06-30',
      participants: [],
      boatType: 'pirate' as const,
    },
    {
      id: '3',
      title: '목표 3',
      description: '목표 3 설명',
      status: 'planned' as const,
      date: '2024-06-30',
      participants: [],
      boatType: 'boat' as const,
    },
  ]
  return goals
}

// TODO: Try to lower the dynamic-ness as possible use Suspense and loading state
export default async function Goals({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const goals = await getGoals()
  const activeTab = (await searchParams).activeTab as Goal['status']

  const isEmpty = goals.length === 0

  const completedGoals = []
  const plannedGoals = []
  const inProgressGoals = []

  if (goals.length > 0) {
    for (const goal of goals) {
      if (goal.status === 'in-progress') {
        inProgressGoals.push(goal)
      }
      if (goal.status === 'planned') {
        plannedGoals.push(goal)
      }
      if (goal.status === 'completed') {
        completedGoals.push(goal)
      }
    }
  }

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950">
      <FilterTabs
        goalsLengths={{
          'in-progress': inProgressGoals.length,
          planned: plannedGoals.length,
          completed: completedGoals.length,
        }}
      />
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        {isEmpty ? (
          <>
            <PaperBoat />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              {activeTab === 'in-progress' && '진행 예정인 목표가 없어요'}
              {activeTab === 'planned' && '완료된 목표가 없어요'}
              {activeTab === 'completed' && '진행중인 목표가 없어요'}
            </p>
          </>
        ) : (
          <>
            {activeTab === 'in-progress' && (
              <div className="grid grid-cols-2 gap-4">
                {inProgressGoals.map((goal) => (
                  <GoalCard key={goal.id} {...goal} />
                ))}
              </div>
            )}

            {activeTab === 'planned' && (
              <div className="grid grid-cols-2 gap-4">
                {plannedGoals.map((goal) => (
                  <GoalCard key={goal.id} {...goal} />
                ))}
              </div>
            )}

            {activeTab === 'completed' && (
              <div className="grid grid-cols-2 gap-4">
                {completedGoals.map((goal) => (
                  <GoalCard key={goal.id} {...goal} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="p-4">
        <Button className="w-full bg-[#4E3FFF] text-white hover:bg-[#4E3FFF]/90">
          + 목표 추가하기
        </Button>
      </div>
    </div>
  )
}
