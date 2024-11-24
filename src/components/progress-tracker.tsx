'use client'

import { useState } from 'react'
import { ArrowLeft, PenSquare, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { BoatIcon } from '@/components/goals/details/boat-icon'
import { ProgressBar } from '@/components/goals/details/progress-bar'
import { AttendanceDrawer } from '@/components/goals/details/attendance-drawer'
import { progressData } from '@/data/dummy-data'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { toast } from 'sonner'
import { Toaster } from 'sonner'

export function GoalDetail({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [isAttendanceDrawerOpen, setIsAttendanceDrawerOpen] = useState(false)
  const [hasAttended, setHasAttended] = useState(false)

  return (
    <>
      <Drawer open={open} onOpenChange={onClose} direction="right">
        <DrawerContent className="h-full w-full border-l-0 p-0 sm:max-w-full">
          <div className="flex h-full flex-col">
            <DrawerHeader className="border-b px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="text-left text-lg font-semibold">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2 h-9 w-9 rounded-full"
                    onClick={onClose}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  이전
                </div>
              </div>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto">
              <div className="pb-safe min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-6 text-white">
                  <span className="text-lg font-medium">
                    {progressData.currentStage}
                  </span>
                  <PenSquare className="h-6 w-6" />
                </div>

                {/* Boat Icon */}
                <div className="mb-8 flex justify-center">
                  <BoatIcon stage={progressData.currentStage} />
                </div>

                {/* Content */}
                <div className="min-h-screen rounded-t-[2rem] bg-white px-4 pt-6 shadow-lg">
                  {/* Title Section */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <DrawerTitle className="text-2xl font-bold text-gray-800">
                        {progressData.title}
                      </DrawerTitle>
                      <DrawerDescription className="sr-only">
                        {progressData.description}
                      </DrawerDescription>
                      <div className="flex items-center gap-1">
                        <span className="text-xl font-bold text-blue-600">
                          {progressData.currentDay}일째
                        </span>
                        <span className="text-gray-500">
                          /{progressData.totalDays}일
                        </span>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      {progressData.participants.map((participant, index) => (
                        <Image
                          key={participant.id}
                          src={participant.avatarUrl}
                          alt="Participant"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="mb-8">
                    <div className="mb-2 flex justify-between text-sm text-gray-500">
                      <span>진행도</span>
                      <span>
                        {progressData.nextStage}까지{' '}
                        {progressData.totalDays - progressData.currentDay}일
                      </span>
                    </div>
                    <ProgressBar
                      progress={progressData.progress}
                      participants={progressData.participants}
                      currentStage={progressData.currentStage}
                      nextStage={progressData.nextStage}
                    />
                  </div>

                  {/* Status Section */}
                  <div className="mb-8">
                    <h2 className="mb-4 text-lg font-bold text-gray-800">
                      상세 정보
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          icon: '⛵',
                          label: '현재 진행도',
                          value: `${progressData.currentDay} 일차`,
                        },
                        {
                          icon: '📅',
                          label: '목표 날짜',
                          value: `${progressData.endDate}까지`,
                        },
                        {
                          icon: '🚢',
                          label: '현재 단계',
                          value: progressData.currentStage,
                        },
                        {
                          icon: '🏴‍☠️',
                          label: '다음 단계',
                          value: progressData.nextStage,
                        },
                      ].map((item, index) => (
                        <div
                          key={item.label}
                          className="rounded-lg bg-gray-50 p-4 shadow-sm"
                        >
                          <div className="mb-2 text-2xl">{item.icon}</div>
                          <div className="text-sm text-gray-500">
                            {item.label}
                          </div>
                          <div className="mt-1 font-bold text-gray-800">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Attendance Section */}
                  <div className="mb-20">
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-lg font-bold text-gray-800">
                        출석 기록부
                      </h2>
                      <button
                        onClick={() => setIsAttendanceDrawerOpen(true)}
                        className="text-sm font-medium text-blue-500"
                      >
                        전체보기
                      </button>
                    </div>
                    <div className="space-y-4">
                      {progressData.attendanceRecords
                        .slice(0, 3)
                        .map((record, index) => (
                          <div
                            key={record.day}
                            className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm"
                          >
                            <div>
                              <div className="font-bold text-gray-800">
                                {record.day}일차
                              </div>
                              <div className="text-sm text-gray-500">
                                {record.date}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {record.users.map((user, userIndex) => (
                                  <Image
                                    key={`${user.id}-${userIndex}`}
                                    src={user.avatarUrl}
                                    alt="User"
                                    width={32}
                                    height={32}
                                    className="rounded-full border-2 border-white"
                                  />
                                ))}
                              </div>
                              <div className="rounded bg-green-50 px-2 py-1 text-sm text-green-600">
                                전체 완료
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Bottom Button */}

                  <Button
                    className={`w-full rounded-lg py-4 text-lg font-medium transition-colors duration-200 ${
                      hasAttended
                        ? "'bg-gray-400 cursor-not-allowed' hover:bg-gray-400"
                        : "'bg-blue-500 hover:bg-blue-600'"
                    }`}
                    disabled={hasAttended}
                    onClick={() => {
                      setHasAttended(true)
                      toast.success("'출석이 완료되었어요.'", {
                        position: 'top-center',
                      })
                    }}
                  >
                    {hasAttended ? "'출석완료'" : "'출석하기'"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Attendance Drawer */}
      <AttendanceDrawer
        isOpen={isAttendanceDrawerOpen}
        onClose={() => setIsAttendanceDrawerOpen(false)}
        records={progressData.attendanceRecords}
      />
      <Toaster />
    </>
  )
}
