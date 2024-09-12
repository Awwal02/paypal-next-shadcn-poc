"use client"
import React from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import CustomLink from '@/components/custom/Link/Link'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import axios from 'axios'


const VerifyUser = () => {
    const [value, setValue] = React.useState("")
    const router = useRouter()

    const mfaUser = async () => {
        let data2 = new FormData()
        let mfaValidationToken = window?.sessionStorage?.getItem('mfaValidateToken') as string
          data2.append('otp', value);
          data2.append('mfaToken', mfaValidationToken)
          let config2 = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/mfa-otp',
            data : data2,
            mfaToken: mfaValidationToken
          };
          let responseData = await axios.request(config2)
          window?.sessionStorage?.setItem('dataUser', JSON.stringify(responseData))
          console.log(JSON.stringify(responseData));
          if(sessionStorage.getItem('country') === 'FR' || sessionStorage.getItem('country') === 'fr') {
              router.push('/mfa-selection')
          } else {
            router.push('/mfa-selection')
          }
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
                        <h1 className='text-xl'><b> Enter your code </b></h1>
                        {value.length === 6 ? (
                        <>Please submit the entered code for verification.</>
                        ) : (
                        <>Enter the verification code we sent to your email / phone number ending in *****@gmail.com  / ******1122.</>
                        )}
                    </div>
                    <br/>
                    <br/>
                    
                    {/* <h6> Enter the verification code we sent to your email / phone number ending in *****@gmail.com  / ******1122. </h6> <br/> */}
                    <InputOTP 
                      maxLength={6}
                      value={value}
                      onChange={(value) => setValue(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} className={cn(`mx-2 border`)}/>
                            <InputOTPSlot index={1} className={cn(`mx-2 border`)}/>
                            <InputOTPSlot index={2} className={cn(`mx-2 border`)}/>
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} className={cn(`mx-2 border`)}/>
                            <InputOTPSlot index={4} className={cn(`mx-2 border`)}/>
                            <InputOTPSlot index={5} className={cn(`mx-2 border`)}/>
                        </InputOTPGroup>
                    </InputOTP>

                    <Button onClick={mfaUser} variant={`default`} className='my-6'>Submit</Button>
                    <CustomLink href={`/verify-user`} className='text-blue-500 my-2'>Send New Code</CustomLink>
                </>
            </Border>
        </div>
    )
}

export default VerifyUser