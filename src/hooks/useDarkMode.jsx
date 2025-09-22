// src/hooks/useDarkModeAndTranslate.jsx
import React, { useState, useEffect } from 'react'

// ---------- useDarkMode Hook (robust + respects system preference) ----------
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Safe check for SSR / build environments
    if (typeof window === 'undefined') return false

    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return JSON.parse(saved)

    // fallback to system preference when no saved preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Apply class and persist preference
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDark))
    } catch (e) {
      // localStorage may be unavailable in some environments
      /* noop */
    }

    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  // Listen for system preference changes. If user has explicitly saved a pref, keep it.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const onChange = (e) => {
      const saved = localStorage.getItem('darkMode')
      // if user has chosen a preference, do not override it
      if (saved !== null) return
      setIsDark(Boolean(e.matches))
    }

    // modern and fallback event listener API
    if (mq.addEventListener) mq.addEventListener('change', onChange)
    else mq.addListener(onChange)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange)
      else mq.removeListener(onChange)
    }
  }, [])

  const toggleDarkMode = () => setIsDark((v) => {
    const next = !v
    try {
      localStorage.setItem('darkMode', JSON.stringify(next))
    } catch (e) {}
    return next
  })

  return { isDark, toggleDarkMode }
}


// -------------------- Google Translate Loader Component --------------------
// This component demonstrates how to add Google's Website Translator widget.
// NOTE: Google may change this widget or its availability; this is the classic
// client-side snippet that injects the script and creates the element.
export function GoogleTranslate({ pageLanguage = 'en', id = 'google_translate_element' }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // If script already loaded, skip
    if (document.getElementById('google-translate-script')) return

    // Create the callback required by the google script
    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate && document.getElementById(id)) {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage,
            // layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // optional
          }, id)
        } catch (e) {
          // ignore initialization errors
        }
      }
    }

    const s = document.createElement('script')
    s.id = 'google-translate-script'
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    s.async = true
    document.head.appendChild(s)

    return () => {
      // cleanup: remove script and global init (optional)
      // keep the translate element so users retain selection until reload
      delete window.googleTranslateElementInit
    }
  }, [pageLanguage, id])

  return <div id={id} style={{ display: 'inline-block' }} />
}


// -------------------- Demo component: Toggle theme + Translate --------------------
// Default export is a small demo you can drop into your app for testing.
export default function ThemeAndTranslateDemo() {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold">Theme + Google Translate demo</h1>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg border hover:opacity-90"
          aria-pressed={isDark}
        >
          {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        </button>

        <p className="text-sm">Current: <strong>{isDark ? 'Dark' : 'Light'}</strong></p>

        <div className="mt-4">
          <p className="mb-2">Translate this page:</p>
          <GoogleTranslate />
        </div>

        <p className="text-xs text-gray-500">Note: Google Translate widget is client-side only.</p>
      </div>
    </div>
  )
}
