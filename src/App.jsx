// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SkipNav from './components/layout/SkipNav'
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import './index.css'

function App() {
  const { isDark } = useDarkMode()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <Router>
          <SkipNav />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App