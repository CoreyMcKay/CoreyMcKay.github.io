import './globals.css'
import { Inter, Fira_Code } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata: Metadata = {
  title: 'Corey McKay | Cybersecurity & AI Blog',
  description: 'Personal blog focused on cybersecurity and AI development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
        <ThemeProviderWrapper>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="fixed inset-0 bg-black/50" />
            <Navbar />
            <div className="relative pt-16">
              {children}
            </div>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
} 