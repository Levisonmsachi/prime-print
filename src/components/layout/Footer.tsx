import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from "../../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-custom-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-custom-yellow/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              {/* Premium Logo */}
              <div className="w-12 h-12 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl mr-4 overflow-hidden">
                <img 
                  src={logo} 
                  alt="Prime Printing Solutions"
                  className="w-10 h-10 object-contain rounded-lg"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling as HTMLElement;
                    fallback.style.display = 'flex';
                  }}
                />
                {/* Elegant Fallback */}
                <div className="hidden w-10 h-10 bg-linear-to-br from-custom-blue to-blue-600 rounded-lg items-center justify-center text-white font-bold text-sm">
                  PPS
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Prime Printing Solutions</h3>
                <p className="text-custom-blue font-semibold text-sm">Since 2025</p>
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Malawi's premier printing partner delivering exceptional quality and reliable service 
              for businesses, government agencies, and educational institutions across the nation.
            </motion.p>

            {/* Social Links - Enhanced with Real Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-4"
            >
              {[
                { 
                  name: 'Facebook', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ) 
                },
                { 
                  name: 'Twitter', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  ) 
                },
                { 
                  name: 'LinkedIn', 
                  href: '#', 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ) 
                }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-custom-blue/30 transition-all duration-300 border border-white/10 hover:border-custom-blue/50 shadow-lg hover:shadow-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-custom-blue rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Certifications', href: '/certifications' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-custom-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                    <span className="ml-2 text-custom-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Enhanced with Real Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-custom-blue rounded-full mr-3"></span>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  text: 'Area 51/B, Lilongwe, Malawi',
                  subtext: 'Main Office & Workshop'
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ),
                  text: '+265 996 678 548',
                  subtext: 'Available, 24/7'
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                  text: 'primeprintsolutions25@outlook.com',
                  subtext: 'Business Inquiries'
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.415"/>
                    </svg>
                  ),
                  text: '+265 996 678 548',
                  subtext: 'WhatsApp Available'
                }
              ].map((contact, index) => (
                <motion.li
                  key={contact.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <span className="text-gray-400 mt-1 shrink-0 group-hover:text-custom-blue transition-colors duration-300">
                    {contact.icon}
                  </span>
                  <div>
                    <p className="text-white font-medium group-hover:text-custom-blue transition-colors duration-300">
                      {contact.text}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {contact.subtext}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Badges - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { text: 'PPDA Certified', color: 'from-green-500 to-emerald-600' },
            { text: 'Tax Compliant', color: 'from-blue-500 to-custom-blue' },
            { text: 'Business Registered', color: 'from-purple-500 to-indigo-600' },
            { text: 'Quality Guaranteed', color: 'from-amber-500 to-orange-600' }
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className={`px-6 py-3 rounded-2xl bg-linear-to-r ${badge.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              {badge.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
        >
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-lg">
              © {currentYear} Prime Printing Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Proudly serving Malawi since 2025
            </p>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
          >
            <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
              Sitemap
            </a>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-300 text-lg mb-4">
            Ready to start your next printing project?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-linear-to-r from-custom-blue to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-transparent hover:border-blue-400"
            >
              Get Free Quote Today
              <span className="ml-3 text-xl">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer