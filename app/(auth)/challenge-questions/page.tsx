"use client"
import Border from '@/components/custom/Border/Border'
import LoginHeader from '@/components/custom/LoginHeader/LoginHeader'
import { cn } from '@/lib/utils'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { challengeQuestions } from '@/config/challengeQuestions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

  type Checked = DropdownMenuCheckboxItemProps["checked"]

function page() {
    const [questionMain, setQuestion] = React.useState<string>(challengeQuestions["default"][0].question)
    const [answer, setAnswer] = React.useState<string>("")
    const router = useRouter()
    // const [showPanel, setShowPanel] = React.useState<Checked>(false)
  return (
    <div className={
        cn("min-h-screen min-w-screen flex items-center justify-center")
    }>
        <Border className={
            cn('flex flex-col p-8 w-full lg:w-2/5')
        }>
            <LoginHeader className="my-4"></LoginHeader>
            <DropdownMenu>
  `              <div className={
                    cn("p-4 rounded-lg border-2 items-center justify-center text-center")
                }>
                    <DropdownMenuTrigger>
                        {questionMain}
                    </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Questions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {challengeQuestions["default"].map(({question, answer}: {question: string, answer: string}) => {
                        return <>
                            <DropdownMenuItem onClick={() => setQuestion(question)}>{question}</DropdownMenuItem>
                        </>
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
            <br/>
            <Input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='Please enter answer' className={
              cn("h-16 w-100 px-2 mx-2 my-2 w-full")
            }/>
            <Button variant={`default`} onClick={() => router.push(`/`)} className='my-6'>Continue</Button>
        </Border>
    </div>    
  )
}

export default page