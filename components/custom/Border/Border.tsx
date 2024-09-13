import { cn } from '@/lib/utils'
import React from 'react'

type BorderType = {
    children: React.ReactNode,
    className: string
}

function Border({children, className}: BorderType) {
  return (
    <div className={
        cn("items-center justify-center rounded-lg p-4 text-center lg:border-2", className)
      }>{children}</div>
  )
}

export default Border