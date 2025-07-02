"use client"

import React, { useState, useEffect } from 'react'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ExternalLink, Sparkles } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

const roles = [
  'Full Stack Developer',
  'Software Engineer', 
  'Frontend Specialist',
  'Backend Developer'
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const magneticProps = {
    whileHover: { scale: 1.05, y: -5 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"
          style={{ y, opacity }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-2xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Floating Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">Available for opportunities</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display">
              <motion.span 
                className="block bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hey, I'm
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.name}
                
                {/* Sparkle Effects */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </motion.span>
            </h1>

            {/* Animated Role */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-12 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-primary group relative overflow-hidden"
              {...magneticProps}
              whileHover={{ ...magneticProps.whileHover, boxShadow: '0 20px 60px -10px rgba(59, 130, 246, 0.4)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </motion.button>

            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group relative"
              {...magneticProps}
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group relative p-4 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/50 transition-all duration-300"
                {...magneticProps}
                whileHover={{ 
                  ...magneticProps.whileHover, 
                  boxShadow: '0 10px 40px -10px rgba(59, 130, 246, 0.3)',
                  borderColor: 'hsl(var(--primary))'
                }}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {label}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-xs text-muted-foreground mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}