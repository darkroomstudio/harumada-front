'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SetStateAction, useState } from 'react'

export function MotivationInput({
  motivationText,
}: {
  motivationText: string
}) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      console.log(inputValue)
    }
  }

  const handleButtonClick = () => {
    console.log(inputValue)
  }

  return (
    <div className="relative">
      <Input
        className="rounded-[44px] border-none bg-[#F8F8F8] placeholder:text-black"
        type="text"
        placeholder={motivationText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
      />
      <Button
        className="absolute bottom-0 right-0 top-0 mr-2"
        onClick={handleButtonClick}
        variant="ghost"
        size="icon"
      >
        <Image src="/search.svg" alt="search" width={24} height={24} />
      </Button>
    </div>
  )
}
