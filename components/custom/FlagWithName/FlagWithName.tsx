import React from "react"
import Image from "next/image"

interface CodeName {
  code: string
  name: string
  onClick: (x: string) => void
}

function FlagWithName({ code, name, onClick }: CodeName) {
  return (
    <div className="m-2 flex cursor-pointer px-5" onClick={() => onClick(code)}>
      <Image
        alt={name as string}
        height={20}
        width={20}
        src={`/4x3/${code}.svg`}
      />
      <span className="p-2 font-bold">{name}</span>
    </div>
  )
}

export default FlagWithName
