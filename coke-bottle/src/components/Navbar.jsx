import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const links = [['Home', '#home'], ['Experience', '#ice'], ['Our Story', '#icon'], ['Ingredients', '#craft'], ['Moments', '#moments']]

export default function Navbar() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const f = () => setOn(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <motion.nav className={`nav ${on ? 'on' : ''}`} aria-label="Main" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
      <a className="logo" href="#home" aria-label="Coke Bottle, home">Coca-Cola</a>
      <ul>{links.map(([n, h]) => <li key={h}><a href={h}>{n}</a></li>)}</ul>
      <Button href="#craft" arrow={false}>Discover More</Button>
    </motion.nav>
  )
}
