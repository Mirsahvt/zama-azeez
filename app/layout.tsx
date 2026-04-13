import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stebin & Jesna | Wedding Invitation",
  description:
    "You are warmly invited to celebrate the wedding of Stebin & Jesna. Join us as we celebrate love, faith, and togetherness.",
  keywords: ["wedding", "invitation", "Stebin", "Jesna", "Kerala"],
  openGraph: {
    title: "Stebin & Jesna Wedding Invitation",
    description:
      "Join us to celebrate the wedding of Stebin & Jesna and share this joyful moment with our families.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#f9f7f3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${greatVibes.variable} font-serif antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}