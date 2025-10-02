import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/animations.css'

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-900 dark:to-neutral-800">
          <div className="text-center p-8 max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
              Oops! Something went wrong
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Don't worry, this happens sometimes. Please refresh the page or contact me if the issue persists.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// Set theme preference
const initializeTheme = () => {
  try {
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark')
      if (!theme) localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      if (!theme) localStorage.setItem('theme', 'light')
    }
  } catch (error) {
    console.warn('Could not access localStorage for theme preference')
    // Fallback to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  }
}

// Performance monitoring
const logPerformanceMetrics = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0]
        if (navigation) {
          console.log('🚀 Portfolio Performance Metrics:', {
            'Load Time': `${Math.round(navigation.loadEventEnd - navigation.loadEventStart)}ms`,
            'DOM Content Loaded': `${Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)}ms`,
            'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'
          })
        }
      }, 0)
    })
  }
}

// Initialize
initializeTheme()
logPerformanceMetrics()

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
