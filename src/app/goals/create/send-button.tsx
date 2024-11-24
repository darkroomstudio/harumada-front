'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy, Share2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function SendInvitationButton({
  goalInvitationCode,
}: {
  goalInvitationCode: string
}) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(goalInvitationCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("'Failed to copy text: '", err)
    }
  }

  // FIXME: Native Share?
  const share = async () => {
    const data = {
      title: 'Share your goal',
      text: goalInvitationCode,
    }

    if (navigator.canShare(data)) {
      try {
        await navigator.share(data)
      } catch (err) {
        console.error("'Error sharing: '", err)
      }
    } else {
      copyToClipboard()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="mb-2 w-full justify-center rounded-full bg-blue-600 py-6 text-white hover:bg-blue-700"
        >
          전송하기 &gt;
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your goal</DialogTitle>
          <DialogDescription>
            Share this content across various platforms or copy to clipboard.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input id="link" defaultValue={goalInvitationCode} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex justify-center pt-4">
          <Button onClick={share} className="flex items-center">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
