// src/components/ui/CTAButton.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Button from '../common/Button'


const CTAButton = ({ children, ...props }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        size="large"
        className="relative overflow-hidden group"
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {/* Ripple effect */}
        <motion.span 
          className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10"
          initial={{ scale: 0 }}
          whileHover={{ scale: 2 }}
          transition={{ duration: 0.5 }}
        />
        {/* Glow effect */}
        <motion.span 
          className="absolute -inset-2 bg-green-400 rounded-full blur-md opacity-0 group-hover:opacity-50"
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  )
}

export default CTAButton