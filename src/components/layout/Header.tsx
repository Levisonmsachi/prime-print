import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Import your logo - update the path to your actual logo file
import logo from "../../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="bg-white/98 backdrop-blur-2xl shadow-sm sticky top-0 z-50 border-b border-gray-100/80"
    >
      <nav className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Premium Logo & Brand Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-5 group min-w-0">
              {/* Sophisticated Logo Container */}
              <div className="relative shrink-0">
                {/* Main Logo with Glass Morphism */}
                <div className="w-10 sm:w-14 h-10 sm:h-14 bg-linear-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-100/80 group-hover:border-blue-100 overflow-hidden backdrop-blur-sm">
                  <img 
                    src={logo} 
                    alt="Prime Printing Solutions"
                    className="w-7 sm:w-10 h-7 sm:h-10 object-contain rounded-lg"
                    onError={(e) => {
                      // Fallback if logo doesn't load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextSibling as HTMLElement;
                      fallback.style.display = 'flex';
                    }}
                  />
                  {/* Elegant Fallback */}
                  <div className="hidden w-7 sm:w-10 h-7 sm:h-10 bg-linear-to-br from-custom-blue to-blue-600 rounded-lg items-center justify-center text-white font-bold text-xs sm:text-sm">
                    PPS
                  </div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-custom-blue/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
              </div>

              {/* Professional Brand Typography - Responsive */}
              <div className="hidden sm:flex flex-col min-w-0">
                <motion.div
                  className="flex items-baseline space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight leading-none truncate">
                    PRIME PRINTING
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="h-1 w-12 sm:w-16 bg-linear-to-r from-custom-blue to-blue-500 rounded-full mt-1"
                />
              </div>
            </Link>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  to={item.href}
                  className={`relative px-5 py-2.5 text-[15px] font-medium rounded-xl transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-custom-blue bg-blue-50/60 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/60'
                  }`}
                >
                  {/* Elegant Active Indicator */}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-custom-blue rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Subtle Hover Background */}
                  <div className="absolute inset-0 bg-linear-to-r from-gray-50/50 to-gray-50/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Navigation Text */}
                  <span className="relative z-10 tracking-wide font-semibold">{item.name}</span>
                  
                  {/* Minimal Hover Indicator */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 text-custom-blue text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    •
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Premium Mobile Menu Button */}
          <div className="xl:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-12 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center justify-center group"
            >
              {/* Refined Hamburger Icon */}
              <div className="relative w-5 h-5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                  className="absolute top-0 left-0 w-5 h-0.5 bg-gray-600 rounded-full block group-hover:bg-custom-blue transition-all duration-300"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 16 }}
                  className="absolute top-2 left-0 w-4 h-0.5 bg-gray-600 rounded-full block group-hover:bg-custom-blue transition-all duration-300"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6, width: 20 } : { rotate: 0, y: 0, width: 12 }}
                  className="absolute top-4 left-0 w-3 h-0.5 bg-gray-600 rounded-full block group-hover:bg-custom-blue transition-all duration-300"
                />
              </div>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-custom-blue/5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.button>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-1 bg-white/98 backdrop-blur-2xl border-t border-gray-100/50 rounded-b-2xl shadow-lg">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 group ${
                        isActive(item.href)
                          ? 'text-custom-blue bg-blue-50/60 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{item.name}</span>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                          className="text-custom-blue text-sm"
                        >
                          →
                        </motion.span>
                      </div>
                      
                      {/* Active Indicator */}
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="mobileActiveTab"
                          className="h-0.5 bg-custom-blue rounded-full mt-2 w-6"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header