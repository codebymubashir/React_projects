import { motion } from 'framer-motion'
import Button from './Button'

const line = (d) => ({ initial: { yPercent: 110 }, animate: { yPercent: 0 }, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: d } })

export default function HeroSection({ ready }) {
  const foot = (d) => ({ initial: { opacity: 0, y: 30 }, animate: ready ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.9, delay: d, ease: 'easeOut' } })
  return (
    <section className="sec" id="home">
      <h1 aria-label="Taste the extraordinary.">
        <span><motion.i {...(ready ? line(0.1) : { initial: { yPercent: 110 } })}>Taste the</motion.i></span>
        <span><motion.i className="o" {...(ready ? line(0.24) : { initial: { yPercent: 110 } })}>Extraordinary.</motion.i></span>
      </h1>
      <div className="hero-foot">
        <motion.p {...foot(0.7)}>One iconic bottle. A world of refreshment.</motion.p>
        <motion.div {...foot(0.82)}><Button solid href="#icon">Start the journey</Button></motion.div>
      </div>
      <div className="cue" aria-hidden="true" />
    </section>
  )
}
