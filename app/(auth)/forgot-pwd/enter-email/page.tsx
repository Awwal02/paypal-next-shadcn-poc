"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import Script from "next/script"
import axios from "axios"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Border from "@/components/custom/Border/Border"
import CustomLink from "@/components/custom/Link/Link"
import LoginHeader from "@/components/custom/LoginHeader/LoginHeader"

function FP_EnterEmail() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const createUser = async () => {
    router.push("/password-recovery-mfa")
    var webAuth = new (window as any).auth0.WebAuth({
      //domain
      //clientId
    })

    webAuth.signup(
      {
        connection: "Username-Password-Authentication",
        email: email,
        password: password,
      },
      function (err: any) {
        if (err) return alert("Something went wrong: " + err?.message)
        return alert("success signup without login!")
      }
    )
    setTimeout(() => {
      // loginUser(email, password, )
      router.push("/api/auth/login")
    }, 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic (e.g., send email)
    router.push("/forgot-pwd/mfa-select") // Navigate to next step
  }

  return (
    <>
      <Script
        async={true}
        src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"
        strategy="lazyOnload"
      />
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            "min-h-screen min-w-screen flex items-center justify-center"
          )}
        >
          <Border className={cn("flex flex-col p-8 w-full lg:w-2/5")}>
            <>
              <LoginHeader className="my-4"></LoginHeader>
              <br />
              <div className="text-center text-sm">
                <b className="text-xl"> Need help with your password? </b>
                <br />
                <> Enter your email or username to get started. </>
              </div>
              <br />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or username"
                className={cn("h-14 w-80 px-2 mx-2 my-2")}
              />
              <br />
              <Button type="submit" variant={`default`} className="my-6">
                Next
              </Button>
            </>
          </Border>
        </div>
      </form>
    </>
  )
}

export default FP_EnterEmail
