import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90, icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
      { name: 'JavaScript', level: 85, icon: '🟨', color: 'from-yellow-400 to-orange-400' },
      { name: 'TypeScript', level: 80, icon: '🔷', color: 'from-blue-500 to-indigo-500' },
      { name: 'Tailwind CSS', level: 90, icon: '🎨', color: 'from-teal-400 to-blue-500' },
      { name: 'HTML5/CSS3', level: 95, icon: '🌐', color: 'from-orange-400 to-red-400' },
      { name: 'Next.js', level: 75, icon: '▲', color: 'from-gray-700 to-gray-900' }
    ]
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-400 to-emerald-500' },
      { name: 'Express.js', level: 80, icon: '🚀', color: 'from-gray-600 to-gray-800' },
      { name: 'Python', level: 85, icon: '🐍', color: 'from-blue-500 to-yellow-400' },
      { name: 'Java', level: 80, icon: '☕', color: 'from-red-500 to-orange-500' },
      { name: 'MongoDB', level: 75, icon: '🍃', color: 'from-green-500 to-teal-500' },
      { name: 'PostgreSQL', level: 70, icon: '🐘', color: 'from-blue-600 to-indigo-600' }
    ]
  },
  {
    title: 'AI/ML & Data Science',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 80, icon: '🧠', color: 'from-purple-400 to-pink-400' },
      { name: 'TensorFlow', level: 75, icon: '🔥', color: 'from-orange-500 to-red-500' },
      { name: 'PyTorch', level: 70, icon: '⚡', color: 'from-red-400 to-orange-400' },
      { name: 'Data Analysis', level: 85, icon: '📊', color: 'from-indigo-400 to-purple-400' },
      { name: 'OpenCV', level: 70, icon: '👁️', color: 'from-cyan-400 to-blue-400' },
      { name: 'NLP', level: 75, icon: '💬', color: 'from-green-400 to-blue-400' }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 90, icon: '📚', color: 'from-gray-700 to-gray-900' },
      { name: 'Docker', level: 75, icon: '🐳', color: 'from-blue-400 to-blue-600' },
      { name: 'VS Code', level: 95, icon: '💻', color: 'from-blue-500 to-indigo-500' },
      { name: 'Postman', level: 85, icon: '📮', color: 'from-orange-400 to-red-400' },
      { name: 'MySQL', level: 75, icon: '🗄️', color: 'from-blue-600 to-indigo-600' },
      { name: 'Linux', level: 70, icon: '🐧', color: 'from-gray-600 to-gray-800' }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>
      </div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 glass-card px-6 py-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                  }}
                  viewport={{ once: true }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
            Always Learning, Always Growing
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
            frameworks, and methodologies to stay at the forefront of web development and AI innovation. 
            My passion for continuous learning drives me to explore emerging trends and implement 
            cutting-edge solutions in my projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Team Collaboration', 'Agile Development', 'Code Review', 'Mentoring', 'Technical Writing'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
