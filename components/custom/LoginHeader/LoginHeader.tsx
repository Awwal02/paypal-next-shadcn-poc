import Image from 'next/image'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ChildrenType } from '@/types/ChildrenType'
import { useSearchParams } from 'next/navigation'
import { isBrowser } from '@/lib/windowChecker'

interface LoginHeaderType extends ChildrenType {
    className: String
}

function LoginHeader({className}: LoginHeaderType) {
  const searchParams = useSearchParams()
  const search = searchParams.get('partner') || (isBrowser()  && window.sessionStorage.getItem('searchParam')) || ''
  useEffect(() => {
    if(isBrowser() && !window.sessionStorage.getItem('searchParam')) {
      window.sessionStorage.setItem('searchParam', search)
    }
  }, [])
  return (
    <div className={cn("flex column")}>
      <Image className={
          cn("items-center justify-center", className)
      } width={60} height={60} alt="paypal-logo" src={`paypal-mark-color.svg`}></Image>
      {search && <Image className={
          cn("items-center justify-center mx-4", className)
      } width={60} height={60} alt="paypal-logo"  src={`/partners/${search}.svg`}></Image>}
    </div>
  )
}

export default LoginHeader