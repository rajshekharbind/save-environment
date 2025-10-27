// src/components/hero/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import CTAButton from '../ui/CTAButton'
import EarthCanvas from './EarthCanvas'

const Hero = () => {
  return (
    <section id="main-content" className="min-h-screen flex items-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-center md:text-left"
          >
            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
            > */}
              Protect Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                Planet
              </span>{' '}
              For Future Generations
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Join the movement to create a sustainable future through actionable steps and community efforts.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <CTAButton>
                Get Started
              </CTAButton>
              {/* <Button variant="outline" size="large">
                Learn More
              </Button> */}
            </motion.div>
          </motion.div>
          
          {/* Earth visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero