import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ReactNode } from "react"
import { profile } from "@/data"

export const metadata = {
  title: profile.name,
  description: "안녕",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
