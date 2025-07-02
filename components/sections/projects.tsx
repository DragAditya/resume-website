"use client"

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Star, Calendar, Code2, Zap, Eye } from 'lucide-react'
import { projects } from '@/data/portfolio'

const statusColors = {
  'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
  'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Planning': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
}

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, z: -100 },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      z: -100,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 via-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-primary">Featured Work</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring innovative solutions and 
              cutting-edge technologies that drive real-world impact.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
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
                    layoutId="activeProjectCategory"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  {category === 'All' && <Filter className="w-4 h-4" />}
                  {category}
                </span>
                
                {/* Glow effect for active button */}
                {activeCategory === category && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-600/30 blur-lg -z-20" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="group relative perspective-1000"
                  onHoverStart={() => setHoveredProject(project.title)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Card Container */}
                  <motion.div
                    className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5,
                      z: 50
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Project Image/Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 overflow-hidden">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <Code2 className="w-16 h-16 text-primary/50" />
                        </div>
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
                        {project.status}
                      </div>
                      
                      {/* Quick Actions */}
                      <motion.div
                        className="absolute top-4 right-4 flex gap-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: hoveredProject === project.title ? 1 : 0,
                          scale: hoveredProject === project.title ? 1 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-4 h-4 text-white" />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Title and Category */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year || 'Recent'}</span>
                          <span className="mx-2">•</span>
                          <span className="text-primary">{project.category}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium text-muted-foreground">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-xl font-medium text-primary hover:bg-primary/20 transition-colors group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </motion.button>
                        
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-medium hover:shadow-button transition-all duration-300"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Zap className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/40 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                          }}
                          animate={{
                            y: hoveredProject === project.title ? [0, -30, 0] : 0,
                            opacity: hoveredProject === project.title ? [0.4, 1, 0.4] : 0.4,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Stats */}
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
                <Star className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Innovation Through Code
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Each project represents a unique challenge overcome through creative problem-solving, 
                technical expertise, and attention to detail. From concept to deployment, 
                I bring ideas to life with passion and precision.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-2xl font-bold text-primary mr-2">
                    {projects.length}+
                  </span>
                  <span className="text-muted-foreground">Projects</span>
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
                    24/7
                  </span>
                  <span className="text-muted-foreground">Dedication</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="relative max-w-4xl w-full max-h-[80vh] overflow-y-auto bg-card border border-border rounded-2xl p-8"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedProject.category} • {selectedProject.year || 'Recent'}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-medium hover:shadow-button transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-xl font-medium transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}