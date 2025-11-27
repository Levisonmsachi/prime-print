import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from "../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
  
  const certifications = [
    {
      id: 1,
      title: 'Business Registration Certificate',
      issuer: 'Malawi Government - Registrar General',
      description: 'Official business registration certificate authorizing our operations in Malawi. This certifies that Prime Printing Solutions is a legally registered business entity.',
      issueDate: 'January 15, 2008',
      expiryDate: 'Perpetual',
      status: 'Active',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
        </svg>
      ),
      importance: 'high',
      image: '/certificates/business-registration.jpg' // Replace with actual image path
    },
    {
      id: 2,
      title: 'PPDA Registration Certificate',
      issuer: 'Public Procurement and Disposal of Assets Authority',
      description: 'Certified supplier for government printing contracts. This registration allows us to participate in government tenders and procurement processes.',
      issueDate: 'March 22, 2023',
      expiryDate: 'March 21, 2026',
      status: 'Active',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
        </svg>
      ),
      importance: 'high',
      image: '/certificates/ppda-registration.jpg'
    },
    {
      id: 3,
      title: 'MRA Tax Clearance Certificate',
      issuer: 'Malawi Revenue Authority',
      description: 'Current tax compliance certificate demonstrating our commitment to statutory obligations and financial responsibility.',
      issueDate: 'December 15, 2023',
      expiryDate: 'December 14, 2024',
      status: 'Active',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      importance: 'high',
      image: '/certificates/tax-clearance.jpg'
    },
    {
      id: 4,
      title: 'Quality Management System',
      issuer: 'Malawi Bureau of Standards',
      description: 'Certification for our quality management processes ensuring consistent delivery of high-quality printing services.',
      issueDate: 'June 10, 2022',
      expiryDate: 'June 9, 2025',
      status: 'Active',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      importance: 'medium',
      image: '/certificates/quality-management.jpg'
    },
    {
      id: 5,
      title: 'Environmental Compliance Certificate',
      issuer: 'Environmental Affairs Department',
      description: 'Certification for environmentally responsible printing practices and waste management procedures.',
      issueDate: 'August 5, 2023',
      expiryDate: 'August 4, 2026',
      status: 'Active',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"/>
        </svg>
      ),
      importance: 'medium',
      image: '/certificates/environmental-compliance.jpg'
    },
    {
      id: 6,
      title: 'Occupational Health & Safety',
      issuer: 'Ministry of Labour',
      description: 'Workplace safety certification ensuring safe working conditions for our employees and visitors.',
      issueDate: 'February 18, 2023',
      expiryDate: 'February 17, 2026',
      status: 'Active',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      ),
      importance: 'medium',
      image: '/certificates/health-safety.jpg'
    }
  ]

  const trustIndicators = [
    { 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
        </svg>
      ), 
      text: 'Fully Registered Business', 
      description: 'Legally authorized to operate in Malawi' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
        </svg>
      ), 
      text: 'Government Approved Supplier', 
      description: 'PPDA certified for government contracts' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ), 
      text: 'Tax Compliant', 
      description: 'Current MRA tax clearance certificate' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ), 
      text: 'Quality Certified', 
      description: 'Malawi Bureau of Standards approved' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"/>
        </svg>
      ), 
      text: 'Environmentally Compliant', 
      description: 'Sustainable printing practices' 
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      ), 
      text: 'Safety Certified', 
      description: 'Occupational health & safety compliance' 
    }
  ]

  const verificationSteps = [
    {
      step: '1',
      title: 'Request Verification',
      description: 'Contact us with your verification requirements',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      step: '2',
      title: 'Provide Details',
      description: 'Share the certificate details you wish to verify',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      step: '3',
      title: 'Secure Access',
      description: 'We provide secure access to certificate copies',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      )
    },
    {
      step: '4',
      title: 'Confirmation',
      description: 'Receive official verification confirmation',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )
    }
  ]

  const selectedCert = certifications.find(cert => cert.id === selectedCertificate)

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-20">
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedCert?.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{selectedCert?.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 rounded-2xl transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-8 max-h-[60vh] overflow-auto">
                <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200/50">
                  <div className="aspect-4/3 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-custom-blue/10 rounded-2xl flex items-center justify-center text-custom-blue mx-auto mb-4">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">
                        Certificate Image Preview
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Replace with actual certificate image at: {selectedCert?.image}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    Issued: {selectedCert?.issueDate}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    Expires: {selectedCert?.expiryDate}
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    Download
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-custom-blue rounded-2xl hover:bg-blue-600 transition-colors duration-200">
                    Verify
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-custom-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-custom-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-custom-blue to-blue-600 rounded-3xl shadow-2xl mb-8"
          >
            {/* Logo Image */}
            <img 
              src={logo} 
              alt="Prime Printing Solutions Logo" 
              loading="lazy"
              decoding="async"
              className="w-full h-full rounded-3xl object-contain bg-gray-200 shadow-2xl transition-all duration-300"
            />
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our <span className="text-custom-blue">Certifications</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full mx-auto mb-8"
          />
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Trust and credibility are the foundation of our business. Explore our official 
            certifications and compliance documents that demonstrate our commitment to 
            quality, professionalism, and regulatory excellence.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {[
            { 
              text: 'Government Registered', 
              color: 'from-green-500 to-emerald-600', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
                </svg>
              ) 
            },
            { 
              text: 'PPDA Certified', 
              color: 'from-blue-500 to-custom-blue', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8h-4v4H9v-4H5V9h4V5h2v4h4v2z"/>
                </svg>
              ) 
            },
            { 
              text: 'Tax Compliant', 
              color: 'from-purple-500 to-indigo-600', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              ) 
            },
            { 
              text: 'Quality Assured', 
              color: 'from-amber-500 to-orange-600', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              ) 
            }
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-2xl bg-linear-to-r ${badge.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center`}
            >
              <span className="text-white mr-2">{badge.icon}</span>
              {badge.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-4xl shadow-2xl border border-gray-100/50 p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Why Trust <span className="text-custom-blue">Prime</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive compliance and certifications that build confidence in every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <div className="w-20 h-20 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
                    {indicator.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{indicator.text}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{indicator.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Official <span className="text-custom-blue">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive certification portfolio demonstrating regulatory compliance and professional standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Certificate Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mr-4 transform group-hover:scale-110 transition-all duration-300">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">{cert.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.status === 'Active' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        cert.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      {cert.status}
                    </span>
                  </div>

                  {/* Certificate Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed grow">
                    {cert.description}
                  </p>

                  {/* Certificate Details */}
                  <div className="space-y-4 p-4 bg-gray-50/50 rounded-2xl mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">Issue Date</span>
                      <span className="text-gray-600 text-sm">{cert.issueDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">Expiry Date</span>
                      <span className={`text-sm font-medium ${
                        cert.expiryDate === 'Perpetual' 
                          ? 'text-green-600' 
                          : 'text-gray-600'
                      }`}>
                        {cert.expiryDate}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      cert.importance === 'high' 
                        ? 'bg-red-100 text-red-800 border border-red-200' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {cert.importance === 'high' ? 'High Priority' : 'Standard'}
                    </span>
                    <button 
                      onClick={() => setSelectedCertificate(cert.id)}
                      className="text-custom-blue hover:text-blue-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      View Certificate
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-linear-to-r from-custom-blue to-blue-600 rounded-4xl shadow-2xl" />
          <div className="relative bg-linear-to-r from-custom-blue/90 to-blue-600/90 backdrop-blur-sm p-12 lg:p-16 rounded-4xl text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Fully Compliant & Trusted Partner
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our comprehensive certifications ensure that we meet all regulatory requirements, 
              making us the trusted printing partner for government agencies, businesses, and 
              educational institutions across Malawi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Compliance Pack
              </button>
              <button className="group bg-custom-blue/20 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                Request Verification
              </button>
            </div>
          </div>
        </motion.div>

        {/* Verification Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Certificate <span className="text-custom-blue">Verification</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple and secure process to verify our certifications for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center relative"
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-custom-blue/30 to-transparent transform translate-x-12"></div>
                )}
                
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 text-custom-blue mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Need Certified Printing Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with a fully certified and trusted printing company for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group bg-linear-to-r from-custom-blue to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Get Certified Quote
            </a>
            <a
              href="tel:+265996678548"
              className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +265 996 678 548
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications