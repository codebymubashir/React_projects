import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Button({ href, solid = false, external = false, arrow = true, children }) {
  return (
    <motion.a
      href={href}
      className={`btn ${solid ? 'solid' : ''}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </motion.a>
  )
}
