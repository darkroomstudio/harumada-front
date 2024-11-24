'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { PaperBoat } from '../paper-boat'
import { GoalCard } from './goal-card'
import { Goal, User } from '@/types/progress'

export function FilterTabs({ goals }: { goals: Goal[] }) {
  const [activeTab, setActiveTab] = useState('in-progress')

  const handleActiveTab = (value: string) => {
    setActiveTab(value)
  }

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
    <>
      <Tabs
        defaultValue="in-progress"
        className="w-full"
        onValueChange={handleActiveTab}
      >
        <TabsList className="h-12 w-full justify-start rounded-none border-b bg-white dark:bg-slate-950">
          <TabsTrigger
            value="in-progress"
            className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
          >
            진행중 <span className="ml-1">({inProgressGoals.length})</span>
          </TabsTrigger>
          <TabsTrigger
            value="planned"
            className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
          >
            진행 예정 <span className="ml-1">({plannedGoals.length})</span>
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
          >
            완료됨 <span className="ml-1">({completedGoals.length})</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
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
    </>
  )
}
