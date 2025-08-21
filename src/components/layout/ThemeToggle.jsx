// src/components/layout/ThemeToggle.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../../hooks/useDarkMode'

const ThemeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 p-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        layout
        className={`w-4 h-4 rounded-full flex items-center justify-center ${
          isDark ? 'bg-yellow-400' : 'bg-white'
        }`}
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle