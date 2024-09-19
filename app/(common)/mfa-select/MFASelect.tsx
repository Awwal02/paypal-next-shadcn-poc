"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Border from "@/components/custom/Border/Border"
import CustomLink from "@/components/custom/Link/Link"
import LoginHeader from "@/components/custom/LoginHeader/LoginHeader"

export default function MFASelect({
  onSubmit,
}: {
  onSubmit: (value: string) => void
}) {
  const [value, setValue] = React.useState("mobile")
  const router = useRouter()

  const receiveOtp = () => {
    router.push("/")
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value) // Pass the MFA code to the parent component
  }

  return (
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
              <b className="text-xl"> Quick security check </b>
              <br />
              <> This helps us protect your account. </>
            </div>
            <br />
            <br />

            <RadioGroup
              onValueChange={(value) => setValue(value)}
              defaultValue={value}
              className="flex flex-col space-y-1"
            >
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

            <br />
            <h1 className="text-xs">
              {" "}
              By continuing, you confirm that you are authorized to use this
              phone number and agree to receive text messages to confirm your
              identity in this session. Carrier less may apply.{" "}
            </h1>
            <Button type="submit" variant={`default`} className="my-6">
              Continue
            </Button>
          </>
        </Border>
      </div>
    </form>
  )
}

//export default MFASelect
