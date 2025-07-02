"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, GraduationCap, Code, Coffee } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const stats = [
  { label: 'Years of Learning', value: '3+', icon: Calendar },
  { label: 'Projects Completed', value: '10+', icon: Code },
  { label: 'Technologies', value: '15+', icon: GraduationCap },
  { label: 'Cups of Coffee', value: '∞', icon: Coffee },
]

const highlights = [
  'Passionate about creating efficient and scalable solutions',
  'Active contributor to open-source projects',
  'Strong problem-solving and analytical thinking skills',
  'Continuous learner staying updated with latest technologies',
  'Team player with excellent communication skills',
  'Experience in full-stack development and AI integration'
]

export function About() {
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what drives my passion for technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image and Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20 animate-pulse-slow" />
                  <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden border border-border">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-6xl font-bold text-muted-foreground/50">
                        {personalInfo.name.split(' ').map(part => part[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Bachelor of Computer Applications (BCA)</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Software Developer & AI Enthusiast</span>
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Description and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Turning Ideas Into Reality
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Computer Applications student with a deep interest in software development and artificial intelligence. 
                    My journey in tech began with a curiosity to understand how things work, which quickly evolved into a love for creating solutions that make a difference.
                  </p>
                  <p>
                    Currently pursuing my Bachelor's degree in Computer Applications at North Maharashtra University, 
                    I've maintained a strong academic record while actively engaging in practical projects and coding competitions. 
                    My hands-on experience includes building full-stack applications, AI-powered tools, and contributing to open-source projects.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to the developer community, 
                    or working on personal projects that challenge my skills and creativity.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">What I Bring</h4>
                <div className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}