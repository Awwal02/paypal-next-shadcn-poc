import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import {UserProvider } from '@auth0/nextjs-auth0/client'
import Head from "next/head"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const supportedPartner = JSON.parse(process.env.SUPPORTED_PARTNER as string)
// console.log(...supportedPartner.map((partner: string) => ({
//   media: `(prefers-color-scheme: ${partner})`, color: "black" 
// })))
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: bc-logo-dark)", color: "black" },
    { media: "(prefers-color-scheme: shopify)", color: "black" },
    { media: "(prefers-color-scheme: woocommerce)", color: "black" },
    ...supportedPartner.map((partner: string) => ({
      media: `(prefers-color-scheme: ${partner})`, color: "black" 
    }))
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>Main</Head>
          <body
            className={cn(
              "min-h-screen font-sans antialiased bg-background",
              fontSans.variable
            )}
            >
              <ThemeProvider attribute="class" defaultTheme='light'
                enableSystem 
                themes={['light','dark', ...supportedPartner]}>
            <UserProvider>
            {children}
            </UserProvider>
            </ThemeProvider>
          </body>
    </html>
  )
}
