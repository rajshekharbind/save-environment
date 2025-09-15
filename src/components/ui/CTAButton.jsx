// src/components/ui/EnhancedCTAButton.jsx
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button'

/**
 * Enhanced CTAButton
 * - Responsive sizes (mobile -> desktop)
 * - Ripple on click (coordinates-based)
 * - Subtle hover/press animations (scale, glow, gradient)
 * - Optional subtitle and icon
 * - Accessible (aria-label, focus-visible)
 *
 * Props:
 * - children: main label
 * - subtitle: optional small text under the main label
 * - icon: optional React node shown to the left of the label
 * - variant: "solid" | "outline" (default: "solid")
 * - size: "md" | "lg" (controls padding)
 * - loading: boolean to show a simple loader
 * - ...props forwarded to underlying Button (onClick, href, type, etc.)
 */

const EnhancedCTAButton = ({
  children,
  subtitle,
  icon,
  variant = 'solid',
  size = 'lg',
  loading = false,
  className = '',
  ...props
}) => {
  const [ripples, setRipples] = useState([])
  const buttonRef = useRef(null)

  useEffect(() => {
    // cleanup old ripples periodically
    const id = setInterval(() => {
      setRipples((r) => (r.length ? r.slice(1) : r))
    }, 700)
    return () => clearInterval(id)
  }, [])

  function handleClick(e) {
    // forward click to any provided onClick
    if (props.onClick) props.onClick(e)

    // create ripple based on click coords
    const rect = buttonRef.current?.getBoundingClientRect()
    const x = rect ? e.clientX - rect.left : 0
    const y = rect ? e.clientY - rect.top : 0
    const id = Date.now()
    setRipples((r) => [...r, { id, x, y }])
    // remove after animation (fallback)
    setTimeout(() => setRipples((r) => r.filter((p) => p.id !== id)), 700)
  }

  const baseClasses =
    'relative inline-flex items-center justify-center overflow-hidden transition-transform transform focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-opacity-60'

  const sizeClasses =
    size === 'lg'
      ? 'px-6 py-3 md:px-8 md:py-4 text-base md:text-lg'
      : 'px-4 py-2 text-sm md:text-base'

  const variantClasses =
    variant === 'outline'
      ? 'bg-transparent border border-gray-200 text-gray-900 dark:text-white hover:shadow-md'
      : 'bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-lg'

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-block ${className}`}
    >
      <Button
        ref={buttonRef}
        onClick={handleClick}
        size={size}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} rounded-full group`}
        aria-label={props['aria-label'] || (typeof children === 'string' ? children : 'Call to action')}
        {...props}
      >
        {/* decorative animated gradient/shine behind content */}
        <motion.span
          aria-hidden
          className="absolute -inset-0.5 rounded-full blur-md opacity-20 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.02 }}
          transition={{ ease: 'easeOut', duration: 0.35 }}
        />

        {/* glow ring on hover */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
          whileHover={{ boxShadow: '0 10px 30px rgba(16,185,129,0.18)' }}
          transition={{ duration: 0.35 }}
        />

        {/* ripples */}
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ opacity: 0.45, scale: 0 }}
              animate={{ opacity: 0, scale: 6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ left: r.x, top: r.y }}
              className="absolute w-6 h-6 rounded-full bg-white/40 pointer-events-none"
            />
          ))}
        </AnimatePresence>

        {/* content */}
        <span className="relative z-10 flex items-center gap-3">
          {icon && <span className="flex-shrink-0">{icon}</span>}

          <span className="flex flex-col items-start leading-none">
            <span className="font-semibold tracking-wide truncate">{children}</span>
            {subtitle && (
              <span className="text-[11px] md:text-xs opacity-80 font-medium mt-0.5">
                {subtitle}
              </span>
            )}
          </span>
        </span>

        {/* subtle chevron that slides on hover */}
        <motion.span
          aria-hidden
          className="absolute right-3 z-0 opacity-80"
          initial={{ x: 6 }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.28 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>

        {/* loading overlay */}
        {loading && (
          <span className="absolute inset-0 z-20 flex items-center justify-center bg-black/10">
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="3" stroke="currentColor" strokeDasharray="80" strokeDashoffset="60" fill="none" />
            </svg>
          </span>
        )}
      </Button>
    </motion.div>
  )
}

export default EnhancedCTAButton
