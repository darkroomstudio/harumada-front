import { X } from 'lucide-react'
import Image from 'next/image'
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer'
import { AttendanceRecord } from '@/types/progress'

interface AttendanceDrawerProps {
  isOpen: boolean
  onClose: () => void
  records: AttendanceRecord[]
}

export function AttendanceDrawer({
  isOpen,
  onClose,
  records,
}: AttendanceDrawerProps) {
  return (
    <Drawer open={isOpen} onClose={onClose} direction="right">
      <DrawerContent className="h-full w-full border-l-0 p-0 sm:max-w-full">
        <div className="flex items-center justify-between border-b p-4">
          <DrawerTitle>출석 기록</DrawerTitle>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="divide-y">
          {records.map((record) => (
            <div
              key={`${record.day}-${record.date}`}
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {record.users.map((user, index) => (
                    <Image
                      key={`${user.id}-${index}`}
                      src={user.avatar}
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-medium">{record.day}일차</div>
                  <div className="text-sm text-gray-500">{record.date}</div>
                </div>
              </div>
              <div
                className={`rounded px-2 py-1 text-sm ${
                  record.users.length === 2
                    ? "'bg-green-50 text-green-600'"
                    : "'bg-orange-50 text-orange-600'"
                }`}
              >
                {record.users.length === 2
                  ? "'전체 완료'"
                  : `${record.users.length}일 완료`}
              </div>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
