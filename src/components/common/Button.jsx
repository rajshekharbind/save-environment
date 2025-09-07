// src/components/common/Button.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500 focus:ring-offset-white dark:focus:ring-offset-gray-900',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-900',
    outline: 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus:ring-green-500 focus:ring-offset-white dark:focus:ring-offset-gray-900',
    ghost: 'text-green-500 hover:bg-green-500/10 focus:ring-green-500 focus:ring-offset-white dark:focus:ring-offset-gray-900'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg '
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <motion.button
      // whileHover={{ scale: disabled ? 1 : 1.05 }}
      // whileTap={{ scale: disabled ? 1 : 0.95 }}
      // className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button