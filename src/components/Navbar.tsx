'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { CodeBracketIcon, CommandLineIcon, NewspaperIcon, PhotoIcon } from '@heroicons/react/24/outline'

const navItems = [
  { href: '/', label: 'Home', icon: CommandLineIcon },
  { href: '/blog', label: 'Blog', icon: NewspaperIcon },
  { href: '/projects', label: 'Projects', icon: CodeBracketIcon },
  { href: '/memes', label: 'Memes', icon: PhotoIcon },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-primary-500/20" />
      <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>CM</span>
            <span className="font-mono text-sm text-primary-500">{'>_'}</span>
          </Link>
          <div className="flex space-x-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                  pathname === href
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-gray-400 hover:text-primary-400 hover:bg-primary-500/5'
                }`}
              >
                <Icon className="h-5 w-5 mr-2 group-hover:text-primary-400 transition-colors" />
                <span className="font-medium">{label}</span>
                {pathname === href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600"
                    animate
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 