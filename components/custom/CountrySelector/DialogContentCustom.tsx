import React from 'react'
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
import { cn } from '@/lib/utils'
import LoginHeader from '../LoginHeader/LoginHeader'
import { countryCode } from '@/lib/country'
import BorderedHr from '../BorderedHr/BorderedHr'
import FlagWithName from '../FlagWithName/FlagWithName'
import dynamic from 'next/dynamic'

const DialogContentCustom = React.forwardRef<
  any, any
>(({clickCountryDropdown, handleCLoseDialog}, ref) => {
    const FlagNameComp = dynamic(() => import("../FlagWithName/FlagWithName"))
  return (
    <DialogContent className="size-full max-w-full" ref={ref}>
        <DialogHeader className={cn("items-center")}>
          <DialogTitle className="flex">
            <LoginHeader
              className={`flex items-center justify-center`}
            ></LoginHeader>
          </DialogTitle>
          {/* <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription> */}
        </DialogHeader>
        <div className="column m-auto flex h-full max-w-5xl flex-wrap items-center overflow-scroll">
          {countryCode.map(([code, name, breakNewLine]) => {
            return (
              <div
                key={code as string}
                className={breakNewLine ? cn("w-full") : ""}
              >
                {breakNewLine ? (
                  <BorderedHr />
                ) : (
                  <FlagNameComp
                    code={code as string}
                    name={name as string}
                    onClick={(e) => {
                        clickCountryDropdown(e)
                        handleCLoseDialog()
                      }
                    }
                  />
                )}
              </div>
            )
          })}
        </div>
      </DialogContent>
  )
})

DialogContentCustom.displayName = 'DialogContentCustom'

export default DialogContentCustom