'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: 'The Future of AI in Cybersecurity',
    slug: 'ai-cybersecurity',
    date: '2024-03-06',
    readTime: '5 min read',
    summary: 'Exploring how artificial intelligence is revolutionizing the way we approach cybersecurity, from threat detection to automated response systems. Learn about the latest advancements in AI-powered security tools and what the future holds.',
    tags: ['AI', 'Cybersecurity', 'Machine Learning']
  },
  {
    title: 'Zero Trust Architecture: A Modern Approach',
    slug: 'zero-trust-architecture',
    date: '2024-03-04',
    readTime: '7 min read',
    summary: 'Understanding the principles of Zero Trust and how to implement it effectively in modern organizations. Dive deep into the core concepts, benefits, and practical implementation strategies.',
    tags: ['Security', 'Architecture', 'Best Practices']
  },
  {
    title: 'Machine Learning for Malware Detection',
    slug: 'ml-malware-detection',
    date: '2024-03-01',
    readTime: '6 min read',
    summary: 'How machine learning models can be trained to detect and classify malware with high accuracy. Explore different ML approaches and their effectiveness in modern threat detection.',
    tags: ['Machine Learning', 'Malware', 'Security']
  }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="page-title">
          Blog
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Insights and thoughts on cybersecurity, artificial intelligence,
          and the intersection of these rapidly evolving fields.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="card backdrop-blur-sm bg-black/50 border border-primary-500/20 hover:border-primary-500/40 transition-all"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="group cursor-pointer space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <TagIcon className="h-4 w-4 text-primary-400" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium bg-primary-900/50 text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Pagination - To be implemented */}
      <div className="mt-16 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-black/30 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 text-sm font-medium text-primary-400 bg-primary-900/50 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-colors">
            1
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-black/30 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-colors">
            Next
          </button>
        </nav>
      </div>
    </div>
  )
} 