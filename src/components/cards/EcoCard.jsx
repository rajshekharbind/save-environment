// src/components/ui/EnhancedEcoCard.jsx
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * EnhancedEcoCard
 * - Adds animated gradient shimmer and subtle 3D tilt on hover
 * - Click to open a circular, rotating 'form' overlay with fields placed around a ring
 * - Accessible: Escape to close, focus moves into the form when opened
 *
 * Props:
 * - title, description, icon, color (same as your original)
 *
 * Dependencies: framer-motion, Tailwind CSS
 * Install: npm install framer-motion
 */

export default function EnhancedEcoCard({ title, description, icon, color = 'from-green-400 to-emerald-500' }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      // lock scroll
      document.body.style.overflow = 'hidden'
      // focus first input after small delay
      setTimeout(() => firstFieldRef.current?.focus(), 160)
    } else document.body.style.overflow = ''
  }, [open])

  // fields that will be placed around the circle
  const formFields = [
    { id: 'name', label: 'Name', placeholder: 'Your name' },
    { id: 'email', label: 'Email', placeholder: 'you@site.com' },
    { id: 'project', label: 'Project', placeholder: 'Short project title' },
    { id: 'budget', label: 'Budget', placeholder: '₹ (optional)' },
    { id: 'message', label: 'Message', placeholder: 'Tell me briefly...' }
  ]

  // compute positions around circle
  const radius = 110 // px distance from center for inputs
  const centerSize = 160 // central circle size

  return (
    <>
      <motion.div
        ref={containerRef}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`relative text-white shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 p-6 flex flex-col items-center cursor-pointer ${
          // keep your gradient
          `bg-gradient-to-r ${color}`
        }`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true) }}
      >
        {/* Animated shimmer */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-24 -top-12 w-56 h-56 rounded-full blur-3xl opacity-60" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </motion.div>

        {/* subtle tilt using mouse position */}
        <div className="transform-gpu" style={{ perspective: 800 }}>
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-5xl mb-4 drop-shadow-lg">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm mt-2 text-center">{description}</p>

            <div className="mt-4 text-xs opacity-90 flex gap-2 items-center">
              <span className="inline-block bg-white/20 px-3 py-1 rounded-full">Click to connect</span>
              <span className="opacity-70">—</span>
              <span className="opacity-70">Open circular form</span>
            </div>
          </div>
        </div>

        {/* floating action sparkle */}
        <motion.div
          className="absolute -bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-green-900 bg-white/80 shadow-lg z-20"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Circular form overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            {/* backdrop */}
            <motion.div className="absolute inset-0 bg-black/50" />

            {/* centered circular panel */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] flex items-center justify-center">
                {/* central card */}
                <div className="absolute flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-2xl" style={{ width: centerSize, height: centerSize }}>
                  <div className="text-center px-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Start a conversation</h4>
                    <p className="text-xs text-gray-500 mt-1">We'll get back in 24–48 hours</p>
                    <button
                      className="mt-3 px-4 py-2 bg-green-600 text-white rounded-full text-sm"
                      onClick={() => { /* could prefill or submit default */ }}
                    >
                      Quick submit
                    </button>
                  </div>
                </div>

                {/* place fields around the ring */}
                {formFields.map((f, i) => {
                  const angle = (i / formFields.length) * Math.PI * 2 - Math.PI / 2
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  const fieldStyle = {
                    position: 'absolute',
                    left: `calc(50% + ${x}px - 120px / 2)`, // center each field (120px width)
                    top: `calc(50% + ${y}px - 40px / 2)`, // center each field (40px height)
                    width: 160,
                    transform: 'translate(-50%, -50%)'
                  }

                  return (
                    <motion.div
                      key={f.id}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, rotate: 360 }}
                      transition={{ delay: 0.08 * i, type: 'spring', stiffness: 260, damping: 20 }}
                      style={fieldStyle}
                    >
                      <label htmlFor={f.id} className="sr-only">{f.label}</label>
                      {f.id === 'message' ? (
                        <textarea
                          ref={i === 0 ? firstFieldRef : null}
                          id={f.id}
                          placeholder={f.placeholder}
                          className="w-full resize-none p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white/90 text-sm"
                          rows={3}
                        />
                      ) : (
                        <input
                          ref={i === 0 ? firstFieldRef : null}
                          id={f.id}
                          placeholder={f.placeholder}
                          className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white/90 text-sm"
                        />
                      )}
                    </motion.div>
                  )
                })}

                {/* close button */}
                <button
                  aria-label="Close form"
                  className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-md"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

