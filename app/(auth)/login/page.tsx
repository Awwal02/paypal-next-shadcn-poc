"use client"
import React from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import { Input } from '@/components/shadcn/input'
import Link from 'next/link'
import CustomLink from '@/components/custom/Link/Link'
import { Button } from '@/components/shadcn/button'
import { useTheme } from 'next-themes'

function Login() {
  const {theme, setTheme} = useTheme()
  return (
    <div className={
      cn("min-h-screen min-w-screen flex items-center justify-center")
    }>
        <Border className={
          cn('flex flex-col p-8 w-3/5')
        }>
          <>
            <LoginHeader className="my-4"></LoginHeader>
            <Input placeholder='Email or mobile number' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full")
            }/>
            <CustomLink href={`/forgot-email`} className='text-blue-500 my-2 self-start'>Forgot email?</CustomLink>
            <Button variant={`default`} className='my-6'>Login</Button>
            {/* <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        console.log("reached", theme)
        setTheme(theme === "light" ? "dark" : "light")
      }}
    >{theme}</Button> */}
            <CustomLink href={`/api/auth/login`} className='text-blue-500 my-2'>Auth0 Login</CustomLink>
          </>
          </Border>
      </div>
  )
}

export default Login