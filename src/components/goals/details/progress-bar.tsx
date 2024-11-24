import { User } from '@/types/progress'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  participants: User[]
  currentStage: string
  nextStage: string
}

export function ProgressBar({
  progress,
  participants,
  currentStage,
  nextStage,
}: ProgressBarProps) {
  return (
    <div className="relative mt-4 h-4 w-full rounded-full bg-blue-200">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-blue-500"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <div className="absolute -top-3 left-0">
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white"
          initial={{ x: 0 }}
          animate={{ x: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <svg viewBox="0 24" fill="none" className="h-6 w-6">
            <path
              d="M3 17H21L19 12L17 7L12 9L7 7L5 12L3 17Z"
              fill="currentColor"
              className="text-blue-500"
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute -bottom-6 left-0 text-xs text-blue-700">
        {currentStage}
      </div>
      <div className="absolute -bottom-6 right-0 text-xs text-blue-700">
        {nextStage}
      </div>
      <div className="absolute -top-3 right-0 flex -space-x-2">
        {participants.map((participant, index) => (
          <motion.div
            key={participant.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image
              src={participant.avatar}
              alt="Participant"
              width={24}
              height={24}
              className="rounded-full border-2 border-white"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
