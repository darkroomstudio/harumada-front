'use client'

import { Button } from '@/components/ui/button'

export function SendInvitationButton({
  goalInvitationCode,
}: {
  goalInvitationCode: string
}) {
  return (
    <Button
      variant="default"
      className="mb-2 w-full justify-center rounded-full bg-blue-600 py-6 text-white hover:bg-blue-700"
      onClick={() => {}}
    >
      전송하기 &gt;
    </Button>
  )
}
