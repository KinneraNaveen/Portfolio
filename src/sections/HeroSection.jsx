import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ['Full-Stack Developer', 'AI-ML Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-primary-950/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="gradient-hero" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 blur-xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-accent-400/20 to-primary-400/20 blur-xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary-300/30 to-accent-300/30 blur-lg"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p 
                className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="font-display text-5xl md:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-neutral-900 dark:text-white">Kinnera</span>
                <br />
                <span className="text-gradient-hero">Naveen</span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="h-16 flex items-center">
              <motion.h2 
                key={currentRole}
                className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.h2>
            </motion.div>

            <motion.p 
              variants={itemVariants} 
              className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg"
            >
              I craft exceptional digital experiences through innovative web development and cutting-edge AI solutions. 
              Passionate about turning complex problems into elegant, user-friendly applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="btn-primary cursor-pointer group"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="btn-secondary cursor-pointer group"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a href="https://github.com/kinneranaveen" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300 group">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kinnera-naveen-1786ab2b6/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300 group">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:kinneranaveen237@gmail.com" className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300 group">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main card */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 glass-card backdrop-blur-2xl border-2 border-white/20 dark:border-white/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
                
                {/* Code-like pattern */}
                <div className="absolute inset-6 font-mono text-xs text-neutral-400 dark:text-neutral-500 space-y-2 overflow-hidden">
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </motion.div>
                  <motion.div 
                    className="space-y-1 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-primary-400">const</div>
                    <div className="text-accent-400 ml-4">developer = {'{'}</div>
                    <div className="ml-8 text-neutral-300">name: "Naveen",</div>
                    <div className="ml-8 text-neutral-300">skills: ["React", "Node.js", "AI/ML"],</div>
                    <div className="ml-8 text-neutral-300">passion: "Innovation",</div>
                    <div className="ml-8 text-neutral-300">status: "Available"</div>
                    <div className="text-accent-400 ml-4">{'}'}</div>
                  </motion.div>
                </div>

                {/* Floating tech icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-16 right-8 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold"
                    animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    JS
                  </motion.div>
                  <motion.div
                    className="absolute bottom-20 left-8 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold"
                    animate={{ y: [5, -5, 5], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    AI
                  </motion.div>
                  <motion.div
                    className="absolute top-32 left-12 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold"
                    animate={{ x: [-3, 3, -3], y: [-2, 2, -2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⚛️
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 left-8 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-8 right-8 w-64 h-64 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 2, duration: 0.5 }} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="cursor-pointer flex flex-col items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
        >
          <span className="font-medium">Scroll to explore</span>
          <motion.svg 
            className="w-5 h-5 group-hover:translate-y-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </Link>
      </motion.div>
    </section>
  );
}
