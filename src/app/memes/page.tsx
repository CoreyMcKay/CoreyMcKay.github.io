'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const memes = [
  {
    title: 'When the AI becomes self-aware',
    image: '/memes/ai-meme.jpg',
    alt: 'AI becoming self-aware meme'
  },
  {
    title: 'Security vs Convenience',
    image: '/memes/security-meme.jpg',
    alt: 'Security vs convenience meme'
  },
  {
    title: 'Programming Debug Life',
    image: '/memes/debug-meme.jpg',
    alt: 'Programming debug life meme'
  },
  // Add more memes here
]

export default function Memes() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="page-title">
          Meme Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Because sometimes cybersecurity and AI are better explained with humor.
          Updated daily with fresh tech memes!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memes.map((meme, index) => (
          <motion.div
            key={meme.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="card backdrop-blur-sm bg-black/50 border border-primary-500/20 overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={meme.image}
                  alt={meme.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-primary-400">
                  {meme.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 