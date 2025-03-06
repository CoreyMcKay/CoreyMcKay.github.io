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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-md border-b border-primary-500/10">
        <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_200%] animate-glow opacity-5" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative px-3 py-2"
          >
            <span className="relative z-10 text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300">
              CM~
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{ scale: [0.95, 1], opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Navigation */}
          <div className="flex space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isActive ? 'text-primary-400' : 'text-slate-300 hover:text-primary-400'}`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-primary-400' : ''}`} />
                    <span className="hidden sm:inline">{item.name}</span>
                  </span>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ scale: [0.95, 1], opacity: [0, 1] }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 border border-primary-500/20 rounded-lg bg-primary-500/5"
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_200%] animate-glow opacity-10" />
                    </motion.div>
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