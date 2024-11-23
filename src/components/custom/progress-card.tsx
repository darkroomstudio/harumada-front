'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface ProgressCardProps {
  dueDate: string
  progress: number
  title: string
  currentDay: number
  totalDays: number
  avatars?: string[]
}

export default function ProgressCard({
  dueDate,
  progress,
  title,
  currentDay,
  totalDays,
  avatars = [
    '/placeholder.svg?height=32&width=32',
    '/placeholder.svg?height=32&width=32',
  ],
}: ProgressCardProps) {
  // Format date to YYYY.MM.DD
  const formattedDate = new Date(dueDate)
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\./g, '.')
    .slice(0, -1)

  return (
    <Card className="w-[280px] bg-white">
      <CardHeader className="pb-0">
        <p className="text-muted-foreground text-sm">완료예정일</p>
        <p className="font-semibold">{formattedDate}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {/* Progress Ring */}
        <div className="relative h-32 w-32">
          <svg className="h-full w-full -rotate-90 transform">
            <circle
              cx="64"
              cy="64"
              r="60"
              className="fill-none stroke-[#eeeef0] stroke-[8]"
            />
            <circle
              cx="64"
              cy="64"
              r="60"
              className="fill-none stroke-[#4263eb] stroke-[8]"
              strokeDasharray={`${2 * Math.PI * 60}`}
              strokeDashoffset={`${2 * Math.PI * 60 * (1 - progress)}`}
              strokeLinecap="round"
            />
          </svg>
          {/* Boat Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#4263eb]"
            >
              <path
                d="M3 20L5 16M21 20L19 16M12 15L7 20M12 15L17 20M12 15V8M12 8L7 13M12 8L17 13M7 13H17M7 13L3 17M17 13L21 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold">{title}</h2>

        {/* Progress Text */}
        <p className="text-muted-foreground text-sm">
          {currentDay}일째/{totalDays}일
        </p>

        {/* Avatars */}
        <div className="flex -space-x-2">
          {avatars.map((avatar, i) => (
            <Avatar key={i} className="border-2 border-white">
              <AvatarImage src={avatar} alt={`User ${i + 1}`} />
            </Avatar>
          ))}
        </div>

        {/* Action Button */}
        <Button className="w-full bg-[#4263eb] text-white hover:bg-[#3b5bde]">
          출석하기
        </Button>
      </CardContent>
    </Card>
  )
}
