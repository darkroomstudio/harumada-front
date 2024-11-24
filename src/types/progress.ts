export interface AttendanceRecord {
  day: number
  date: string
  users: User[]
}

export interface ProgressData {
  title: string
  description: string
  currentDay: number
  totalDays: number
  startDate: string
  endDate: string
  currentStage: string
  nextStage: string
  progress: number
  participants: User[]
  attendanceRecords: AttendanceRecord[]
}

export interface User {
  id: string
  name: string
  description: string
  avatarUrl: string
  stats: {
    inProgress: string
    completed: string
    totalPartners: string
  }
}

export type Goal = {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  participants: User[]
  boatType: 'pirate' | 'boat'
  status: 'completed' | 'in-progress' | 'planned'
}
