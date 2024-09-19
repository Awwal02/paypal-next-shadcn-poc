"use client"

import { useRouter } from "next/navigation"

import MFASelect from "@/app/(common)/mfa-select/MFASelect"

export default function FP_MFASelect() {
  const router = useRouter()

  const handleMfaSubmit = (mfaCode: string) => {
    // Handle MFA submission (e.g., validate MFA code)
    router.push("/forgot-pwd/verify-code") // Move to OTP verification
  }

  return (
    <div>
      <MFASelect onSubmit={handleMfaSubmit} />
    </div>
  )
}
