"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, MapPin, Calendar, GraduationCap, Code, Coffee, Award, Users, Zap, Heart, Brain } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { useRef } from 'react'

const stats = [
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '25+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Award, label: 'Years Experience', value: '3+' }
]

const highlights = [
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Building lightning-fast applications with optimal user experiences'
  },
  {
    icon: Brain,
    title: 'Problem Solver',
    description: 'Passionate about solving complex challenges with elegant solutions'
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Designing with empathy and putting users at the heart of everything'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary">About Me</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Passionate Developer
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Creative Problem Solver
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I transform ideas into exceptional digital experiences through clean code, 
              thoughtful design, and innovative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Building the Future, One Line at a Time
                </h3>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    {personalInfo.bio}
                  </p>
                  <p>
                    With a strong foundation in modern web technologies and a passion for 
                    continuous learning, I specialize in creating scalable, performant 
                    applications that make a real difference.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source projects, or sharing knowledge with 
                    the developer community.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300"
                    variants={cardVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Resume Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-semibold shadow-button hover:shadow-button-hover transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative p-8 glass-card hover-lift"
                  variants={statVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <motion.div
                      className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6, type: 'spring' }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Technology Philosophy */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 lg:p-12 glass-card"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                My Development Philosophy
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I believe in writing clean, maintainable code that not only solves problems 
                but inspires others. Every project is an opportunity to push boundaries, 
                learn something new, and create meaningful impact through technology.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['Clean Code', 'User Experience', 'Performance', 'Accessibility', 'Innovation'].map((principle, index) => (
                  <motion.span
                    key={principle}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {principle}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}