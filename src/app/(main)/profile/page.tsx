'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Home, BarChart2, User } from 'lucide-react'
import { EditProfileDialog } from '@/components/profile/edit-profile-dialog'

function getUserProfile() {
  return {
    name: '김선과 요정라쿤 🦝',
    bio: '세상의 주인공처럼 살아봐~',
    image: 'https://github.com/devjiwonchoi.png',
    email: 'devjiwonchoi@gmail.com',
  }
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const profileData = getUserProfile()

  const handleSave = (newData: {
    name: string
    bio: string
    image: string
  }) => {
    setIsEditing(false)
    console.log('Updated profile data:', newData)
    toast('프로필 수정이 완료됐어요.', {
      position: 'top-center',
    })
  }

  const handleDeactivate = () => {
    // Implement account deactivation logic here
    console.log('Account deactivation requested')
    toast('계정 탈퇴가 요청되었습니다.', {
      position: 'top-center',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="relative mx-auto min-h-screen max-w-md bg-white pb-20">
        <div className="p-4">
          <h1 className="mb-6 text-xl font-bold">프로필</h1>

          <div className="mb-8 flex flex-col items-center">
            <div className="mb-3 h-24 w-24 overflow-hidden rounded-full">
              <img
                src={profileData.image}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold">{profileData.name}</h2>
            <Button
              onClick={() => setIsEditing(true)}
              className="rounded-full bg-[#4B3FF3] px-6 text-white hover:bg-[#4B3FF3]/90"
            >
              정보 수정
            </Button>
          </div>

          <div className="mb-6 border-b border-t py-4">
            <h3 className="mb-4 text-sm text-gray-500">내 목표</h3>
            <div className="mb-3 flex items-center justify-between">
              <span>진행중</span>
              <span className="flex items-center">
                1
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>완료됨</span>
              <span className="flex items-center">
                0
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">아이디</span>
              <span>{profileData.email}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">앱 관리</span>
              <span>10.7.2</span>
            </div>
          </div>

          <Button
            onClick={handleDeactivate}
            variant="ghost"
            className="mt-8 w-full text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            회원 탈퇴하기
          </Button>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md border-t bg-white">
          <div className="flex justify-around py-4">
            <Home className="h-6 w-6" />
            <BarChart2 className="h-6 w-6" />
            <User className="h-6 w-6 text-[#4B3FF3]" />
          </div>
        </nav>

        <EditProfileDialog
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
          initialData={profileData}
          onSave={handleSave}
        />
      </main>
    </div>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
