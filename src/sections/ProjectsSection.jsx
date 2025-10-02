import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import p1 from '../assets/project-college-connect.jpg';
import p2 from '../assets/project-healthcare.jpeg';
import p3 from '../assets/framers_connect.webp';
import p4 from '../assets/fall-detection.jpg';

const projects = [
  {
    id: 1,
    title: 'College Connect',
    description: 'Student networking platform with CRUD operations and clean UI',
    longDescription: 'A comprehensive MERN stack application designed to connect college students, faculty, and administration. Features include user authentication, real-time messaging, event management, and academic resource sharing.',
    stack: ['MERN', 'JWT', 'Bootstrap', 'Socket.io'],
    features: ['User Authentication', 'Real-time Chat', 'Event Management', 'Resource Sharing', 'Admin Dashboard'],
    github: 'https://github.com/kinneranaveen',
    live: '#',
    image: p1,
    category: 'Full-Stack',
    status: 'Completed',
    year: '2025'
  },
  {
    id: 2,
    title: 'Healthcare Support WebApp',
    description: 'Multilingual healthcare platform with AI-powered chatbot',
    longDescription: 'An innovative healthcare platform that provides multilingual support and AI-powered assistance. Includes symptom checker, doctor consultation booking, and health tracking features.',
    stack: ['React', 'Node.js', 'AI/ML', 'NLP', 'MongoDB'],
    features: ['AI Chatbot', 'Multilingual Support', 'Symptom Checker', 'Doctor Booking', 'Health Analytics'],
    github: 'https://github.com/kinneranaveen',
    live: '#',
    image: p2,
    category: 'AI/ML',
    status: 'Completed',
    year: '2024'
  },
  {
    id: 3,
    title: 'E-commerce for Farmers',
    description: 'Permission-based platform connecting farmers and buyers',
    longDescription: 'A specialized e-commerce platform that directly connects farmers with buyers, eliminating middlemen. Features include crop listing, price negotiation, quality verification, and logistics management.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    features: ['Direct Trading', 'Price Negotiation', 'Quality Verification', 'Logistics Tracking', 'Payment Gateway'],
    github: 'https://github.com/kinneranaveen',
    live: '#',
    image: p3,
    category: 'Full-Stack',
    status: 'Completed',
    year: '2023'
  },
  {
    id: 4,
    title: 'Fall Detection System',
    description: 'YOLOv10 + IoT real-time fall detection with Telegram alerts',
    longDescription: 'An advanced IoT-based fall detection system using YOLOv10 computer vision model. Provides real-time monitoring for elderly care with instant notifications via Telegram and emergency contacts.',
    stack: ['YOLOv10', 'IoT', 'Python', 'OpenCV', 'Telegram API'],
    features: ['Real-time Detection', 'Computer Vision', 'IoT Integration', 'Instant Alerts', 'Emergency Response'],
    github: 'https://github.com/kinneranaveen',
    live: '#',
    image: p4,
    category: 'AI/ML',
    status: 'Completed',
    year: '2025'
  },
];

const categories = ['All', 'Full-Stack', 'AI/ML'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent work in full-stack development and AI/ML applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-glow'
                  : 'glass hover:bg-white/20 dark:hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid sm:grid-cols-2 gap-8"
        layout
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            layout
          >
            <ProjectCard 
              {...project} 
              onViewDetails={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Project Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Projects Completed', value: '10+' },
          { label: 'Technologies Used', value: '15+' },
          { label: 'GitHub Repositories', value: '25+' },
          { label: 'Lines of Code', value: '50K+' }
        ].map((stat, index) => (
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

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
            Interested in Collaboration?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/kinneranaveen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <span>View All Projects</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="mailto:kinneranaveen237@gmail.com" 
              className="btn-primary group"
            >
              <span>Let's Work Together</span>
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
