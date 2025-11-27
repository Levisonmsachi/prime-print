import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import logo from "../assets/PRIME PRINTING SOLUTIONS LOGO.jpg"

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
  file: FileList;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'file' && value[0]) {
          formData.append('file', value[0]);
        } else {
          formData.append(key, value as string);
        }
      });

      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.');
      reset();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp floating button
  const openWhatsApp = () => {
    const message = "Hello! I'm interested in your printing services. Could you provide more information?";
    const phone = "+265996678548";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-custom-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-custom-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/3 rounded-full blur-3xl"></div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.415"/>
        </svg>
        <div className="absolute -top-12 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </motion.button>

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
            <img 
              src={logo} 
              alt="Prime Printing Solutions Logo" 
              loading="lazy"
              decoding="async"
              className="w-full h-full rounded-3xl object-contain bg-gray-200 shadow-2xl transition-all duration-300"
            />

          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Get In <span className="text-custom-blue">Touch</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-custom-blue to-blue-500 rounded-full mx-auto mb-8"
          />
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Whether you need a quick quote, a custom design, or professional printing advice — 
            we're just a message away. Let's print something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                      placeholder="+265 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="serviceNeeded"
                      {...register('serviceNeeded', { required: 'Please select a service' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="commercial">Commercial Printing</option>
                      <option value="publications">Publications</option>
                      <option value="stationery">Stationery & Supplies</option>
                      <option value="binding">Binding & Finishing</option>
                      <option value="large-format">Large Format Printing</option>
                      <option value="design">Design & Branding</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.serviceNeeded && (
                      <p className="mt-1 text-sm text-red-600">{errors.serviceNeeded.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload File (Optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    {...register('file')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-custom-blue file:text-white hover:file:bg-blue-600"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.ai,.psd,.eps"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Upload your design files or reference materials (PDF, DOC, JPG, PNG, AI, PSD, EPS)
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-linear-to-r from-custom-blue to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center ${
                      submitMessage.includes('error') 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Details</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start group/item">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 text-lg">Office Address</h3>
                      <p className="text-gray-600 mt-1">
                        Area 51/B, Lilongwe, Malawi<br />
                        <span className="text-sm text-gray-500">Main Office & Workshop</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 text-lg">Phone Numbers</h3>
                      <div className="text-gray-600 mt-1 space-y-1">
                        <p>+265 996 678 548</p>
                        <p className="text-sm text-gray-500">Mon - Fri, 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 text-lg">Email Address</h3>
                      <p className="text-gray-600 mt-1">
                        primeprintsolutions25@outlook.com<br />
                        <span className="text-sm text-gray-500">Business Inquiries</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.415"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 text-lg">WhatsApp</h3>
                      <p className="text-gray-600 mt-1">
                        +265 996 678 548<br />
                        <span className="text-sm text-gray-500">Available for quick queries</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-custom-blue font-semibold">6:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-custom-blue font-semibold">6:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Sunday</span>
                    <span className="text-custom-blue font-semibold">6:00 AM – 9:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-700 text-sm text-center">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Emergency printing services available outside office hours
                  </p>
                </div>
              </div>
            </div>

            {/* Find Us & Follow Us - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Find Us - Google Map */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500" />
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Find Us</h2>
                  <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="font-medium text-sm">Google Maps Integration</p>
                      <p className="text-xs mt-1">Area 51/B, Lilongwe, Malawi</p>
                      <button className="mt-3 bg-custom-blue text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-600 transition-colors">
                        Open in Google Maps
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us - Social Media */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500" />
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { 
                        name: 'Facebook', 
                        href: '#', 
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        ), 
                        color: 'hover:bg-blue-600 hover:text-white' 
                      },
                      { 
                        name: 'Instagram', 
                        href: '#', 
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297zm8.062-10.86c-.739 0-1.337-.598-1.337-1.337 0-.739.598-1.337 1.337-1.337s1.337.598 1.337 1.337c0 .739-.598 1.337-1.337 1.337zm2.225 10.86c-1.297 0-2.448-.49-3.323-1.297-.886-.875-1.376-2.026-1.376-3.323s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297z"/>
                          </svg>
                        ), 
                        color: 'hover:bg-pink-600 hover:text-white' 
                      },
                      { 
                        name: 'LinkedIn', 
                        href: '#', 
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        ), 
                        color: 'hover:bg-blue-700 hover:text-white' 
                      },
                      { 
                        name: 'Twitter', 
                        href: '#', 
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        ), 
                        color: 'hover:bg-blue-400 hover:text-white' 
                      }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`flex flex-col items-center justify-center p-4 bg-gray-100 rounded-2xl text-gray-600 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                      >
                        {social.icon}
                        <span className="text-xs mt-2 font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;