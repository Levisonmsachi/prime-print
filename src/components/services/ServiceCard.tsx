import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  service: {
    icon: string
    title: string
    description: string
    features: string[]
    category: string
  }
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Service Icon */}
      <div className="bg-linear-to-br from-custom-blue to-blue-600 p-8 text-center">
        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Features List */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">What we offer:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-custom-blue rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="block w-full bg-custom-blue text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard