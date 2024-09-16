"use client"

import { useRouter } from "next/navigation"

import VerifyCode from "@/app/(common)/verify-code/VerifyCode"

export default function FP_VerifyCode() {
  const router = useRouter()

  const handleOtpSubmit = (otp: string) => {
    // Handle OTP validation logic
    router.push("/forgot-pwd/reset-pwd") // Move to password reset
  }

  return (
    <div>
      <VerifyCode onSubmit={handleOtpSubmit} />
    </div>
  )
}
