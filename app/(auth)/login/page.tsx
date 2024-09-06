import React from 'react'
import { cn } from "@/lib/utils"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'

function Login() {
  return (
    <div className={
      cn("min-h-screen min-w-screen flex items-center justify-center")
    }>
        <Border>
          {/* <LoginHeader></LoginHeader> */}
          Login</Border>
      </div>
  )
}

export default Login