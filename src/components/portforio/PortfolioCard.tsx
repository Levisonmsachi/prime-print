import React from 'react'
import { motion } from 'framer-motion'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  client: string
  year: string
}

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Portfolio Image */}
      <div className="bg-linear-to-br from-custom-blue to-blue-600 p-12 text-center relative overflow-hidden">
        <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
          {item.image}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="text-white text-lg font-semibold"
          >
            View Details
          </motion.div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-custom-blue transition-colors">
            {item.title}
          </h3>
          <span className="bg-custom-blue text-white text-xs px-2 py-1 rounded-full">
            {item.year}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">Client: {item.client}</span>
          <span className="bg-gray-100 px-2 py-1 rounded capitalize">
            {item.category.replace('-', ' ')}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioCard