"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Settings, Laptop } from 'lucide-react'
import { skills, type Skill } from '@/data/portfolio'

const categoryIcons = {
  Languages: Code,
  Frameworks: Laptop,
  Tools: Settings,
  Databases: Database,
  Cloud: Cloud,
}

const categoryColors = {
  Languages: 'from-blue-500 to-blue-600',
  Frameworks: 'from-green-500 to-green-600',
  Tools: 'from-purple-500 to-purple-600',
  Databases: 'from-orange-500 to-orange-600',
  Cloud: 'from-pink-500 to-pink-600',
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)))
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category)
    return acc
  }, {} as Record<string, Skill[]>)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              All Skills
            </button>
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category}
                </button>
              )
            })}
          </motion.div>

          {/* Skills by Category */}
          {selectedCategory === 'all' ? (
            <div className="space-y-12">
              {categories.map((category, categoryIndex) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons]
                const colorClass = categoryColors[category as keyof typeof categoryColors]
                
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold">{category}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedSkills[category].map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {skill.name}
          </h4>
          <span className="text-sm text-muted-foreground font-medium">
            {skill.level}%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
            </motion.div>
          </div>
          
          {/* Skill Level Indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            className="absolute -top-8 bg-primary text-primary-foreground text-xs px-2 py-1 rounded transform -translate-x-1/2"
            style={{ left: `${skill.level}%` }}
          >
            {skill.level}%
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-primary" />
          </motion.div>
        </div>
        
        {/* Category Badge */}
        <div className="mt-4">
          <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}