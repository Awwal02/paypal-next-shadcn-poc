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

export const DialogContent2 = React.forwardRef<
  any, any
>(({clickCountryDropdown, handleCLoseDialog}, ref) => {
    const FlagNameComp = dynamic(() => import("../FlagWithName/FlagWithName"))
  return (
    <DialogContent className="w-full h-full max-w-full" ref={ref}>
        <DialogHeader className={cn("items-center")}>
          <DialogTitle className="flex">
            <LoginHeader
              className={`flex justify-center items-center`}
            ></LoginHeader>
          </DialogTitle>
          {/* <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription> */}
        </DialogHeader>
        <div className="flex column items-center flex-wrap max-w-5xl m-auto h-full overflow-scroll">
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

export default DialogContent2