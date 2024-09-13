"use client"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import Border from "@/components/custom/Border/Border"
import LoginHeader from "@/components/custom/LoginHeader/LoginHeader"
import { Input } from "@/components/ui/input"
import CustomLink from "@/components/custom/Link/Link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import Script from "next/script"

function SignUp() {
  const {theme, setTheme} = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const createUser = async () => {
    var webAuth = new (window as any).auth0.WebAuth({
        // domain
        // clientId
      });
      
      webAuth.signup({ 
        connection: 'Username-Password-Authentication', 
        email: email, 
        password: password
      }, function (err: any) { 
        console.log("success Login !")
        // if (err) return alert('Something went wrong: ' + err?.message); 
        //   return alert('success signup without login!') 
      });
      setTimeout(() => {
        // loginUser(email, password, )
        router.push('/api/auth/login')
      },500)
}

  

  return (
    <>
    <Script async={true} src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js" strategy='lazyOnload'/>
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
                <b className='text-xl'> Create a business account </b><br/>
                <> Whether you are a business, nonprofit, or a casual seller, you are in the right place. </>
            </div>
            <br/>
            <br/>
            <Input placeholder="First name" className={
              cn("h-14 w-80 px-2 mx-2 my-2")
            }/>
            <Input placeholder="Middle name" className={
              cn("h-14 w-80 px-2 mx-2 my-2")
            }/>
            <Input placeholder="Last name" className={
              cn("h-14 w-80 px-2 mx-2 my-2")
            }/>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className={
              cn("h-14 w-80 px-2 mx-2 my-2")
            }/>
            <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={
              cn("h-14 w-80 px-2 mx-2 my-2")
            }/>
            
            <Button onClick={createUser} variant={`default`} className="my-6">Agree and Create Account</Button>
            <>
            <>Already have an account?</><CustomLink href={`/login`} className="text-blue-500 my-2"><b>Login</b></CustomLink>
            </>
            

          </>
          </Border>
      </div>
      </>
  )
}

export default SignUp