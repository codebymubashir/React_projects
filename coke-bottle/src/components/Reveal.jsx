import { motion } from 'framer-motion'
import { reduceMotion } from '../lib/state'

/** Text reveal: fades and rises in when scrolled into view, reverses on leave. */
export default function Reveal({ as = 'div', className, children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  )
}
