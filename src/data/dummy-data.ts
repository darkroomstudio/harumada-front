import { ProgressData } from '@/types/progress'

export const progressData: ProgressData = {
  title: '트윌킹 연습',
  description: '트윌킹 연습 설명',
  currentDay: 17,
  totalDays: 60,
  startDate: '2024-06-28',
  endDate: '2024-09-18',
  currentStage: '종이배',
  nextStage: '해적선',
  progress: 99,
  participants: [
    { id: '1', avatar: '/placeholder.svg?height=40&width=40' },
    { id: '2', avatar: '/placeholder.svg?height=40&width=40' },
  ],
  attendanceRecords: [
    {
      day: 15,
      date: '6/28',
      users: [
        { id: '1', avatar: 'https://github.com/devjiwonchoi.png' },
        { id: '2', avatar: 'https://github.com/devjiwonchoi.png' },
      ],
    },
    {
      day: 16,
      date: '6/29',
      users: [
        { id: '1', avatar: 'https://github.com/devjiwonchoi.png' },
        { id: '2', avatar: 'https://github.com/devjiwonchoi.png' },
      ],
    },
    {
      day: 17,
      date: '6/30',
      users: [
        { id: '1', avatar: 'https://github.com/devjiwonchoi.png' },
        { id: '2', avatar: 'https://github.com/devjiwonchoi.png' },
      ],
    },
  ],
}
