import React from 'react'
import { motion } from 'framer-motion'

interface Category {
  id: string
  name: string
  count: number
}

interface PortfolioFilterProps {
  categories: Category[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  categories,
  activeFilter,
  onFilterChange
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeFilter === category.id
              ? 'bg-custom-blue text-white shadow-lg'
              : 'bg-white text-gray-700 hover:text-custom-blue hover:shadow-md border border-gray-200'
          }`}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </motion.div>
  )
}

export default PortfolioFilter