import React, { useState } from "react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CountrySelector from "../CountrySelector/CountrySelector";
import dynamic from "next/dynamic";



// import { IoIosArrowDropdownCircle } from "react-icons";

function LoginFooter() {
  // const ComponentA = dynamic(() => import('../CountrySelector/CountrySelector'))
    const [flag, setFlag] = useState<string>('ca');
  const clickCountryDropdown = (code: string) => {
    setFlag(code)
    console.log("clickCountryDropdown", code)
  }
  return (
    <div
      className={cn("m-10 flex cursor-pointer")}
    >
      <CountrySelector flag={flag} clickCountryDropdown={clickCountryDropdown} ></CountrySelector>
     {/* <CountrySelector ></CountrySelector> */}
    </div>
  )
}

export default LoginFooter
