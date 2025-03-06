'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheckIcon, BeakerIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'AI-Powered Threat Detection',
    description: 'Machine learning system for detecting and classifying cyber threats in real-time.',
    image: '/projects/threat-detection.jpg',
    icon: ShieldCheckIcon,
    link: 'https://github.com/yourusername/threat-detection',
    tags: ['Python', 'TensorFlow', 'Cybersecurity']
  },
  {
    title: 'Security Research Tool',
    description: 'Automated vulnerability assessment and penetration testing framework.',
    image: '/projects/security-research.jpg',
    icon: BeakerIcon,
    link: 'https://github.com/yourusername/security-research',
    tags: ['Python', 'Docker', 'Security']
  },
  {
    title: 'Network Analysis CLI',
    description: 'Command-line tool for advanced network traffic analysis and anomaly detection.',
    image: '/projects/network-cli.jpg',
    icon: CommandLineIcon,
    link: 'https://github.com/yourusername/network-cli',
    tags: ['Rust', 'CLI', 'Networking']
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="page-title">
          Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my work in cybersecurity and artificial intelligence.
          Each project represents a unique challenge in securing and advancing technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group"
          >
            <div className="card backdrop-blur-sm bg-black/50 border border-primary-500/20 overflow-hidden">
              <div className="relative h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <project.icon className="absolute bottom-4 right-4 h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-400 mb-2 group-hover:text-primary-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-primary-900/50 text-primary-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
} 