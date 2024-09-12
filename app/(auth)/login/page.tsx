"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import CustomLink from '@/components/custom/Link/Link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import LoginFooter from '@/components/custom/LoginFooter/LoginFooter'
import { isBrowser } from '@/lib/windowChecker'

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
      if(isBrowser()) {
        window?.sessionStorage?.setItem('dataUser', JSON.stringify(responseData))
      }
      console.log(JSON.stringify(responseData));
      router.push('/')
  }

  const doLogin = async () => {
    //router.push('/mfa-selection')
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
      // router.push('/mfa-selection')
      console.log(response.data.data.showMFA)
      if(isBrowser()) {
        window?.sessionStorage?.setItem('mfaValidateToken', response.data.data.mfaToken)
      }
      router.push('/verify-user')
      // await mfaUser(response)
      // setShowOtp(true)
      // setResponse(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const doSignup = () => {
    router.push('/signup')
  }

  return (
    <div className={
      cn("min-h-screen min-w-screen flex items-center justify-center")
    }>
        <Border className={
          cn('flex flex-col p-8 w-full lg:w-2/5')
        }>
          <>
            <LoginHeader className="my-4"></LoginHeader>
            <br/>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email or mobile number' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full")
            }/>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full")
            }/>
            <Input type="password" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='otp' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full",showOtp ? '' :'hidden')
            }/>
            <CustomLink href={`/login-id-recovery`} className='text-blue-500 my-2 self-start'><b>Forgot email or mobile number?</b></CustomLink>
            <Button variant={`default`} onClick={doLogin} className='my-6'>Login</Button>
            <Button variant={`secondary`} onClick={mfaUser} className={cn('my-6 ',showOtp ? '' :'hidden')}>mfa validate</Button>
            <CustomLink href={`/api/auth/login`} className='text-blue-500 my-2 font-bold'>Auth0 Login</CustomLink>
            <LoginFooter></LoginFooter>
            <br/>
            <div className="flex">
              <div className="flex-1 border-t border-gray-800"></div>
                <span className="mx-4 text-gray-800">Or</span>
              <div className="flex-row border-t border-gray-800"></div>
            </div>
            <Button onClick={doSignup} variant={`outline`} className='my-6'>Sign Up</Button>
            <LoginFooter></LoginFooter>
          </>
          </Border>
      </div>
  )
}

export default Login