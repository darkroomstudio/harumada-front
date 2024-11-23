'use client'

import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function XButton() {
  const router = useRouter()
  return (
    <Button variant="ghost" size="icon" onClick={router.back}>
      <X className="h-5 w-5" />
    </Button>
  )
}
