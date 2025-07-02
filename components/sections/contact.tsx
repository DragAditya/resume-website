"use client"

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const socialLinks = [
  { 
    icon: Github, 
    href: personalInfo.github, 
    label: 'GitHub',
    color: 'hover:text-gray-800 dark:hover:text-gray-200',
    bg: 'hover:bg-gray-100 dark:hover:bg-gray-800'
  },
  { 
    icon: Linkedin, 
    href: personalInfo.linkedin, 
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
    bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
  },
  { 
    icon: Twitter, 
    href: '#', 
    label: 'Twitter',
    color: 'hover:text-blue-400',
    bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
  },
  { 
    icon: MessageCircle, 
    href: `mailto:${personalInfo.email}`, 
    label: 'Email',
    color: 'hover:text-green-600',
    bg: 'hover:bg-green-50 dark:hover:bg-green-900/20'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend
              // Form submitted successfully
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
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
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-primary">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Let's Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Contact Form */}
            <motion.div variants={formVariants} className="space-y-8">
              <div className="p-8 lg:p-10 glass-card">
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                    <p className="text-muted-foreground">Fill out the form below</p>
                  </div>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'name' 
                              ? 'border-primary' 
                              : 'border-border hover:border-primary/50'
                        }`}
                        placeholder="Your full name"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 pointer-events-none"
                        animate={{ opacity: focusedField === 'name' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'email' 
                              ? 'border-primary' 
                              : 'border-border hover:border-primary/50'
                        }`}
                        placeholder="your@email.com"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 pointer-events-none"
                        animate={{ opacity: focusedField === 'email' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.subject 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'subject' 
                              ? 'border-primary' 
                              : 'border-border hover:border-primary/50'
                        }`}
                        placeholder="What's this about?"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 pointer-events-none"
                        animate={{ opacity: focusedField === 'subject' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-secondary/50 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'message' 
                              ? 'border-primary' 
                              : 'border-border hover:border-primary/50'
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 pointer-events-none"
                        animate={{ opacity: focusedField === 'message' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary relative overflow-hidden group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : submitStatus === 'success' ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </span>
                    </motion.button>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-sm text-green-600 flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Thank you! Your message has been sent successfully.
                      </motion.p>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-sm text-red-500 flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={contactInfoVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="p-8 lg:p-10 glass-card">
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Contact Info</h3>
                    <p className="text-muted-foreground">Let's connect</p>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {/* Email */}
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-8 lg:p-10 glass-card">
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Social Media</h3>
                    <p className="text-muted-foreground">Follow my journey</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className={`group relative p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 ${social.bg}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${social.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {social.label}
                          </p>
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response Note */}
              <motion.div
                className="p-6 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. Looking forward to discussing your project!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}