import React from 'react'
import { motion } from 'framer-motion'

const TrustIndicators: React.FC = () => {
  const trustIndicators = [
    { icon: '✅', text: 'Fully Registered Business' },
    { icon: '✅', text: 'Government Approved Supplier' },
    { icon: '✅', text: 'Tax Compliant' },
    { icon: '✅', text: 'Quality Certified' },
    { icon: '✅', text: 'Environmentally Compliant' },
    { icon: '✅', text: 'Safety Certified' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Why Trust Prime Printing Solutions?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustIndicators.map((indicator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center p-4 bg-gray-50 rounded-lg"
          >
            <span className="text-2xl mr-4 text-green-600">{indicator.icon}</span>
            <span className="text-gray-700 font-medium">{indicator.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TrustIndicators