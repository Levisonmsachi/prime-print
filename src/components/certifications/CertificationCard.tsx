import React from 'react'
import { motion } from 'framer-motion'

interface Certification {
  id: number
  title: string
  issuer: string
  description: string
  issueDate: string
  expiryDate: string
  status: string
  badge: string
  importance: 'high' | 'medium'
}

interface CertificationCardProps {
  certification: Certification
  index: number
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${
        certification.importance === 'high' 
          ? 'border-green-500' 
          : 'border-blue-500'
      }`}
    >
      <div className="p-6">
        {/* Certificate Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="text-4xl mr-4">{certification.badge}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{certification.title}</h3>
              <p className="text-gray-600 text-sm">{certification.issuer}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            certification.status === 'Active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {certification.status}
          </span>
        </div>

        {/* Certificate Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {certification.description}
        </p>

        {/* Certificate Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">Issue Date</h4>
            <p className="text-gray-600">{certification.issueDate}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">Expiry Date</h4>
            <p className={`font-medium ${
              certification.expiryDate === 'Perpetual' 
                ? 'text-green-600' 
                : 'text-gray-600'
            }`}>
              {certification.expiryDate}
            </p>
          </div>
        </div>

        {/* Importance Badge */}
        <div className="flex justify-between items-center mt-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${
            certification.importance === 'high' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {certification.importance === 'high' ? 'High Importance' : 'Standard Certification'}
          </span>
          <button className="text-custom-blue hover:text-blue-600 font-semibold text-sm flex items-center">
            View Certificate
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationCard