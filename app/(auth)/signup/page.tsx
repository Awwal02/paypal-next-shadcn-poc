"use client"
import React from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import { Input } from '@/components/shadcn/input'
import CustomLink from '@/components/custom/Link/Link'
import { Button } from '@/components/shadcn/button'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

function SignUp() {
  const {theme, setTheme} = useTheme()
  const router = useRouter()

  const doSignup = () => {
    router.push('/signup')
  }

  return (
    <div className={
      cn("min-h-screen min-w-screen flex items-center justify-center")
    }>
        <Border className={
          cn('flex flex-col p-8 w-3/5')
        }>
          <>
            <LoginHeader className="my-4"></LoginHeader>
            <br/>
            <div className="text-center text-sm">
                <b className='text-xl'> Create a business account </b><br/>
                <> Whether you're a business, nonprofit, or a casual seller, you're in the right place. </>
            </div>
            <br/>
            <br/>
            <Input placeholder='First name' className={
              cn("h-14 w-80 px-2 mx-2 my-2 w-full")
            }/>
            <Input placeholder='Middle name' className={
              cn("h-14 w-80 px-2 mx-2 my-2 w-full")
            }/>
            <Input placeholder='Last name' className={
              cn("h-14 w-80 px-2 mx-2 my-2 w-full")
            }/>
            <Input placeholder='Email address' className={
              cn("h-14 w-80 px-2 mx-2 my-2 w-full")
            }/>
            <Input placeholder='Password' className={
              cn("h-14 w-80 px-2 mx-2 my-2 w-full")
            }/>
            
            <Button onClick={doSignup} variant={`default`} className='my-6'>Agree and Create Account</Button>
            <>
            <>Already have an account?</><CustomLink href={`/login`} className='text-blue-500 my-2'><b>Login</b></CustomLink>
            </>
            

          </>
          </Border>
      </div>
  )
}

export default SignUp