"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export function Hero() {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'Software Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Full Stack Developer'
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const shouldDelete = isDeleting
    const timeout = shouldDelete ? 100 : 150

    const timer = setTimeout(() => {
      if (!shouldDelete && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (shouldDelete && text === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      } else {
        setText(prev => shouldDelete ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1))
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [text, currentIndex, isDeleting, titles])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground mb-2"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-6 h-12 sm:h-16 flex items-center justify-center"
            >
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary ml-2 min-w-[200px] text-left">
                {text}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {personalInfo.description}
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </span>
            </button>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border border-border hover:border-primary rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Scroll to learn more</p>
            <button
              onClick={scrollToAbout}
              className="animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full opacity-60"
        animate={{
          y: [0, -25, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  )
}