"'use client'"

import { useState, useRef } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { X, PenSquare } from 'lucide-react'
import { toast } from 'sonner'

interface EditProfileDialogProps {
  isOpen: boolean
  onClose: () => void
  initialData: {
    name: string
    bio: string
    image: string
  }
  onSave: (data: { name: string; bio: string; image: string }) => void
}

export function EditProfileDialog({
  isOpen,
  onClose,
  initialData,
  onSave,
}: EditProfileDialogProps) {
  const [name, setName] = useState(initialData.name)
  const [bio, setBio] = useState(initialData.bio)
  const [image, setImage] = useState(initialData.image)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ name, bio, image })
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith("'image/'")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setImage(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        toast('이미지 파일만 업로드 가능합니다.', {
          position: 'top-center',
        })
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0">
        <div className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">정보 수정</DialogTitle>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative mb-6 flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <img
                  src={image}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-[#4B3FF3] text-white hover:bg-[#4B3FF3]/90"
                  onClick={handleImageClick}
                  type="button"
                >
                  <PenSquare className="h-4 w-4" />
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-500">닉네임</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-500">자기소개</label>
              <div className="relative">
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="min-h-[100px] border-gray-300"
                  maxLength={100}
                />
                <span className="absolute bottom-2 right-2 text-sm text-gray-400">
                  {bio.length}/100
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg bg-[#4B3FF3] py-6 text-white hover:bg-[#4B3FF3]/90"
            >
              저장하기
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
