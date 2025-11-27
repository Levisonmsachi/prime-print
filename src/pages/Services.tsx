import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from "../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"

// Import React Icons - choose any combination you prefer
import { 
  FaBuilding, 
  FaBook, 
  FaFolder, 
  FaCogs, 
  FaVectorSquare, 
  FaPalette,
  FaBullseye,
  FaPrint,
  FaBolt,
  FaHeart,
  FaComments,
  FaDollarSign,
  FaTruck,
  FaPhone,
  FaQuoteRight
} from 'react-icons/fa'

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: 'Commercial Printing',
      description: 'Flyers, posters, business cards, and banners that help your brand stand out. Perfect for companies, events, and promotions.',
      features: [
        'Flyers & Brochures',
        'Business Cards', 
        'Posters & Banners',
        'Catalogues & Booklets',
        'Promotional Materials',
        'Event Programs'
      ],
      category: 'commercial'
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: 'Publications',
      description: 'Professionally printed books, magazines, newsletters, and annual reports with high-quality binding and finishes.',
      features: [
        'Books & Textbooks',
        'Magazines & Journals',
        'Newsletters',
        'Annual Reports',
        'Research Papers',
        'Corporate Documents'
      ],
      category: 'publications'
    },
    {
      icon: <FaFolder className="w-8 h-8" />,
      title: 'Stationery & Office Supplies',
      description: 'Custom letterheads, branded notebooks, envelopes, and calendars designed to represent your organization\'s identity.',
      features: [
        'Letterheads & Envelopes',
        'Business Forms',
        'Notepads & Diaries',
        'Office Paper Supplies',
        'Branded Calendars',
        'Presentation Folders'
      ],
      category: 'stationery'
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: 'Binding & Finishing',
      description: 'Coil, saddle-stitch, perfect binding — plus lamination, trimming, and folding for a clean, professional finish.',
      features: [
        'Spiral Binding',
        'Hardcover Binding',
        'Lamination Services',
        'Cutting & Trimming',
        'Folding & Creasing',
        'Foiling & Embossing'
      ],
      category: 'finishing'
    },
    {
      icon: <FaVectorSquare className="w-8 h-8" />,
      title: 'Large Format Printing',
      description: 'Billboards, pull-up banners, and signage printed on high-quality materials for maximum visibility and impact.',
      features: [
        'Vinyl Banners',
        'Billboard Printing',
        'Window Graphics',
        'Vehicle Wraps',
        'Pull-up Banners',
        'Wall Murals'
      ],
      category: 'large-format'
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: 'Design & Branding',
      description: 'We don\'t just print — we design too. Our creative team ensures your artwork is optimized for the best print quality and visual impact.',
      features: [
        'Graphic Design',
        'Brand Identity',
        'Layout & Typesetting',
        'Print Optimization',
        'Digital Mockups',
        'Artwork Preparation'
      ],
      category: 'design'
    }
  ]

  const stats = [
    { number: '5+', label: 'Years Experience', icon: <FaBullseye className="w-8 h-8" /> },
    { number: '10,000+', label: 'Projects Completed', icon: <FaPrint className="w-8 h-8" /> },
    { number: '24-48h', label: 'Average Turnaround', icon: <FaBolt className="w-8 h-8" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <FaHeart className="w-8 h-8" /> }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Design',
      description: 'We discuss your requirements and prepare your artwork',
      icon: <FaComments className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Quote & Approval',
      description: 'Receive competitive pricing and approve the project',
      icon: <FaDollarSign className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Production & Quality Check',
      description: 'High-quality printing with rigorous quality control',
      icon: <FaPrint className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'On-time delivery with ongoing customer support',
      icon: <FaTruck className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-custom-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-custom-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Hero Section */}
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
            Our <span className="text-custom-blue">Services</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full mx-auto mb-8"
          />
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            From business stationery to full-scale publications, Prime Printing Solutions delivers 
            professional-grade printing that brings your ideas to life.
          </p>
          
          {/* Hero CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group relative bg-linear-to-r from-custom-blue to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center">
                <FaQuoteRight className="mr-2" />
                Get Free Quote
              </span>
            </Link>
            <a
              href="tel:+265996678548"
              className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              +265 996 678 548
            </a>
          </motion.div>
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
            { text: 'PPDA Certified', color: 'from-green-500 to-emerald-600' },
            { text: 'Tax Compliant', color: 'from-blue-500 to-custom-blue' },
            { text: 'Quality Guaranteed', color: 'from-purple-500 to-indigo-600' },
            { text: 'Fast Turnaround', color: 'from-amber-500 to-orange-600' }
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-2xl bg-linear-to-r ${badge.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              {badge.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="grow mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide text-custom-blue">What We Offer:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-custom-blue rounded-full mr-3 shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className="block w-full bg-linear-to-r from-custom-blue to-blue-600 text-white text-center py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl items-center justify-center"
                    >
                      <FaQuoteRight className="mr-2" />
                      Request Quote
                    </Link>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Why Choose <span className="text-custom-blue">Prime</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Proven track record of excellence in printing services
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300">
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-custom-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, efficient, and transparent workflow from concept to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center relative"
              >
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-custom-blue/30 to-transparent transform translate-x-12"></div>
                )}
                
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
                    {step.step}
                  </div>
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
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
          className="relative"
        >
          <div className="absolute inset-0 bg-linear-to-r from-custom-blue to-blue-600 rounded-4xl shadow-2xl" />
          <div className="relative bg-linear-to-r from-custom-blue/90 to-blue-600/90 backdrop-blur-sm p-12 lg:p-16 rounded-4xl text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your printing needs and provide you with a competitive quote tailored to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-blue-600 text-custom-blue px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <FaQuoteRight className="mr-2" />
                Get Free Quote Today
              </Link>
              <a
                href="tel:+265996678548"
                className="group bg-custom-blue/20 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call: +265 996 678 548
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Fast response • Competitive pricing • Quality guaranteed
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services