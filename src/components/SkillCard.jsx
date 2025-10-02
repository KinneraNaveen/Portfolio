import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillCard({ name, level = 80, icon, color = 'from-primary-400 to-primary-600' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card card-hover group relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className="text-2xl"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                {name}
              </h4>
            </div>
          </div>
          <motion.div 
            className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? '#0ea5e9' : undefined
            }}
            transition={{ duration: 0.2 }}
          >
            {level}%
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
          
          {/* Skill level indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            className="absolute -top-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs px-2 py-1 rounded font-medium"
            style={{ left: `${Math.max(0, Math.min(level - 5, 90))}%` }}
          >
            {level}%
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-neutral-900 dark:border-t-white" />
          </motion.div>
        </div>

        {/* Proficiency Level */}
        <div className="mt-3 flex justify-between items-center text-xs">
          <span className="text-neutral-500 dark:text-neutral-400">
            {level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : level >= 70 ? 'Intermediate' : 'Beginner'}
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < Math.floor(level / 20) 
                    ? 'bg-primary-500' 
                    : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 1.2 + (i * 0.1) }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
