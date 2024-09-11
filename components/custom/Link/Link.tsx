import { cn } from '@/lib/utils'
import { ChildrenType } from '@/types/ChildrenType'
import Link from 'next/link'
import React from 'react'

interface CustomLinkType extends ChildrenType 
{
    className: string
    href: string
}

function CustomLink({children, ...props}: CustomLinkType) {
  return (
    <Link {...props} className={
        cn("text-blue-600", props.className)
    }>{children}</Link>
  )
}

export default CustomLink