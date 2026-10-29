import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div className="loader" role="status" aria-label="Loading" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <div className="logo">Coca-Cola</div>
      <div className="bar"><motion.i initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, ease: 'easeInOut' }} /></div>
    </motion.div>
  )
}
