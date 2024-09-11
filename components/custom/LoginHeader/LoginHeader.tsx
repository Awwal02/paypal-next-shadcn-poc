import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import { ChildrenType } from '@/types/ChildrenType'

interface LoginHeaderType extends ChildrenType {
    className: String
}

function LoginHeader({className}: LoginHeaderType) {
  return (
    <Image className={
        cn("items-center justify-center", className)
    } width={40} height={40} alt="paypal-logo" src={`paypal-mark-color.svg`}></Image>
  )
}

export default LoginHeader