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
import { useRouter } from 'next/navigation'
import { Select } from "@/components/ui/select"

function LoginIdRecovery() {
  const {theme, setTheme} = useTheme()
  const router = useRouter()

  const doLoginIdRecovery = () => {
    //router.push('/mfa-selection')
    // try {
    //     //await axios.post("/api/users/login", user)
    //     toast.success("OTP verification Successfull");
    //     router.push("/login")
        
    // } catch (error: any) {
    //     //toast.error("Email or Password is incorrect", error.message)
    // }finally{
    //     //setLoading(false)
    // }
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
                        <b className='text-xl'> Enter your email and we’ll check for a match </b><br/>
                        <> Try up to 3 emails or mobile numbers you may use for PayPal. </>
                    </div>
                    <br/>
                    <br/>
            <Input placeholder='Email 1 or mobile number 1' className={
              cn("h-16 w-80 px-2 mx-2 my-2 w-full")
            }/>
            <Input placeholder='Email 2 or mobile number 2' className={
              cn("h-16 w-80 px-2 mx-2 my-2 w-full")
            }/>
            <Input placeholder='Email 3 or mobile number 3' className={
              cn("h-16 w-80 px-2 mx-2 my-2 w-full")
            }/>
            
            <Button onClick={doLoginIdRecovery} variant={`default`} className='my-6'>Next</Button>
            <CustomLink href={`/login`} className='text-blue-500 my-2 text-center'>Return to login</CustomLink>
          </>
          </Border>
      </div>
  )
}

export default LoginIdRecovery