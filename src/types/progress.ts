export interface User {
  id: string
  avatar: string
}

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
