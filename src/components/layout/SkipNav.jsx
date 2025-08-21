// src/components/layout/SkipNav.jsx
import React from 'react'

const SkipNav = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-green-600 focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:bg-gray-800 dark:focus:text-green-300"
    >
      Skip to content
    </a>
  )
}

export default SkipNav