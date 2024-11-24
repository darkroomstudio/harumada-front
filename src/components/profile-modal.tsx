'use client'

import { X, Crown } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Image from 'next/image'
import { User } from '@/types/progress'

interface ProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: User
}

export function ProfileModal({ open, onOpenChange, data }: ProfileModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-[425px]">
        <div className="relative flex flex-col items-center p-6 pt-12">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 dark:ring-offset-slate-950"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          {/* Avatar */}
          <div className="relative">
            <div className="rounded-full border-4 border-blue-500 p-1">
              <Image
                src={data.avatarUrl}
                alt={`${data.name}'s profile`}
                width={100}
                height={100}
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 p-1">
              <Crown className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {data.description}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6 flex w-full justify-between border-t pt-4">
            <div className="flex-1 text-center">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                진행중인 목표
              </div>
              <div className="mt-1 font-semibold">{data.stats?.inProgress}</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                완료한 목표
              </div>
              <div className="mt-1 font-semibold">{data.stats?.completed}</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                함께한 동료
              </div>
              <div className="mt-1 font-semibold">
                {data.stats?.totalPartners}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
