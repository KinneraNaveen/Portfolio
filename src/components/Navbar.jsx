import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';

const navLinks = ['home', 'about', 'skills', 'education', 'projects', 'contact'];

function DarkModeToggle() {
  const [enabled, setEnabled] = useState(() => document.documentElement.classList.contains('dark'));
  
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);

  return (
    <motion.button
      onClick={() => setEnabled((v) => !v)}
      className="relative p-2 rounded-xl glass hover:scale-105 transition-all duration-300 group focus-ring"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: enabled ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {enabled ? (
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = navLinks.map(id => document.getElementById(id));
      const currentScrollPosition = scrollPosition + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= currentScrollPosition) {
          setActiveLink(navLinks[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border-b border-white/10 dark:border-white/5' 
          : 'backdrop-blur-sm bg-white/60 dark:bg-neutral-900/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="section-sm py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="font-display text-2xl font-bold cursor-pointer group"
          >
            <span className="text-neutral-900 dark:text-white">Naveen</span>
            <motion.span 
              className="text-primary-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              .
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 px-2 py-1 rounded-xl glass">
              {navLinks.map(link => (
                <NavLink 
                  key={link} 
                  to={link} 
                  activeLink={activeLink} 
                  setActiveLink={setActiveLink}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            
            {/* Resume button */}
            <a 
              href="/KINNERA_NAVEEN.pdf" 
              download 
              className="hidden sm:inline-flex btn-ghost text-sm"
            >
              Resume
            </a>

            {/* Mobile menu button */}
            <motion.button 
              className="md:hidden p-2 rounded-xl glass hover:scale-105 transition-all duration-300 focus-ring"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="glass rounded-2xl p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink 
                      to={link} 
                      activeLink={activeLink} 
                      setActiveLink={setActiveLink} 
                      setOpen={setOpen}
                      className="block w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2 border-t border-white/10"
                >
                  <a 
                    href="/KINNERA_NAVEEN.pdf" 
                    download 
                    className="block w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-primary-500 font-medium"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
