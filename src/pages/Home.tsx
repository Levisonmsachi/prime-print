import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiPrinter,
  FiBook,
  FiFileText,
  FiLink,
  FiAward,
  FiStar,
  FiCheck,
  FiArrowRight,
  FiShield,
  FiUsers,
  FiImage,
  FiCalendar,
  FiClock,
  FiHeart,
  FiTrendingUp
} from 'react-icons/fi'
import { 
  FaUniversity,
  FaBuilding,
  FaHospital,
  FaGlobeAmericas,
  FaLeaf,
  FaLock
} from 'react-icons/fa'
import { 
  MdBusinessCenter,
  MdVerified
} from 'react-icons/md'

// these images are used at home page slideshow
import picture1 from "../assets/workshop-bronchure.jpg"
import picture2 from "../assets/image-bronchure-2.jpg"
import picture3 from "../assets/business_card_template_002.jpg"
import picture4 from "../assets/book-mockup.jpg"
import picture5 from "../assets/recipe-bronchure.jpg"
import picture6 from "../assets/triffold-bronchure.jpg"
import picture7 from "../assets/stack-books-black-wooden-table.jpg"
import picture8 from "../assets/real-estate-image.png"
import picture9 from "../assets/university-e-learning-image.png"
import picture10 from "../assets/medical-nurse-card.png"
import picture11 from "../assets/Real Estate Brochure Design Template Presentation.jpg"

// these images are used at home page portfolio section
import portImage1 from "../assets/IMAGE 1.jpg"
import portImage2 from "../assets/IMAGE 2.jpg"
import portImage3 from "../assets/IMAGE 3.jpg"
import portImage4 from "../assets/IMAGE 4.jpg"

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slideshow images 
  const SLIDESHOW_IMAGES = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture10,
    picture11
  ]

  // Effect to handle the automatic slideshow transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDESHOW_IMAGES.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [SLIDESHOW_IMAGES.length])

  const stats = [
    { number: '5+', label: 'Years Experience', icon: <FiCalendar className="w-6 h-6" /> },
    { number: '100+', label: 'Projects', icon: <FiTrendingUp className="w-6 h-6" /> },
    { number: '100+', label: 'Happy Clients', icon: <FiUsers className="w-6 h-6" /> },
    { number: '24/7', label: 'Customer Support', icon: <FiClock className="w-6 h-6" /> },
  ]

  const services = [
    {
      icon: <FiPrinter className="w-8 h-8" />,
      title: 'Commercial Printing',
      description: 'High-quality flyers, brochures, and business cards'
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: 'Publications',
      description: 'Books, magazines, and newsletters'
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: 'Stationery & Supplies',
      description: 'Office materials and paper products'
    },
    {
      icon: <FiLink className="w-8 h-8" />,
      title: 'Binding & Finishing',
      description: 'Professional binding and finishing services'
    },
  ]

  const testimonials = [
    {
      name: 'James Banda',
      role: 'Procurement Manager',
      quote: 'Prime Printing delivered exceptional quality for our official documents. Their attention to detail and timely delivery made them our preferred printing partner for all government publications.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
      company: 'Ministry of Education'
    },
    {
      name: 'Sarah Mwale',
      role: 'University Director',
      quote: 'Their service for our academic publications was outstanding. They handled complex textbook layouts and delivered on tight deadlines, making them invaluable to our educational institution.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
      company: 'University of Malawi'
    },
    {
      name: 'David Phiri',
      role: 'Marketing Director',
      quote: 'Professional service with incredible attention to detail. Our corporate branding materials look amazing and have helped elevate our brand presence across all branches in Malawi.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
      company: 'National Bank of Malawi'
    },
  ]

  // images that appear on a featured projects
  const portfolioItems = [
    {
      image: portImage1,
      category: 'CARDS',
      title: 'Premium Business Cards'
    },
    {
      image: portImage2, 
      category: 'BROCHURES',
      title: 'Corporate Brochures'
    },
    {
      image: portImage3,
      category: 'STATIONERY',
      title: 'Brand Stationery'
    },
    {
      image: portImage4,
      category: 'PREMIUM', 
      title: 'Book Publications'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section with Slideshow - GOOGLE-LEVEL PROFESSIONAL */}
      <section className="relative h-screen min-h-[800px] text-white overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-custom-yellow/10 rounded-full blur-3xl"
          ></motion.div>
          
          {/* Slideshow Film Strip with Enhanced Effects */}
          <div className="absolute inset-0 flex">
            <div 
              className="flex h-full transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}vw)`,
                width: `${SLIDESHOW_IMAGES.length * 100}vw`
              }}
            >
              {SLIDESHOW_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="h-full w-screen bg-cover bg-center shrink-0 relative"
                  style={{ 
                    backgroundImage: `url(${image})`,
                  }}
                >
                  {/* Parallax Scrolling Effect */}
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 10 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-br from-custom-blue/20 via-transparent to-custom-yellow/10"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30"></div>
          
          {/* Animated Noise Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.05%22/%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        {/* Premium Content */}
        <div className="relative z-20 container mx-auto px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          {/* Main Heading with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8"
              style={{ 
                background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 8px 32px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
              }}
            >
              PRIME
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block mt-4"
              >
                PRINTING
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block mt-4"
              >
                SOLUTIONS
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Tagline with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <motion.p
              className="text-2xl md:text-4xl font-light mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #cbd5e1 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 16px rgba(0,0,0,0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
              }}
            >
              Prints that speak
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-3xl md:text-5xl font-bold"
              style={{ 
                background: 'linear-gradient(135deg, #fbd804 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 16px rgba(0,0,0,0.3)'
              }}
            >
              loud and clear.
            </motion.p>
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-linear-to-r from-custom-yellow to-amber-400 text-gray-900 px-16 py-6 rounded-2xl font-bold text-2xl hover:from-amber-400 hover:to-custom-yellow transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-amber-300 overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Button Content */}
              <span className="relative z-10">Get a Quote Today</span>
              <motion.span
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="ml-4 text-xl relative z-10"
              >
                <FiArrowRight className="w-6 h-6" />
              </motion.span>
              
              {/* Particle Effects */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
              ></motion.div>
            </Link>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-6 h-6 bg-custom-blue/30 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-6 w-4 h-4 bg-custom-yellow/40 rounded-full"
            ></motion.div>
          </motion.div>

          {/* Advanced Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-white/70 text-sm font-light tracking-widest">SCROLL</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/80 rounded-full mt-2"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* 2. Stats Section - GOOGLE-LEVEL PROFESSIONAL */}
      <section className="py-24 bg-linear-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-custom-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-custom-yellow/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group text-center relative"
              >
                {/* Main Stat Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100/50 hover:border-custom-blue/20 group-hover:-translate-y-2">
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-custom-blue/5 to-custom-yellow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 text-custom-blue">
                    {stat.icon}
                  </div>
                  
                  {/* Stat Number with Counter Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #2596be 0%, #1e7a9a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Stat Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="text-gray-600 font-semibold text-lg uppercase tracking-wider"
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 0.8, delay: 1 + (index * 0.1) }}
                    className="h-1 bg-linear-to-r from-custom-blue to-blue-600 rounded-full mt-4 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-custom-blue/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-custom-blue/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-custom-blue/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-custom-blue/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Glow Effect */}
                <div className="absolute -z-10 inset-0 bg-linear-to-br from-custom-blue/5 to-custom-yellow/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"></div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16 pt-12 border-t border-gray-200/50"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4"
            >
              TRUSTED BY INDUSTRY LEADERS
            </motion.p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-100">
                <span className="text-gray-700 font-medium text-sm">Proven Excellence Since 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-24 bg-linear-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-custom-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-custom-yellow/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-custom-blue to-blue-600 rounded-3xl shadow-2xl mb-8"
            >
              <FiPrinter className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-gray-900 via-custom-blue to-blue-600 bg-clip-text text-transparent">
                Premium Printing Services
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive printing solutions tailored for businesses, government agencies, 
              and educational institutions across Malawi
            </motion.p>
          </motion.div>

          {/* Premium Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Main Service Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-custom-blue/20 group-hover:-translate-y-3 h-full flex flex-col overflow-hidden">
                  
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-custom-blue/5 to-custom-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Service Icon with Advanced Effects */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="relative mb-8"
                  >
                    <div className="relative inline-block">
                      {/* Icon Container */}
                      <div className="w-20 h-20 bg-linear-to-br from-gray-50 to-white rounded-2xl shadow-lg flex items-center justify-center mx-auto border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-custom-blue"
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      
                      {/* Floating Animation Ring */}
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-custom-blue/30 transition-all duration-500"
                      ></motion.div>
                      
                      {/* Pulse Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-2xl bg-custom-blue/10"
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Service Content */}
                  <div className="grow space-y-4">
                    {/* Service Title */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                      className="text-2xl font-bold text-gray-900 text-center group-hover:text-custom-blue transition-colors duration-300 leading-tight"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Service Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                      className="text-gray-600 leading-relaxed text-center text-lg font-light"
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Interactive Hover Element */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "60%", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 + (index * 0.1) }}
                    className="h-1 bg-linear-to-r from-custom-blue to-blue-600 rounded-full mt-6 mx-auto group-hover:from-blue-600 group-hover:to-custom-blue transition-all duration-500"
                  ></motion.div>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + (index * 0.1) }}
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <span className="inline-flex items-center text-custom-blue font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
                      Learn more
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="ml-2"
                      >
                        <FiArrowRight className="w-4 h-4" />
                      </motion.span>
                    </span>
                  </motion.div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-custom-blue/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-custom-blue/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-custom-blue/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-custom-blue/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Glow Effect */}
                <div className="absolute -z-10 inset-0 bg-linear-to-br from-custom-blue/5 to-custom-yellow/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"></div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block">
              {/* Main CTA Button */}
              <Link
                to="/services"
                className="group relative inline-flex items-center bg-linear-to-r from-custom-blue to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-blue-400 overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Button Content */}
                <span className="relative z-10">Explore All Services</span>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="ml-4 text-xl relative z-10"
                >
                  <FiArrowRight className="w-6 h-6" />
                </motion.span>
              </Link>

              {/* Floating Elements Around Button */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-custom-yellow/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-3 w-6 h-6 bg-custom-blue/20 rounded-full"
              ></motion.div>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-500 text-lg mt-6"
            >
              Discover our complete range of premium printing solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. Client Testimonials */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-custom-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-custom-yellow/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-custom-blue rounded-2xl mb-6"
            >
              <FiStar className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-linear-to-r from-gray-900 to-custom-blue bg-clip-text">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what industry leaders have to say about our printing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Card with Advanced Effects */}
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-custom-blue/20 group-hover:-translate-y-2 h-full flex flex-col">
                  
                  {/* Premium Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-custom-blue/10 to-custom-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Profile Section - Ultra Professional */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      {/* Profile Image with Advanced Effects */}
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/96x96/2596be/ffffff?text=👤';
                          }}
                        />
                        
                        {/* Premium Verified Badge */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-linear-to-r from-green-500 to-emerald-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                          <MdVerified className="w-3 h-3 text-white" />
                        </div>
                        
                        {/* Hover Effect Ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-custom-blue/30 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Client Info with Enhanced Typography */}
                    <div className="mt-6 space-y-2">
                      <h4 className="font-bold text-gray-900 text-xl tracking-tight">{testimonial.name}</h4>
                      <p className="text-custom-blue font-semibold text-sm bg-custom-blue/10 px-3 py-1 rounded-full inline-block">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Premium Rating System */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1 bg-amber-50 rounded-full px-4 py-2 shadow-inner">
                      {[...Array(5)].map((_, i) => (
                        <motion.span 
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 + (i * 0.1) }}
                          className="text-amber-400 text-lg drop-shadow-sm"
                        >
                          <FiStar className="w-4 h-4 fill-current" />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote with Premium Styling */}
                  <div className="grow flex flex-col justify-center">
                    <div className="relative">
                      {/* Elegant Quote Marks */}
                      <div className="absolute -top-4 -left-2 w-8 h-8 bg-linear-to-r from-custom-blue/20 to-custom-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-custom-blue text-2xl font-serif">"</span>
                      </div>
                      
                      {/* Main Quote Text */}
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-gray-700 leading-relaxed text-center text-lg font-light italic relative z-10 px-2"
                      >
                        {testimonial.quote}
                      </motion.p>
                      
                      <div className="absolute -bottom-4 -right-2 w-8 h-8 bg-linear-to-l from-custom-blue/20 to-custom-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-custom-blue text-2xl font-serif">"</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Hover Elements */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-custom-blue/5 via-transparent to-custom-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-custom-blue/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-custom-blue/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-custom-blue/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-custom-blue/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Background Element */}
                <div className="absolute -z-10 inset-0 bg-linear-to-br from-custom-blue/3 to-custom-yellow/3 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"></div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-gray-800 text-sm uppercase tracking-wider font-semibold mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-100">
              {[
                { icon: <FaBuilding className="w-5 h-5" />, text: 'Government' },
                { icon: <FaUniversity className="w-5 h-5" />, text: 'Education' },
                { icon: <MdBusinessCenter className="w-5 h-5" />, text: 'Corporate' },
                { icon: <FaBuilding className="w-5 h-5" />, text: 'Banking' },
                { icon: <FaHospital className="w-5 h-5" />, text: 'Healthcare' },
                { icon: <FaGlobeAmericas className="w-5 h-5" />, text: 'NGO' }
              ].map((industry, idx) => (
                <motion.span
                  key={industry.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + (idx * 0.1) }}
                  className="flex items-center space-x-2 text-gray-800 text-sm font-medium px-4 py-2 bg-white rounded-lg shadow-sm"
                >
                  {industry.icon}
                  <span>{industry.text}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div> 
      </section>

      {/* 5. Recent Work Gallery Preview */}
      <section className="py-24 bg-linear-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-custom-blue/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-custom-yellow/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-custom-blue to-blue-600 rounded-3xl shadow-2xl mb-8"
            >
              <FiImage className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-gray-900 via-custom-blue to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Showcasing our premium printing quality and creative expertise through recent successful projects
            </motion.p>
          </motion.div>

          {/* Premium Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Main Portfolio Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-custom-blue/20 group-hover:-translate-y-3 overflow-hidden">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Premium Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      className="absolute top-4 left-4"
                    >
                      <span className="px-4 py-2 text-sm font-bold rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl text-custom-blue border border-white/20">
                        {item.category}
                      </span>
                    </motion.div>

                    {/* Advanced Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-custom-blue/20 to-custom-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white text-center p-6"
                      >
                        {/* Project Title */}
                        <motion.h4
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="font-bold text-2xl mb-4 text-white drop-shadow-2xl"
                        >
                          {item.title}
                        </motion.h4>
                        
                        {/* View Project Button */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl text-sm font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 hover:shadow-lg"
                        >
                          View Project
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="ml-2"
                          >
                            <FiArrowRight className="w-4 h-4" />
                          </motion.span>
                        </motion.span>
                      </motion.div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>

                  {/* Bottom Info Bar */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                    className="p-6 bg-linear-to-r from-white to-gray-50"
                  >
                    <h5 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-custom-blue transition-colors duration-300">
                      {item.title}
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Print Project</span>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-custom-blue/10 rounded-full flex items-center justify-center group-hover:bg-custom-blue/20 transition-colors duration-300"
                      >
                        <FiArrowRight className="w-4 h-4 text-custom-blue" />
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-custom-blue/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-custom-blue/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration=500"></div>
                </div>

                {/* Floating Glow Effect */}
                <div className="absolute -z-10 inset-0 bg-linear-to-br from-custom-blue/5 to-custom-yellow/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"></div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block">
              {/* Main CTA Button */}
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center bg-linear-to-r from-custom-blue to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-blue-400 overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Button Content */}
                <span className="relative z-10">Explore Full Portfolio</span>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="ml-4 text-xl relative z-10"
                >
                  <FiArrowRight className="w-6 h-6" />
                </motion.span>
              </Link>

              {/* Floating Elements Around Button */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-custom-yellow/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-3 w-6 h-6 bg-custom-blue/20 rounded-full"
              ></motion.div>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-500 text-lg mt-6"
            >
              Discover our complete collection of successful printing projects
            </motion.p>

            {/* Portfolio Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200/50"
            >
              {[
                { number: '100+', label: 'Projects Completed', icon: <FiTrendingUp className="w-5 h-5" /> },
                { number: '100+', label: 'Happy Clients', icon: <FiUsers className="w-5 h-5" /> },
                { number: '98%', label: 'Satisfaction Rate', icon: <FiHeart className="w-5 h-5" /> },
                { number: '24/7', label: 'Support', icon: <FiClock className="w-5 h-5" /> }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + (idx * 0.1) }}
                  className="text-center flex items-center space-x-2"
                >
                  <div className="text-custom-blue">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-custom-blue mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Trust Indicators  */}
      <section className="py-24 bg-linear-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-custom-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-custom-yellow/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-custom-blue/5 to-custom-yellow/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-custom-blue to-blue-600 rounded-3xl shadow-2xl mb-8"
            >
              <FiShield className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-linear-to-r from-gray-900 via-custom-blue to-blue-600 bg-clip-text text-transparent">
                Fully Certified & Compliant
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Your trust is our foundation. We maintain the highest standards of compliance and certification.
            </motion.p>
          </motion.div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <FaBuilding className="w-12 h-12" />, 
                title: 'PPDA Registered', 
                description: 'Official government approved vendor for public sector printing services and procurement',
                badge: 'Official',
                gradient: 'from-blue-500 to-custom-blue'
              },
              { 
                icon: <FiAward className="w-12 h-12" />, 
                title: 'MRA Tax Compliant', 
                description: 'Fully compliant with all Malawi Revenue Authority tax regulations and financial requirements',
                badge: 'Certified',
                gradient: 'from-green-500 to-emerald-600'
              },
              { 
                icon: <MdBusinessCenter className="w-12 h-12" />, 
                title: 'Business Registered', 
                description: 'Legally registered entity operating under Malawian business laws and regulations',
                badge: 'Legal',
                gradient: 'from-purple-500 to-indigo-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-custom-blue/20 group-hover:-translate-y-3 h-full flex flex-col overflow-hidden">
                  
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Premium Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-linear-to-r ${item.gradient} shadow-lg`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Container with Advanced Effects */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="relative mb-8"
                  >
                    <div className="relative inline-block">
                      {/* Icon Background */}
                      <div className="w-24 h-24 bg-linear-to-br from-gray-50 to-white rounded-2xl shadow-lg flex items-center justify-center mx-auto border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-custom-blue"
                        >
                          {item.icon}
                        </motion.div>
                      </div>
                      
                      {/* Floating Animation */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-custom-blue/20 transition-all duration-500"
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="grow space-y-4">
                    {/* Title with Gradient */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                      className="text-2xl font-bold text-gray-900 text-center group-hover:text-custom-blue transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                      className="text-gray-600 leading-relaxed text-center text-lg font-light"
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  {/* Interactive Bottom Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.4 + (index * 0.1) }}
                    className="h-1 bg-linear-to-r from-transparent via-custom-blue to-transparent rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-custom-blue/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-custom-blue/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-custom-blue/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-custom-blue/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Glow Effect */}
                <div className="absolute -z-10 inset-0 bg-linear-to-br from-custom-blue/5 to-custom-yellow/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"></div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mt-20 pt-16 border-t border-gray-200/50"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-8"
            >
              MEETING THE HIGHEST STANDARDS
            </motion.p>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { text: 'ISO Quality Standards', icon: <FiCheck className="w-5 h-5" /> },
                { text: 'Environmental Compliance', icon: <FaLeaf className="w-5 h-5" /> },
                { text: 'Safety Certified', icon: <FiShield className="w-5 h-5" /> },
                { text: 'Data Protection', icon: <FaLock className="w-5 h-5" /> }
              ].map((standard, idx) => (
                <motion.div
                  key={standard.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2 + (idx * 0.1) }}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-custom-blue">{standard.icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{standard.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home