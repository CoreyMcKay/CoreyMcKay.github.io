'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { HomeIcon, NewspaperIcon, FolderIcon, PhotoIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/blog', icon: NewspaperIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  { name: 'Memes', href: '/memes', icon: PhotoIcon },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-primary-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            CM~
          </Link>

          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    hover:text-primary-400 hover:bg-primary-500/10
                    ${isActive ? 'text-primary-400' : 'text-slate-200'}`}
                >
                  <span className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </span>
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 border border-primary-500/50 rounded-lg"
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
} 