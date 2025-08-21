// src/components/hero/EarthCanvas.jsx
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const EarthCanvas = () => {
  const containerRef = useRef(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Earth sphere */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-green-400 shadow-xl"
        style={{
          transform: `rotate(${rotation}deg)`,
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: `
            0 0 60px rgba(72, 187, 120, 0.6),
            0 0 100px rgba(72, 187, 120, 0.4),
            inset 0 0 100px rgba(0, 0, 0, 0.3)
          `
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Atmosphere glow */}
      <motion.div
        className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating elements */}
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full opacity-60"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  )
}

export default EarthCanvas