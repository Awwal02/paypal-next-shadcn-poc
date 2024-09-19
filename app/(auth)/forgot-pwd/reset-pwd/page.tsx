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

function FP_ResetPassword() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>("")
  const [password2, setPassword2] = useState<string>("")

  const createUser = async () => {
    router.push("/dashboard")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
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
                <b className="text-xl"> Create a new password </b>
                <br />
                <>
                  {" "}
                  Don't reuse passwords, avoid personal info, and try combining
                  words.{" "}
                </>
              </div>
              <br />
              <br />

              <Input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create Password"
                className={cn("h-14 w-80 px-2 mx-2 my-2")}
              />
              <Input
                value={password2}
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Re-enter Password"
                className={cn("h-14 w-80 px-2 mx-2 my-2")}
              />
              {/* <PasswordInput label="Create Password" />
            <PasswordInput label="Re-enter Password" /> */}

              <Button type="submit" variant={`default`} className="my-6">
                Save password
              </Button>
            </>
          </Border>
        </div>
      </form>
    </>
  )
}

export default FP_ResetPassword
