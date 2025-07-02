"use client"

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Brain, Palette, Filter, Star } from 'lucide-react'
import { skills } from '@/data/portfolio'

const categoryIcons = {
  'Frontend': Globe,
  'Backend': Database,
  'Mobile': Smartphone,
  'AI/ML': Brain,
  'Design': Palette,
  'Tools': Code
}

const categories = ['All', ...Object.keys(categoryIcons)]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.3
      }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
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
              <Code className="w-4 h-4 text-primary" />
              <span className="text-primary">Technical Skills</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Technologies &
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and proficiency levels across 
              various technologies and frameworks.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const Icon = category === 'All' ? Filter : categoryIcons[category as keyof typeof categoryIcons]
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-white shadow-button'
                      : 'text-muted-foreground hover:text-primary bg-secondary/50 hover:bg-secondary/80'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: activeCategory === category 
                      ? 'linear-gradient(135deg, hsl(var(--primary)), hsl(262 83% 58%))'
                      : undefined
                  }}
                >
                  {activeCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full -z-10"
                      layoutId="activeCategory"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {category}
                  </span>
                  
                  {/* Glow effect for active button */}
                  {activeCategory === category && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-600/30 blur-lg -z-20" />
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => {
                const Icon = categoryIcons[skill.category as keyof typeof categoryIcons]
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    variants={skillCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-8 glass-card hover-lift"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      z: 50
                    }}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Category Icon */}
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {Icon && <Icon className="w-8 h-8 text-primary" />}
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 mb-4 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                      <Star className="w-3 h-3" />
                      {skill.category}
                    </div>

                    {/* Proficiency Level */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Proficiency
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        />
                        
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          animate={{
                            x: hoveredSkill === skill.name ? [-32, 200] : [-32]
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: hoveredSkill === skill.name ? Infinity : 0,
                            repeatDelay: 2
                          }}
                        />
                      </div>
                    </div>

                    {/* Skill Description/Tags */}
                    {skill.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    )}

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/40 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 25}%`,
                          }}
                          animate={{
                            y: hoveredSkill === skill.name ? [0, -20, 0] : 0,
                            opacity: hoveredSkill === skill.name ? [0.4, 1, 0.4] : 0.4,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto p-8 lg:p-12 glass-card">
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
                Continuous Learning Journey
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of software development. 
                Each project is an opportunity to learn, grow, and push the boundaries of what's possible.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-2xl font-bold text-primary mr-2">
                    {skills.length}+
                  </span>
                  <span className="text-muted-foreground">Technologies</span>
                </motion.div>
                
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-2xl font-bold text-purple-600 mr-2">
                    {categories.length - 1}
                  </span>
                  <span className="text-muted-foreground">Categories</span>
                </motion.div>
                
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-2xl font-bold text-pink-600 mr-2">
                    100%
                  </span>
                  <span className="text-muted-foreground">Passion</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}