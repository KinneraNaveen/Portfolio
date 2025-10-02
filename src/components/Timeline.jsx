import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20" />
      <ul className="space-y-8">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative pl-12"
          >
            <span className="absolute left-2 top-1.5 h-4 w-4 rounded-full bg-brand shadow-[0_0_0_4px] shadow-brand/20" />
            <h4 className="font-display font-semibold">{item.title}</h4>
            <p className="text-sm opacity-80">{item.subtitle}</p>
            {item.period && <p className="text-xs opacity-60 mt-1">{item.period}</p>}
            {item.details && <p className="mt-2 text-sm">{item.details}</p>}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
