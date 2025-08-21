// src/components/layout/Footer.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isHovered, setIsHovered] = useState(null)

  // Effect to handle reduced motion preferences
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--animation-intensity', '0.5')
    }
  }, [])

  // Footer link data organized by category
  const footerLinks = {
    About: [
      { name: 'Our Mission', url: '/about/mission', icon: '🎯' },
      { name: 'Our Team', url: '/about/team', icon: '👥' },
      { name: 'Partners', url: '/about/partners', icon: '🤝' },
      { name: 'Impact Report', url: '/about/impact', icon: '📊' }
    ],
    Programs: [
      { name: 'Reforestation', url: '/programs/reforestation', icon: '🌳' },
      { name: 'Clean Oceans', url: '/programs/clean-oceans', icon: '🌊' },
      { name: 'Renewable Energy', url: '/programs/renewable-energy', icon: '☀️' },
      { name: 'Education', url: '/programs/education', icon: '📚' }
    ],
    'Get Involved': [
      { name: 'Volunteer', url: '/get-involved/volunteer', icon: '🙌' },
      { name: 'Donate', url: '/get-involved/donate', icon: '💚' },
      { name: 'Fundraise', url: '/get-involved/fundraise', icon: '🎉' },
      { name: 'Careers', url: '/get-involved/careers', icon: '💼' }
    ],
    Resources: [
      { name: 'Blog', url: '/resources/blog', icon: '✍️' },
      { name: 'Research', url: '/resources/research', icon: '🔬' },
      { name: 'Toolkits', url: '/resources/toolkits', icon: '🛠️' },
      { name: 'Events', url: '/resources/events', icon: '📅' }
    ]
  }

  // Google sustainability links
  const googleLinks = [
    {
      name: 'Google Sustainability',
      url: 'https://sustainability.google',
      icon: '🌐',
      description: 'Google\'s commitment to sustainability'
    },
    {
      name: 'Environmental Report',
      url: 'https://sustainability.google/reports/',
      icon: '📄',
      description: 'Google\'s annual environmental report'
    },
    {
      name: 'Google Carbon Free',
      url: 'https://sustainability.google/carbon-free/',
      icon: '⚡',
      description: 'Google\'s carbon free energy initiatives'
    }
  ]

  // Social media links with actual URLs
  const socialLinks = [
    {
      platform: 'twitter',
      url: 'https://twitter.com/ecosphere',
      icon: '🐦',
      label: 'Follow us on Twitter'
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/ecosphere',
      icon: '📘',
      label: 'Like us on Facebook'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/ecosphere',
      icon: '📸',
      label: 'Follow us on Instagram'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/ecosphere',
      icon: '💼',
      label: 'Follow us on LinkedIn'
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/ecosphere',
      icon: '📺',
      label: 'Subscribe to our YouTube channel'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Animated wave divider */}
      <div className="relative h-16 -mt-16 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-green-600"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-green-500"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-green-400"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div 
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <span className="text-white text-xl">🌍</span>
              </motion.div>
              <span className="text-xl font-bold text-white">EcoSphere</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Making sustainability accessible to everyone. Join us in our mission to protect our planet for future generations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([section, links], index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">{section}</h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      to={link.url}
                      className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                      onMouseEnter={() => setIsHovered(`${section}-${i}`)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <motion.span
                        animate={{ 
                          rotate: isHovered === `${section}-${i}` ? [0, 15, -15, 0] : 0,
                          transition: { duration: 0.5 }
                        }}
                        className="mr-2"
                      >
                        {link.icon}
                      </motion.span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Google Sustainability Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Google Initiatives</h3>
            <ul className="space-y-3">
              {googleLinks.map((link, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center group"
                    onMouseEnter={() => setIsHovered(`google-${i}`)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <motion.span
                      animate={{ 
                        scale: isHovered === `google-${i}` ? [1, 1.2, 1] : 1,
                        transition: { duration: 0.5 }
                      }}
                      className="mr-2"
                    >
                      {link.icon}
                    </motion.span>
                    <span>{link.name}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: isHovered === `google-${i}` ? 1 : 0,
                        x: isHovered === `google-${i}` ? 0 : -10
                      }}
                      className="ml-2 text-xs text-green-300"
                    >
                      {link.description}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} EcoSphere. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <motion.a 
              href="/privacy"
              className="text-gray-400 hover:text-green-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms"
              className="text-gray-400 hover:text-green-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="/contact"
              className="text-gray-400 hover:text-green-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Add some 3D perspective to the entire footer on hover */}
      <motion.div
        whileHover={{
          rotateX: [0, -1, 0],
          transition: { duration: 1.5 }
        }}
        style={{ perspective: "1000px" }}
      />
    </footer>
  )
}

export default Footer

