import { Home, Flag, User } from 'lucide-react'
import ProgressCard from '@/components/custom/progress-card'

export default function Page() {
  return (
    <main>
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">진행중인 목표</h2>

        <ProgressCard
          dueDate="2024-05-18"
          progress={0.3}
          title="트월킹 연습"
          currentDay={17}
          totalDays={60}
        />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t bg-white p-4">
        <button className="flex flex-col items-center text-blue-600">
          <Home className="h-6 w-6" />
          <span className="mt-1 text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <Flag className="h-6 w-6" />
          <span className="mt-1 text-xs">Goals</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <User className="h-6 w-6" />
          <span className="mt-1 text-xs">Profile</span>
        </button>
      </div>
    </main>
  )
}
