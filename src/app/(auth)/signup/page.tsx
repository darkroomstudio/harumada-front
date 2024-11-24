'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Signup() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="mx-auto max-w-sm space-y-8 pt-16">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            하루마다와 함께
            <br />
            나아갈 준비되셨나요? ⛵️
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            간편로그인 후 이용이 가능합니다.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <Button
            variant="outline"
            className="relative h-12 w-full border-[#e5e5e5]"
            onClick={() => console.log('Google login')}
          >
            <span className="text-sm font-medium">구글로 회원가입하기</span>
          </Button>

          <Button
            className="h-12 w-full bg-[#03C75A] text-white hover:bg-[#03C75A]/90"
            onClick={() => console.log('Naver login')}
          >
            <span className="text-sm font-medium">네이버로 회원가입하기</span>
          </Button>

          <Button
            className="h-12 w-full bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
            onClick={() => console.log('Kakao login')}
          >
            <span className="text-sm font-medium">카카오로 회원가입하기</span>
          </Button>

          <Button
            className="h-12 w-full bg-[#4759A5] text-white hover:bg-[#4759A5]/90"
            onClick={() => console.log('Email login')}
          >
            <span className="text-sm font-medium">이메일로 회원가입하기</span>
          </Button>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-50"
          >
            계정이 있으신가요? 로그인하기
          </Link>
        </div>
      </div>
    </div>
  )
}
