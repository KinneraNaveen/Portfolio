import { motion } from 'framer-motion';
import profile from '../assets/profile.png';

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies Mastered', value: '10+' },
  
];

const highlights = [
  {
    icon: '🎓',
    title: 'Education',
    description: 'B.Tech in Computer Science & Engineering',
    detail: 'Kalasalingam University (2022–2026)'
  },
  {
    icon: '💼',
    title: 'Experience',
    description: 'Full-Stack Development & AI/ML',
    detail: '2+ years of hands-on experience'
  },
  {
    icon: '🏆',
    title: 'Achievements',
    description: 'Multiple project recognitions',
    detail: 'Award-winning solutions'
  },
  {
    icon: '🌟',
    title: 'Passion',
    description: 'Innovation & Problem Solving',
    detail: 'Creating impactful solutions'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="section bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px]">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-200/30 dark:bg-accent-800/30 rounded-full blur-xl" />
            
            {/* Main image container */}
            <div className="relative glass-card p-2 aspect-[3/4]">
              <img 
                src={profile} 
                alt="Kinnera Naveen - Full-Stack Developer" 
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
              />
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-card px-4 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
              Crafting Digital Excellence
            </h3>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I'm a passionate <strong className="text-primary-600 dark:text-primary-400">Full-Stack Developer</strong> and 
                <strong className="text-accent-600 dark:text-accent-400"> AI-ML enthusiast</strong> currently pursuing my B.Tech in 
                Computer Science and Engineering at Kalasalingam University.
              </p>
              <p>
                With over 2 years of hands-on experience, I specialize in creating innovative web applications 
                that seamlessly blend cutting-edge technology with exceptional user experiences. My expertise 
                spans across modern frameworks, databases, and artificial intelligence.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and am constantly exploring 
                new ways to push the boundaries of what's possible in web development and AI.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/KINNERA_NAVEEN.pdf" 
              download 
              className="btn-primary group"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            <a 
              href="mailto:kinneranaveen237@gmail.com" 
              className="btn-secondary group"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center glass-card card-hover"
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Highlights Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="card card-hover text-center group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {highlight.icon}
            </div>
            <h4 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-white">
              {highlight.title}
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 text-sm">
              {highlight.description}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              {highlight.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
