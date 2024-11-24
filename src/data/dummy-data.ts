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
    {
      id: '1',
      name: 'User 1',
      description: 'User 1 description',
      avatarUrl: 'https://github.com/devjiwonchoi.png',
      stats: {
        inProgress: '0',
        completed: '0',
        totalPartners: '0',
      },
    },
    {
      id: '2',
      name: 'User 2',
      description: 'User 2 description',
      avatarUrl: 'https://github.com/devjiwonchoi.png',
      stats: {
        inProgress: '0',
        completed: '0',
        totalPartners: '0',
      },
    },
  ],
  attendanceRecords: [
    {
      day: 15,
      date: '6/28',
      users: [
        {
          id: '1',
          name: 'User 1',
          description: 'User 1 description',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '0',
            completed: '0',
            totalPartners: '0',
          },
        },
        {
          id: '2',
          name: 'User 2',
          description: 'User 2 description',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '0',
            completed: '0',
            totalPartners: '0',
          },
        },
      ],
    },
    {
      day: 16,
      date: '6/29',
      users: [
        {
          id: '1',
          name: 'User 1',
          description: 'User 1 description',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '0',
            completed: '0',
            totalPartners: '0',
          },
        },
        {
          id: '2',
          name: 'User 2',
          description: 'User 2 description',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '0',
            completed: '0',
            totalPartners: '0',
          },
        },
      ],
    },
    {
      day: 17,
      date: '6/30',
      users: [
        {
          id: '1',
          name: 'User 1',
          description: 'User 1 description',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '0',
            completed: '0',
            totalPartners: '0',
          },
        },
        {
          id: '2',
          name: 'User 2',
          description: 'User 2 description',
          avatarUrl: 'https://github.com/devjiwonchoi.png',
          stats: {
            inProgress: '0',
            completed: '0',
            totalPartners: '0',
          },
        },
      ],
    },
  ],
}
