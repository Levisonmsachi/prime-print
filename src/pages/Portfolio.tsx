import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiX, 
  FiFileText, 
  FiCheck, 
  FiCalendar,
  FiDownload,
  FiMail,
  FiPhone,
  FiAward,
  FiUsers,
  FiStar,
  FiTarget,
  FiHeart
} from 'react-icons/fi'
import { 
  FaUniversity, 
  FaBuilding, 
  FaHotel, 
  FaShoppingCart, 
  FaMobileAlt,
  FaPrint,
  FaQrcode,
  FaPalette,
  FaBoxOpen,
  FaRibbon
} from 'react-icons/fa'
import { 
  MdBusinessCenter,
  MdDescription,
  MdMenuBook,
  MdSchool
} from 'react-icons/md'

import logo from "../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"

// Importing Portfolio Images
import businessCard1 from '../assets/business_card_template_002.jpg'
import productCat1 from "../assets/catalog-image-2.jpg"
import textbook1 from "../assets/stack-books-black-wooden-table.jpg"
import realEstate1 from "../assets/real-estate-image-1.jpg"
import medicalCard1 from "../assets/medical-nurse-card.png"
import uniPublication from "../assets/university-e-learning-image.png"
import startBusinessCard from "../assets/business-card-3.jpg"
import annualReport1 from "../assets/annual-report-image.png"
import gvtStationary from "../assets/school-building.jpg"
import eventProgramms1 from "../assets/workshop-bronchure.jpg"
import tempBranding1 from "../assets/real-estate-image-1.jpg"
import execStationery from "../assets/kids-books.jpg"

// Import Behind the Scenes Images
import printingMachine from "../assets/pexels-huy-phan.jpg"
import qualityControl from "../assets/slider-slider123.jpg"
import packaging from "../assets/annual-report-image.png"
import designWork from "../assets/Real Estate Brochure Design Template Presentation.jpg"

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  interface PortfolioItem {
    id: number
    title: string
    category: string
    description: string
    image: string
    client: string
    year: string
    details: string
    features: string[]
    deliverables: string[]
    timeline: string
  }

  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)

  const categories = [
    { id: 'all', name: 'All Work', count: 12, icon: <MdBusinessCenter className="w-5 h-5" /> },
    { id: 'business-cards', name: 'Business Cards', count: 3, icon: <FaRibbon className="w-5 h-5" /> },
    { id: 'brochures', name: 'Brochures', count: 4, icon: <MdDescription className="w-5 h-5" /> },
    { id: 'books', name: 'Books & Magazines', count: 2, icon: <MdMenuBook className="w-5 h-5" /> },
    { id: 'stationery', name: 'Stationery', count: 3, icon: <FiFileText className="w-5 h-5" /> }
  ]

  // Sample Portfolio Items
  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Business Cards',
      category: 'business-cards',
      description: 'Premium business cards for corporate clients with spot UV coating and elegant typography',
      image: businessCard1,
      client: 'Malawi Telecom',
      year: '2024',
      details: 'Full-color digital printing with spot UV coating on 400gsm premium card stock. These business cards feature modern design elements and professional finishing that reflect the corporate identity of our client.',
      features: ['Spot UV Coating', 'Premium Card Stock', 'Modern Design', 'Quick Turnaround'],
      deliverables: ['5000 Business Cards', 'Digital Mockups', 'Quality Assurance'],
      timeline: '3-5 Business Days'
    },
    {
      id: 2,
      title: 'Product Catalogues',
      category: 'brochures',
      description: 'Full-color product catalogues for retail businesses with high-gloss finish',
      image: productCat1,
      client: 'Shoprite Malawi',
      year: '2024',
      details: '48-page full-color catalogue with perfect binding and high-gloss lamination. The catalogue showcases product ranges with vibrant imagery and clear product information.',
      features: ['Perfect Binding', 'High-Gloss Finish', 'Full Color', 'Durable Cover'],
      deliverables: ['2000 Catalogues', 'Design Services', 'Print Management'],
      timeline: '7-10 Business Days'
    },
    {
      id: 3,
      title: 'Educational Textbooks',
      category: 'books',
      description: 'Textbook printing for educational institutions with durable binding',
      image: textbook1,
      client: 'Ministry of Education',
      year: '2023',
      details: '5000 copies of 200-page textbooks with section-sewn binding for longevity. These textbooks are designed to withstand heavy usage in educational environments.',
      features: ['Section-Sewn Binding', 'Matte Finish', 'Bulk Printing', 'Educational Standards'],
      deliverables: ['5000 Textbooks', 'Cover Design', 'Bulk Packaging'],
      timeline: '15-20 Business Days'
    },
    {
      id: 4,
      title: 'Executive Stationery',
      category: 'stationery',
      description: 'Luxury letterheads and envelopes for executive teams with embossed logo',
      image: execStationery,
      client: 'National Bank',
      year: '2024',
      details: 'Complete corporate identity package with embossed logo and premium paper. The stationery suite maintains brand consistency across all executive communications.',
      features: ['Embossed Logo', 'Premium Paper', 'Brand Consistency', 'Executive Quality'],
      deliverables: ['Letterheads', 'Envelopes', 'Business Cards', 'Compliment Slips'],
      timeline: '5-7 Business Days'
    },
    {
      id: 5,
      title: 'Real Estate Brochures',
      category: 'brochures',
      description: 'High-gloss brochures for property developments with stunning photography',
      image: realEstate1,
      client: 'Dream House Properties',
      year: '2023',
      details: 'A4 brochures with high-gloss finish and perfect binding for luxury properties. These brochures feature professional photography and compelling property descriptions.',
      features: ['High-Gloss Finish', 'Professional Photography', 'Luxury Feel', 'Sales Focused'],
      deliverables: ['3000 Brochures', 'Photo Editing', 'Copywriting'],
      timeline: '5-7 Business Days'
    },
    {
      id: 6,
      title: 'Medical Practice Cards',
      category: 'business-cards',
      description: 'Professional cards for healthcare providers with clean, trustworthy design',
      image: medicalCard1,
      client: 'Queen Elizabeth Hospital',
      year: '2023',
      details: 'Clean, professional design with matte finish and rounded corners for medical practitioners. The design emphasizes trust and professionalism in healthcare.',
      features: ['Matte Finish', 'Rounded Corners', 'Professional Design', 'Healthcare Focused'],
      deliverables: ['2000 Business Cards', 'Digital Files', 'Quality Check'],
      timeline: '3-5 Business Days'
    },
    {
      id: 7,
      title: 'University Publications',
      category: 'books',
      description: 'Academic journals and research publications with academic integrity',
      image: uniPublication,
      client: 'University of Malawi',
      year: '2024',
      details: 'Academic publications with perfect binding and high-quality paper for research materials. These publications maintain academic standards while being visually appealing.',
      features: ['Academic Standards', 'Perfect Binding', 'Research Quality', 'Institutional Branding'],
      deliverables: ['1500 Publications', 'ISBN Services', 'Distribution Support'],
      timeline: '10-14 Business Days'
    },
    {
      id: 8,
      title: 'Branding',
      category: 'stationery',
      description: 'Complete stationery suite for luxury branding with gold foil accents',
      image: tempBranding1,
      client: 'Sunbird Tourism',
      year: '2024',
      details: 'Full stationery suite including letterheads, envelopes, and business cards with gold foil. The luxury branding package elevates the client corporate identity.',
      features: ['Gold Foil', 'Luxury Feel', 'Complete Suite', 'Brand Consistency'],
      deliverables: ['Full Stationery Suite', 'Brand Guidelines', 'Digital Assets'],
      timeline: '7-10 Business Days'
    },
    {
      id: 9,
      title: 'Event Programmes',
      category: 'brochures',
      description: 'Event programmes for national ceremonies with elegant design',
      image: eventProgramms1,
      client: 'State House',
      year: '2023',
      details: 'Saddle-stitched programmes for national events with elegant typography and design. These programmes maintain the dignity and importance of state events.',
      features: ['Saddle Stitching', 'Elegant Design', 'Event Specific', 'Quick Production'],
      deliverables: ['5000 Programmes', 'Rush Service', 'Special Finishing'],
      timeline: '2-3 Business Days'
    },
    {
      id: 10,
      title: 'Startup Business Cards',
      category: 'business-cards',
      description: 'Modern designs for tech startups with innovative materials',
      image: startBusinessCard,
      client: 'Tech Hub Malawi',
      year: '2024',
      details: 'Modern business cards with unique cuts and innovative materials for tech companies. The design reflects innovation and forward-thinking approach.',
      features: ['Unique Cuts', 'Innovative Materials', 'Modern Design', 'Tech Focused'],
      deliverables: ['1000 Business Cards', 'Custom Die-cut', 'Material Samples'],
      timeline: '4-6 Business Days'
    },
    {
      id: 11,
      title: 'Annual Reports',
      category: 'brochures',
      description: 'Corporate annual reports with financial data and professional layout',
      image: annualReport1,
      client: 'Various Corporations',
      year: '2023',
      details: 'Professional annual reports with data visualization and corporate branding. These reports effectively communicate financial performance and corporate achievements.',
      features: ['Professional Layout', 'Data Visualization', 'Corporate Branding', 'High Quality'],
      deliverables: ['Annual Reports', 'Data Charts', 'Executive Summary'],
      timeline: '10-12 Business Days'
    },
    {
      id: 12,
      title: 'Government Stationery',
      category: 'stationery',
      description: 'Official government documents and forms with security features',
      image: gvtStationary,
      client: 'Government Ministries',
      year: '2024',
      details: 'Secure government documents with official seals and security printing features. These documents maintain the integrity and authority of government communications.',
      features: ['Security Features', 'Official Seals', 'Government Standards', 'Secure Printing'],
      deliverables: ['Official Documents', 'Security Printing', 'Batch Numbering'],
      timeline: '7-9 Business Days'
    }
  ]

  const featuredCaseStudies = [
    {
      id: 1,
      title: 'University Prospectus Design',
      client: 'Education Sector',
      description: 'Designed and printed a 100-page full-color prospectus with matte finish and perfect binding for university admissions.',
      result: 'Delivered 2,000 copies within 5 days, helping increase student applications by 25%',
      images: [textbook1, uniPublication, productCat1],
      quote: 'Prime Printing delivered exceptional quality under tight deadlines. Their attention to detail made our prospectus stand out.',
      author: 'University Marketing Director'
    },
    {
      id: 2,
      title: 'Corporate Rebranding Package',
      client: 'Financial Institution',
      description: 'Complete rebranding including business cards, letterheads, and marketing materials with new corporate identity.',
      result: 'Successfully launched new brand identity across 15 branches nationwide',
      images: [businessCard1, execStationery, startBusinessCard],
      quote: 'The quality and consistency across all printed materials exceeded our expectations. True professionals.',
      author: 'Head of Marketing'
    },
    {
      id: 3,
      title: 'National Campaign Materials',
      client: 'Government Agency',
      description: 'Large-scale printing of educational materials and campaign posters for national health awareness program.',
      result: 'Distributed 50,000 materials across all regions within 2 weeks',
      images: [gvtStationary, eventProgramms1, annualReport1],
      quote: 'Their ability to handle large volumes while maintaining quality was impressive. Reliable partner.',
      author: 'Program Director'
    }
  ]

  const clients = [
    { name: 'Universities & Colleges', logo: <FaUniversity className="w-8 h-8" /> },
    { name: 'Banks & Credit Unions', logo: <FaBuilding className="w-8 h-8" /> },
    { name: 'Education Sector', logo: <MdSchool className="w-8 h-8" /> },
    { name: 'Tourism Companies', logo: <FaHotel className="w-8 h-8" /> },
    { name: 'Shopping Companies', logo: <FaShoppingCart className="w-8 h-8" /> },
    { name: 'Telecommunication Companies', logo: <FaMobileAlt className="w-8 h-8" /> }
  ]

  const behindTheScenes = [
    { image: printingMachine, description: 'State-of-the-art printing machines', icon: <FaPrint className="w-8 h-8" /> },
    { image: qualityControl, description: 'Our quality control team in action', icon: <FaQrcode className="w-8 h-8" /> },
    { image: packaging, description: 'Packaging finished products', icon: <FaBoxOpen className="w-8 h-8" /> },
    { image: designWork, description: 'Design and prepress work', icon: <FaPalette className="w-8 h-8" /> }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-20">
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
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
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{selectedProject.client} • {selectedProject.year}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-2xl transition-colors duration-200"
                >
                  <FiX className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Project Image */}
              <div className="p-8 max-h-[50vh] overflow-auto">
                <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200/50">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 max-h-[40vh] overflow-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Description & Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Overview</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedProject.details}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <FiCheck className="w-4 h-4 text-custom-blue mr-3 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Deliverables & Timeline */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Deliverables</h4>
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {selectedProject.deliverables?.map((deliverable: string, idx: number) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <FiCheck className="w-4 h-4 text-green-500 mr-3 shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-custom-blue/10 rounded-2xl p-4">
                      <div className="flex items-center mb-2">
                        <FiCalendar className="w-5 h-5 text-custom-blue mr-2" />
                        <h4 className="text-lg font-semibold text-custom-blue">Project Timeline</h4>
                      </div>
                      <p className="text-custom-blue font-medium">{selectedProject.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <FiFileText className="w-4 h-4 mr-1" />
                    Category: {selectedProject.category.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    <FiDownload className="w-4 h-4 mr-2" />
                    Download Specs
                  </button>
                  <Link
                    to="/contact"
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-custom-blue rounded-2xl hover:bg-blue-600 transition-colors duration-200"
                  >
                    <FiMail className="w-4 h-4 mr-2" />
                    Start Similar Project
                  </Link>
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
            Our <span className="text-custom-blue">Portfolio</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full mx-auto mb-8"
          />
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore our recent print projects crafted with precision and passion. 
            Our work speaks for itself through quality and attention to detail.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-linear-to-r from-custom-blue to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:text-custom-blue hover:shadow-xl border border-gray-200/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Portfolio Image */}
                  <div 
                    className="relative overflow-hidden h-64 bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedProject(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="flex items-center text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full cursor-pointer"
                        onClick={() => setSelectedProject(item)}
                      >
                        <FiFileText className="w-4 h-4 mr-2" />
                        View Project
                      </motion.div>
                    </div>
                  </div>

                  {/* Portfolio Content */}
                  <div className="p-6 grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-custom-blue transition-colors">
                        {item.title}
                      </h3>
                      <span className="bg-custom-blue text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed grow">
                      {item.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-gray-700">Client: {item.client}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full capitalize text-gray-600 font-medium">
                          {item.category.replace('-', ' ')}
                        </span>
                      </div>
                      
                      {/* Features Preview */}
                      <div className="flex flex-wrap gap-1">
                        {item.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="flex items-center bg-custom-blue/10 text-custom-blue text-xs px-2 py-1 rounded">
                            <FiCheck className="w-3 h-3 mr-1" />
                            {feature}
                          </span>
                        ))}
                        {item.features.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            +{item.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-16"
            >
              <div className="flex justify-center mb-6">
                <FiFileText className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">No projects found</h3>
              <p className="text-gray-600 text-lg">Try selecting a different category to see more of our work</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Featured <span className="text-custom-blue">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth look at some of our most impactful projects and client success stories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Images Carousel */}
                  <div className="flex gap-2 mb-6">
                    {study.images.map((img, idx) => (
                      <div key={idx} className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                        <img 
                          src={img} 
                          alt={`Case study ${index + 1} image ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <div className="flex items-center bg-custom-blue/10 text-custom-blue text-sm px-3 py-1 rounded-full mb-4">
                    <FiUsers className="w-4 h-4 mr-1" />
                    {study.client}
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                  
                  <div className="flex items-center bg-green-50 border border-green-200 rounded-2xl p-4 mb-4">
                    <FiTarget className="w-4 h-4 text-green-600 mr-2" />
                    <p className="text-green-800 font-semibold text-sm">Result: {study.result}</p>
                  </div>

                  {/* Client Quote */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 italic text-sm mb-2">"{study.quote}"</p>
                    <p className="text-gray-700 font-semibold text-sm">— {study.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Trusted by <span className="text-custom-blue">Leading Institutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proud to serve reputable organizations across Malawi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center text-custom-blue mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <p className="text-gray-700 font-semibold text-sm">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Behind the Scenes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Behind the <span className="text-custom-blue">Prints</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to final print – every detail matters in our process
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {behindTheScenes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100/50 mb-4 transform group-hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="flex justify-center text-custom-blue mb-3">
                    {item.icon}
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-32 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-700 font-medium text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-4xl shadow-2xl border border-gray-100/50 p-12 lg:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '100+', label: 'Projects Completed', icon: <FiTarget className="w-8 h-8" /> },
                { number: '100+', label: 'Happy Clients', icon: <FiHeart className="w-8 h-8" /> },
                { number: '5+', label: 'Years Experience', icon: <FiAward className="w-8 h-8" /> },
                { number: '98%', label: 'Client Satisfaction', icon: <FiStar className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-center text-custom-blue mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-custom-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-linear-to-r from-custom-blue to-blue-600 rounded-4xl shadow-2xl" />
          <div className="relative bg-linear-to-r from-custom-blue/90 to-blue-600/90 backdrop-blur-sm p-12 lg:p-16 rounded-4xl text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's bring your next project to life with the same quality and attention to detail
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group flex items-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <FiTarget className="w-5 h-5 mr-2" />
                Request a Quote
              </Link>
              <a
                href="tel:+265996678548"
                className="group flex items-center bg-custom-blue/20 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <FiPhone className="w-5 h-5 mr-2" />
                Call: +265 996 678 548
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Fast response • Free consultation • Quality guaranteed
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio