// ""
import React, { useRef } from "react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import BorderedHr from "../BorderedHr/BorderedHr"
import FlagWithIcon from "../FlagWithIcon/FlagWithIcon"
import FlagWithName from "../FlagWithName/FlagWithName"
import LoginHeader from "../LoginHeader/LoginHeader"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { countryCode } from "@/lib/country"
import DialogContent2 from "./DialogContentCustom"
import dynamic from "next/dynamic"

function CountrySelector({flag, clickCountryDropdown}: {flag: string, clickCountryDropdown: (x: string) => void}) {
    const dialogButtonRef = useRef<any>()
    const closButtonRef = useRef<any>()
    const LazyLoadedDialog = dynamic(import("./DialogContentCustom"))

    const handleCLoseDialog = () => {
      dialogButtonRef.current.secondRefFn()
    }

    return (
    <Dialog>
      <DialogTrigger asChild className="max-w-7xl">
        <Button  variant="ghost">
          <>
            <FlagWithIcon code={flag} />
          </>
        </Button>
      </DialogTrigger>
      <DialogContent2 ref={dialogButtonRef} clickCountryDropdown={clickCountryDropdown} handleCLoseDialog={handleCLoseDialog}/>
    </Dialog>
  )
}

export default CountrySelector
