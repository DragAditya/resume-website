"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/portfolio'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1))
      }))

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const navbarVariants = {
    top: {
      background: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
      borderColor: 'rgba(255, 255, 255, 0)',
      y: 0,
    },
    scrolled: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      y: 0,
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  }

  const linkVariants = {
    inactive: {
      color: 'var(--text-secondary)',
      scale: 1,
    },
    active: {
      color: 'var(--text-primary)',
      scale: 1.05,
    },
    hover: {
      color: 'var(--text-primary)',
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  }

  const magneticProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'py-2' : 'py-4'
        }`}
        variants={navbarVariants}
        animate={scrolled ? 'scrolled' : 'top'}
        initial="top"
      >
        <motion.nav
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            scrolled 
              ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-glass dark:shadow-glass-dark' 
              : 'bg-transparent'
          }`}
          layout
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              {...magneticProps}
            >
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#home')
                }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                YD
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10 shadow-button'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    variants={linkVariants}
                    animate={activeSection === item.href.substring(1) ? 'active' : 'inactive'}
                    whileHover="hover"
                    initial="inactive"
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-xl -z-10"
                        layoutId="activeTab"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-all duration-300 group"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="h-5 w-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-all duration-300"
                {...magneticProps}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{ overflow: 'hidden' }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl mt-4 border border-white/20 dark:border-white/10">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? 'text-primary bg-primary/10 shadow-button'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}