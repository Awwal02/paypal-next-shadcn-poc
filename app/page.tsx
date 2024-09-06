"use client";
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

function page() {
  const {user, error, isLoading} = useUser();
  console.log(user)
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error?.message}</div>
  if(user) {
    return (
      <div>
      <a title="test" href="/api/auth/logout">logout</a>
    </div>
    )
  }
  return (
    <div>
      <a title="test" href="/api/auth/login">Login</a>
    </div>
  )
}

export default page
