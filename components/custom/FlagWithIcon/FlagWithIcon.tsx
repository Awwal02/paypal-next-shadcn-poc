import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FlagWithIcon({code} : {code: string}) {
  return (
    <>
        <Image alt={code} height={20} width={20} src={`/4x3/${code}.svg`} />
        <ChevronDown />
    </>
  )
}

export default FlagWithIcon