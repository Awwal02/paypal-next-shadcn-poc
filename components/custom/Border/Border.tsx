import { cn } from '@/lib/utils'
import React from 'react'

type BorderType = {
    children: React.ReactNode,
    className: string
}

function Border({children, className}: BorderType) {
  return (
    <div className={
        cn("p-4 rounded-lg lg:border-2 items-center justify-center text-center", className)
      }>{children}</div>
  )
}

export default Border