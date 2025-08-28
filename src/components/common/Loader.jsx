// src/components/common/Loader.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    // <div className={`flex items-center justify-center ${className}`}>
    //   <motion.div
    //     className={`${sizes[size]} border-4 border-green-200 border-t-green-500 rounded-full`}
    //     animate={{ rotate: 360 }}
    //     transition={{
    //       duration: 1,
    //       repeat: Infinity,
    //       ease: "linear"
    //     }}
    //   />
    // </div>
  )
}

export default Loader