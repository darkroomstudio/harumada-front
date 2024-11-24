import { motion } from 'framer-motion'

interface BoatIconProps {
  stage: string
}

export function BoatIcon({ stage }: BoatIconProps) {
  const boatVariants = {
    종이배: {
      viewBox: '0 24',
      path: 'M3 17h18L19 7l-5.268 5.268a1 1 0 1-1.464 0L7 7 5 17z',
    },
    요트: {
      viewBox: '0 24',
      path: 'M3 18h18l-1.5-6h-15L3 18zm9-15l9 4.5V18h-3v-6H6v6H3V7.5L12 3z',
    },
    범선: {
      viewBox: '0 24',
      path: 'M21 17H3l2-7h14l2 7zM6 8l3-4h6l3 4H6zm6-6l-3 3h6l-3-3z',
    },
    해적선: {
      viewBox: '0 24',
      path: 'M21 17H3l2-7h14l2 7zM6 8l3-4h6l3 4H6zm6-6l-3 3h6l-3-3zm0 11a1 1 0 0-2 2z',
    },
  }

  const currentBoat =
    boatVariants[stage as keyof typeof boatVariants] || boatVariants['종이배']

  return (
    <div className="flex h-32 w-32 items-center justify-center">
      <motion.svg
        viewBox={currentBoat.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-white"
        initial={{ y: 10 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <motion.path
          d={currentBoat.path}
          fill="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  )
}
