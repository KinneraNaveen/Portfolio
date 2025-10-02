import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    if (form.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    return newErrors
  }

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setStatus('loading')
    setErrors({})
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus('success')
      setForm({ name: '', email: '', message: '', subject: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="card space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
          Name *
        </label>
        <motion.input 
          whileFocus={{ scale: 1.01 }} 
          name="name" 
          value={form.name} 
          onChange={onChange} 
          placeholder="Your full name"
          className={`form-input ${
            errors.name ? 'border-red-500 focus:ring-red-500/50' : ''
          }`}
        />
        {errors.name && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs mt-1"
          >
            {errors.name}
          </motion.p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
          Email *
        </label>
        <motion.input 
          type="email" 
          whileFocus={{ scale: 1.01 }} 
          name="email" 
          value={form.email} 
          onChange={onChange} 
          placeholder="your.email@example.com"
          className={`form-input ${
            errors.email ? 'border-red-500 focus:ring-red-500/50' : ''
          }`}
        />
        {errors.email && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs mt-1"
          >
            {errors.email}
          </motion.p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
          Subject
        </label>
        <motion.input 
          whileFocus={{ scale: 1.01 }} 
          name="subject" 
          value={form.subject} 
          onChange={onChange} 
          placeholder="What's this about?"
          className="form-input"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
          Message *
        </label>
        <motion.textarea 
          whileFocus={{ scale: 1.005 }} 
          rows="5" 
          name="message" 
          value={form.message} 
          onChange={onChange} 
          placeholder="Tell me about your project, ideas, or just say hello!"
          className={`form-input resize-none ${
            errors.message ? 'border-red-500 focus:ring-red-500/50' : ''
          }`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs"
            >
              {errors.message}
            </motion.p>
          )}
          <span className={`text-xs ml-auto ${
            form.message.length < 10 
              ? 'text-red-500' 
              : form.message.length < 50 
                ? 'text-yellow-500' 
                : 'text-green-500'
          }`}>
            {form.message.length}/500
          </span>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 pt-2">
        <motion.button 
          className={`btn-primary relative overflow-hidden ${
            status === 'loading' ? 'cursor-not-allowed opacity-75' : ''
          }`}
          type="submit"
          disabled={status === 'loading'}
          whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Send Message</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          )}
        </motion.button>
        
        {/* Status Messages */}
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Thanks! Your message has been sent. I'll get back to you soon!</span>
          </motion.div>
        )}
        
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>Oops! Something went wrong. Please try again or email me directly.</span>
          </motion.div>
        )}
      </div>
    </motion.form>
  )
}
