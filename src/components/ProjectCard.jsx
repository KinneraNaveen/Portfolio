import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ 
  title, 
  description, 
  longDescription,
  stack, 
  features,
  github, 
  live, 
  image, 
  category,
  status,
  year,
  onViewDetails 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card card-hover group relative overflow-hidden"
      layout
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          status === 'Completed' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
        }`}>
          {status}
        </span>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
          {category}
        </span>
      </div>

      <div className="mb-4 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg" 
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        
        {/* Year Badge */}
        <div className="absolute bottom-2 right-2">
          <span className="px-2 py-1 bg-black/50 text-white rounded text-xs font-medium backdrop-blur-sm">
            {year}
          </span>
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
        {title}
      </h3>
      
      <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
        {isExpanded ? longDescription : description}
      </p>

      {/* Features Preview */}
      {features && features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">
            Key Features
          </h4>
          <div className="flex flex-wrap gap-1">
            {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
              <span 
                key={feature} 
                className="px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded text-xs"
              >
                {feature}
              </span>
            ))}
            {!isExpanded && features.length > 3 && (
              <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs">
                +{features.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {stack.map(tech => (
            <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-ghost text-sm flex-1 text-center group/btn"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4 transition-transform group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {live !== '#' && (
            <a 
              href={live} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary text-sm flex-1 text-center group/btn"
            >
              <span>Live Demo</span>
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium flex items-center justify-center gap-1"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          <svg 
            className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
