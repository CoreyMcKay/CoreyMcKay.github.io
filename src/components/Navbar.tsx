'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CodeBracketIcon, CommandLineIcon, PhotoIcon, NewspaperIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', icon: CommandLineIcon },
    { name: 'Projects', href: '/projects', icon: CodeBracketIcon },
    { name: 'Blog', href: '/blog', icon: NewspaperIcon },
    { name: 'Memes', href: '/memes', icon: PhotoIcon },
  ]

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50 border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-400">CM</span>
              <span className="ml-2 text-sm font-mono text-primary-500">{'>_'}</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-1.5 group-hover:text-primary-400" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-primary-900/50"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
} 