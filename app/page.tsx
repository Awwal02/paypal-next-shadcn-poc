"use client";
import React from 'react'
// import { useUser } from '@auth0/nextjs-auth0/client'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { isBrowser } from '@/lib/windowChecker';


function page() {
  // const {user, error, isLoading} = useUser();
  // const dataSession = isBrowser() ? window?.sessionStorage.getItem('dataUser') : ''
  // console.log(user)
  // if(isLoading) return <div>Loading...</div>
  // if(error) return <div>{error?.message}</div>
  if(true) {
    return (
      <div>
      <a title="test" href="/api/auth/logout">logout</a>
      <BeakerIcon className="size-6 text-blue-500" />
      {/* {dataSession ? dataSession : ''} */}

    </div>
    )
  }
  return (
    <div>
      <a title="test" href="/api/auth/login">Login</a>
      <BeakerIcon className="size-6 text-blue-500" />
    </div>
  )
}

export default page
