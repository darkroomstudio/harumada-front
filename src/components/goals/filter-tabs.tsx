'use client'

import { useRouter } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type Goal = {
  id: string
  title: string
  description: string
  date: string
  participants: {
    id: string
    avatar: string
  }[]
  boatType: 'pirate' | 'boat'
  status: 'completed' | 'in-progress' | 'planned'
}

export function FilterTabs({
  goalsLengths,
}: {
  goalsLengths: { [key: string]: number }
}) {
  const router = useRouter()
  const handleActiveTab = (value: string) => {
    router.push(`/goals?activeTab=${value}`)
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
            진행중 <span className="ml-1">({goalsLengths['in-progress']})</span>
          </TabsTrigger>
          <TabsTrigger
            value="planned"
            className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
          >
            진행 예정 <span className="ml-1">({goalsLengths['planned']})</span>
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
          >
            완료됨 <span className="ml-1">({goalsLengths['completed']})</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}
