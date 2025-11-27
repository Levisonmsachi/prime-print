// About.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiTarget,
  FiEye,
  FiBook,
  FiStar,
  FiUsers,
  FiHeart,
  FiAward,
  FiShield,
  FiPrinter,
  FiZap,
  FiDollarSign,
  FiTruck,
  FiPhone,
  FiMail
} from 'react-icons/fi'
import { 
  FaHandshake,
  FaLightbulb,
  FaRecycle
} from 'react-icons/fa'
import logo from "../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"

// Import workspace photos 
import workspace1 from "../assets/empty-chairs-table-office.jpg"
import workspace2 from "../assets/nobody-business-office.jpg"
import workspace3 from "../assets/pexels-huy-phan.jpg"
import workspace4 from "../assets/IMAGE 6.jpg"

// Team member placeholder images
import teamPlaceholder1 from "../assets/Director.jpg"
import teamPlaceholder2 from "../assets/Director.jpg"
import teamPlaceholder3 from "../assets/Director.jpg"

// Team Member Card Component with Modal
const TeamMemberCard: React.FC<{ member: any; index: number }> = ({ member, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="group relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
        <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 text-center">
          {/* Team Member Image - Professional Rounded Profile */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl mx-auto transform group-hover:scale-110 transition-all duration-500 border-4 border-white ring-2 ring-custom-blue/20">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80&facepad=3`;
                }}
              />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-4 right-1/2 transform translate-x-12 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-32 h-32 rounded-full bg-custom-blue/90 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">View Profile</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
          <div className="inline-flex items-center justify-center px-4 py-2 bg-custom-blue/10 rounded-2xl mb-3">
            <span className="text-custom-blue font-semibold text-sm">{member.position}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
          
          {/* Contact Info */}
          <div className="border-t border-gray-100 pt-4">
            <div className="inline-flex items-center text-sm text-gray-500">
              <FiPhone className="w-4 h-4 mr-2" />
              {member.phone}
            </div>
          </div>
          
          {/* Hover Effect Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full group-hover:w-16 transition-all duration-500" />
        </div>
      </motion.div>

      {/* Modal Popup - Medium Size */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              {/* Header Section */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl mx-auto mb-4 border-4 border-white ring-2 ring-custom-blue/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80&facepad=3`;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-custom-blue/10 rounded-xl mb-4">
                  <span className="text-custom-blue font-semibold text-sm">
                    {member.position}
                  </span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-custom-blue/10 rounded-lg flex items-center justify-center mr-3">
                    <FiPhone className="w-5 h-5 text-custom-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Phone</p>
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-sm font-semibold text-gray-900 hover:text-custom-blue transition-colors duration-300"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-custom-blue/10 rounded-lg flex items-center justify-center mr-3">
                    <FiMail className="w-5 h-5 text-custom-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Email</p>
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@primeprintingsolutions.com`}
                      className="text-sm font-semibold text-gray-900 hover:text-custom-blue transition-colors duration-300"
                    >
                      {member.name.toLowerCase().replace(' ', '.')}@primeprintingsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Print Management', 'Quality Control', 'Client Relations', 'Team Leadership'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-custom-blue/5 text-custom-blue rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Thandeka Nkhode",
      position: "Managing Director",
      bio: "With over 15 years in the print industry, Thandeka leads our team with a vision for quality and excellence. Her strategic leadership and deep understanding of printing technologies have been instrumental in positioning Prime Printing Solutions as Malawi's premier printing partner.",
      phone: "+265 996 678 548",
      image: teamPlaceholder1
    },
    {
      name: "Steven Nkhonde",
      position: "Head of Operations",
      bio: "Steven ensures that every project runs smoothly, from initial design to final delivery. His meticulous attention to detail and operational expertise guarantee that all printing projects meet the highest standards of quality and are delivered on time.",
      phone: "+265 992 345 678",
      image: teamPlaceholder2
    },
    {
      name: "Kelvin Chimpokosera",
      position: "Creative Director",
      bio: "Kelvin's creative flair brings our clients' ideas to life with stunning, impactful designs. With a background in graphic design and brand development, he oversees all creative aspects ensuring that every piece communicates effectively and beautifully.",
      phone: "+265 993 456 789",
      image: teamPlaceholder3
    }
  ]

  const values = [
    { 
      title: "Quality First", 
      description: "Every print we produce reflects our commitment to excellence and precision craftsmanship",
      icon: <FiStar className="w-6 h-6" />
    },
    { 
      title: "Integrity", 
      description: "We deliver what we promise, maintaining transparency and honesty in all our dealings",
      icon: <FaHandshake className="w-6 h-6" />
    },
    { 
      title: "Customer Focus", 
      description: "Your satisfaction drives everything we do, from initial consultation to final delivery",
      icon: <FiHeart className="w-6 h-6" />
    },
    { 
      title: "Innovation", 
      description: "We use modern technology and creative solutions to achieve outstanding results",
      icon: <FaLightbulb className="w-6 h-6" />
    },
    { 
      title: "Reliability", 
      description: "Consistent, dependable service that our clients can trust for every project",
      icon: <FiShield className="w-6 h-6" />
    },
    { 
      title: "Sustainability", 
      description: "We care about responsible printing practices and environmental consciousness",
      icon: <FaRecycle className="w-6 h-6" />
    }
  ]

  const workspacePhotos = [
    { src: workspace1, alt: "Our modern printing workshop" },
    { src: workspace2, alt: "State-of-the-art printing equipment" },
    { src: workspace3, alt: "Quality control process" },
    { src: workspace4, alt: "Team collaboration space" }
  ]

  const whyChooseUs = [
    {
      icon: <FiPrinter className="w-6 h-6" />,
      title: "Modern Printing Equipment",
      description: "State-of-the-art technology for superior print quality"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Fast Turnaround Time",
      description: "Quick and efficient service without compromising quality"
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Affordable Rates",
      description: "Competitive pricing for all your printing needs"
    },
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Nationwide Delivery",
      description: "Reliable delivery services across Malawi"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Experienced Team",
      description: "Friendly professionals with years of expertise"
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored printing solutions for your unique needs"
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
            About <span className="text-custom-blue">Us</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full mx-auto mb-8"
          />
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Malawi's trusted printing partner, delivering premium-quality printing services for businesses, 
            schools, and institutions nationwide with precision, speed, and unmatched customer satisfaction.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100/50 group-hover:shadow-3xl transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <FiTarget className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide high-quality, affordable printing services that empower our clients to 
                  communicate their messages effectively and drive their success forward through 
                  exceptional print solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100/50 group-hover:shadow-3xl transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-custom-yellow to-amber-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <FiEye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become Malawi's leading printing company known for innovation, reliability, 
                  and sustainable printing solutions that transform business communication and 
                  set new standards in the industry.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-custom-blue/5 via-blue-50 to-custom-blue/10 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-blue-100/50 group-hover:shadow-3xl transition-all duration-500">
                <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <FiBook className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Established in 2025, Prime Printing Solutions emerged as Malawi's premier printing partner, 
                    dedicated to delivering exceptional print materials for both domestic and industrial markets.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We combine professional expertise with superior craftsmanship to ensure every piece meets 
                    the highest quality standards. Our journey began with a simple vision: to transform the 
                    printing landscape in Malawi through innovation, reliability, and unwavering commitment 
                    to customer satisfaction.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, we proudly serve businesses, government agencies, and educational institutions 
                    across the nation, building lasting relationships through our dedication to excellence 
                    and continuous improvement.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-blue-100/50">
                  <div className="inline-flex items-center px-4 py-2 bg-custom-blue/10 rounded-2xl">
                    <span className="text-custom-blue font-bold text-sm">EST. 2025 • MALAWI'S PRINTING PARTNER</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workspace Photos Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {workspacePhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-custom-blue">Prime</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart as Malawi's premier printing partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm grow">{item.description}</p>
                  
                  {/* Feature Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-custom-blue/10 rounded-full flex items-center justify-center text-sm font-bold text-custom-blue">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-custom-blue">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The guiding principles that define how we work and build lasting relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm grow">{value.description}</p>
                  
                  {/* Value Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Leadership <span className="text-custom-blue">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals dedicated to delivering exceptional printing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Stats & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white to-gray-50 rounded-4xl shadow-2xl border border-gray-100/50" />
          <div className="relative bg-white/60 backdrop-blur-sm p-12 lg:p-16 rounded-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Our <span className="text-custom-blue">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Delivering excellence and building trust across Malawi
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "5+", label: "Years Combined Experience", suffix: "", icon: <FiAward className="w-6 h-6 mx-auto mb-2 text-custom-blue" /> },
                { number: "100+", label: "Projects Completed", suffix: "", icon: <FiTarget className="w-6 h-6 mx-auto mb-2 text-custom-blue" /> },
                { number: "100+", label: "Satisfied Clients", suffix: "", icon: <FiUsers className="w-6 h-6 mx-auto mb-2 text-custom-blue" /> },
                { number: "99%", label: "Client Satisfaction", suffix: "Rate", icon: <FiStar className="w-6 h-6 mx-auto mb-2 text-custom-blue" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-custom-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                    {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About