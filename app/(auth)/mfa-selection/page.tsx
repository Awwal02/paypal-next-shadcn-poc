"use client"
import React from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import CustomLink from '@/components/custom/Link/Link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useRouter } from "next/navigation"
import { RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const MFASelection = () => {
    const [value, setValue] = React.useState("mobile")
    const router = useRouter()

    const receiveOtp = () => {
        router.push("/verify-user")
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
                cn('flex flex-col p-8 w-full lg:w-2/5')
              }>
                <>
                    <LoginHeader className="my-4"></LoginHeader>
                    <br/>
                    <div className="text-center text-sm">
                        <b className='text-xl'> Quick security check </b><br/>
                        <> This helps us protect your account. </>
                    </div>
                    <br/>
                    <br/>
                    
                    <RadioGroup onValueChange={(value) => setValue(value)} defaultValue={value} className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mobile" id="r1" />
                            <Label htmlFor="r1">Get a text on Mobile ******1122</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="whatsapp" id="r2" />
                            <Label htmlFor="r2">Get a WhatsApp text</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="r3" />
                            <Label htmlFor="r3">Get an email</Label>
                        </div>
                    </RadioGroup>

                    <br/>
                    <h1 className='text-xs'> By continuing, you confirm that you are authorized to use this phone number and agree to receive text messages to confirm your identity in this session. Carrier less may apply. </h1>
                    <Button onClick={receiveOtp} variant={`default`} className='my-6'>Continue</Button>
                </>
            </Border>
        </div>
    )
}

export default MFASelection