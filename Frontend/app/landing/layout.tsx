import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CollabLens',
  description: 'FrontEnd by AbG',
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
