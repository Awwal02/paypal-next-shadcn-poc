"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import { Input } from '@/components/shadcn/input'
import Link from 'next/link'
import CustomLink from '@/components/custom/Link/Link'
import { Button } from '@/components/shadcn/button'
import { useTheme } from 'next-themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'

function Login() {
  const {theme, setTheme} = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [otp, setOtp] = useState<string>("")
  const [response, setResponse] = useState<any>()
  const [showOtp, setShowOtp] = useState(false)

  const mfaUser = async () => {
    let data2 = new FormData()
      data2.append('otp', otp);
      data2.append('mfaToken', response.data.data.mfaToken)
      let config2 = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/mfa-otp',
        data : data2,
        mfaToken: response.data.data.mfaToken
      };
      let responseData = await axios.request(config2)
      sessionStorage.setItem('dataUser', JSON.stringify(responseData))
      console.log(JSON.stringify(responseData));
      router.push('/')
  }

  const validateUser = async () => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/logged',
      data : data
    };

    
    axios.request(config)
    .then(async (response) => {
      // router.push("/")
      console.log(response.data.data.showMFA)
      // await mfaUser(response)
      setShowOtp(true)
      setResponse(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className={
      cn("min-h-screen min-w-screen flex items-center justify-center", 'bg-background')
    }>
        <Border className={
          cn('flex flex-col p-8 w-3/5')
        }>
          <>
            <LoginHeader className="my-4"></LoginHeader>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email or mobile number' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full")
            }/>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full")
            }/>
            <Input type="password" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='otp' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full",showOtp ? '' :'hidden')
            }/>
            <CustomLink href={`/forgot-email`} className='text-blue-500 my-2 self-start'>Forgot email?</CustomLink>
            <Button variant={`default`} onClick={validateUser} className='my-6'>Login</Button>
            <Button variant={`secondary`} onClick={mfaUser} className={cn('my-6 ',showOtp ? '' :'hidden')}>mfa validate</Button>
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