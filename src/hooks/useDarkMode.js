// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleDarkMode = () => setIsDark(!isDark)

  return { isDark, toggleDarkMode }
}