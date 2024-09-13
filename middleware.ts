import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { isBrowser } from './lib/windowChecker'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname as string
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verify-user' || path === '/forgotpassword'
  const token = request.cookies.get('token')?.value || ''

//   if(isPublicPath && token && path) {
//     return NextResponse.redirect( new URL('/', request.nextUrl))
//   }
//   if(!isPublicPath && !token) {
//     return NextResponse.redirect( new URL('/login', request.nextUrl))
//  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/signup',
    '/verify-user',
    '/forgotpassword',
    '/resetpassword'
  ]
}