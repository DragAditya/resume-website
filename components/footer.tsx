"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ],
  social: [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ]
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/50 backdrop-blur-sm border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <motion.h3 
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {personalInfo.name}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Passionate software developer crafting digital experiences with modern technologies. 
                  Let's build something amazing together.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">50+ Projects</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Coffee className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium">1000+ Coffees</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{personalInfo.email}</span>
                </motion.a>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-foreground">Follow Me</h5>
                <div className="flex gap-3">
                  {footerLinks.social.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="group relative w-10 h-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center hover:from-primary/30 hover:to-purple-600/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border/50"
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6"
          >
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {new Date().getFullYear()}</span>
              <span>{personalInfo.name}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and <Coffee className="w-4 h-4 text-amber-600" />
              </span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:from-primary/20 hover:to-purple-600/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Tech Stack Info */}
          <motion.div
            variants={itemVariants}
            className="pt-8 text-center"
          >
            <p className="text-xs text-muted-foreground">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion ✨
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </footer>
  )
}