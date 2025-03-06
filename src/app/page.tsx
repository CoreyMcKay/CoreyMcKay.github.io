'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheckIcon, CodeBracketIcon, NewspaperIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="page-title">
              Corey McKay
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono">
              Cybersecurity Engineer & AI Developer
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary-400">About Me</h2>
              <p className="text-gray-400">
                I'm a passionate Cybersecurity Engineer with expertise in AI development.
                My work focuses on building secure systems and exploring the intersection
                of artificial intelligence and security.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-primary-400">
                  <ShieldCheckIcon className="h-6 w-6" />
                  <span>Security</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-400">
                  <CodeBracketIcon className="h-6 w-6" />
                  <span>AI/ML</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-400">
                  <NewspaperIcon className="h-6 w-6" />
                  <span>Research</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-lg" />
              <Image
                src="/profile.jpg"
                alt="Corey McKay"
                fill
                className="object-cover rounded-lg opacity-80"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-400 mb-8">Featured Post</h2>
            <div className="card backdrop-blur-sm bg-black/50 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-primary-400 mb-4">
                The Future of AI in Cybersecurity
              </h3>
              <p className="text-gray-400 mb-4">
                Exploring how artificial intelligence is revolutionizing the way we
                approach cybersecurity, from threat detection to automated response systems.
              </p>
              <Link href="/blog/ai-cybersecurity" className="btn-primary inline-block">
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 