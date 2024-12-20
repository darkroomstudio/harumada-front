'use client'

import { useState } from 'react'
import type { Goal } from '@/types/progress'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { GoalDetail } from './details/progress-tracker'

export function GoalCard({
  id,
  title,
  boatType,
  status,
  startDate,
  endDate,
  participants,
}: Goal) {
  const [isOpen, setIsOpen] = useState(false)
  const isCompleted = status === 'completed'

  return (
    <>
      <Card
        className={`relative overflow-hidden ${isCompleted ? 'grayscale' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`p-4 ${
            isCompleted ? 'bg-gray-200' : 'bg-[#4E3FFF]'
          } h-[160px] text-white`}
        >
          <div className="space-y-2">
            <p className="text-sm opacity-80">{endDate}</p>
            <h3 className="font-medium">{title}</h3>
            <div className="flex -space-x-2">
              {participants.map((participant) => (
                <Avatar
                  key={participant.name}
                  className="h-8 w-8 border-2 border-[#4E3FFF]"
                >
                  <AvatarImage src={participant.avatarUrl} alt="Participant" />
                </Avatar>
              ))}
            </div>
          </div>
          {boatType === 'boat' ? (
            <div className="absolute bottom-2 right-2 h-16 w-16 opacity-50">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 30L90 75H30L60 30Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M25 80L95 80L85 90H35L25 80Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          ) : (
            <div className="absolute bottom-2 right-2 h-16 w-16 opacity-50">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 30L90 75H30L40 30Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M35 76L85 76L75 86H45L35 76Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="65" cy="45" r="8" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>
      </Card>
      <GoalDetail open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
