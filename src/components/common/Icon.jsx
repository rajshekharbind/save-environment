// src/components/common/Icon.jsx
import React from 'react'

const Icon = ({ name, size = 24, className = '' }) => {
  const icons = {
    leaf: '🍃',
    tree: '🌳',
    earth: '🌍',
    sun: '☀️',
    water: '💧',
    energy: '⚡',
    recycle: '♻️',
    heart: '❤️',
    star: '⭐',
    check: '✅',
    warning: '⚠️',
    info: 'ℹ️',
  }

  return (
    <span 
      className={`inline-block ${className}`}
      style={{ fontSize: size }}
      role="img"
      aria-label={name}
    >
      {icons[name] || '❓'}
    </span>
  )
}

export default Icon