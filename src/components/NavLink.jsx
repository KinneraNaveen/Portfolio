import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function NavLink({ to, children, activeLink, setActiveLink, setOpen, className = "" }) {
  const isActive = activeLink === to;
  
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-100}
      spy={true}
      onSetActive={() => setActiveLink(to)}
      onClick={() => setOpen && setOpen(false)}
      className={`
        relative cursor-pointer px-4 py-2 rounded-lg font-medium text-sm
        transition-all duration-300 group
        ${isActive 
          ? 'text-primary-600 dark:text-primary-400' 
          : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400'
        }
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Active background */}
      {isActive && (
        <motion.div 
          className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
          layoutId="activeNavLink"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      {/* Hover effect */}
      <motion.div 
        className="absolute inset-0 bg-white/50 dark:bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary-500 rounded-full"
          layoutId="activeIndicator"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
          style={{ transform: 'translateX(-50%)' }}
        />
      )}
    </Link>
  );
}
