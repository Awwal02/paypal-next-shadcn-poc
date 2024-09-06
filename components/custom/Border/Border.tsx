import { cn } from '@/lib/utils'
import React from 'react'

type BorderType = {
    children: React.ReactNode
}

function Border({children}: BorderType) {
  return (
    <div className={
        cn("p-4 rounded-lg border-2 items-center justify-center")
      }>{children}</div>
  )
}

export default Border