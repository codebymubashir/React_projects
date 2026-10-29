import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { gsap } from './lib/gsap'
import { I, reduceMotion } from './lib/state'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollExperience from './components/ScrollExperience'
import Footer from './components/Footer'

// The 3D layer is code-split so the page shell and loader appear immediately.
const BottleScene = lazy(() => import('./three/BottleScene'))

export default function App() {
  const [sceneOk, setSceneOk] = useState(false)
  const [failed, setFailed] = useState(false)
  const [minTime, setMinTime] = useState(false)
  const ready = minTime && (sceneOk || failed)

  useEffect(() => {
    const id = setTimeout(() => setMinTime(true), 1100)
    return () => clearTimeout(id)
  }, [])
  useEffect(() => {
    if (ready && !reduceMotion) gsap.to(I, { k: 1, duration: 2.2, ease: 'power3.out' })
  }, [ready])

  return (
    <>
      <AnimatePresence>{!ready && <LoadingScreen key="loader" />}</AnimatePresence>
      <div id="bg" aria-hidden="true"><div className="beam" /><div className="beam" /></div>
      <Suspense fallback={null}>
        <BottleScene onReady={() => setSceneOk(true)} onFail={() => setFailed(true)} />
      </Suspense>
      {failed && <p id="fallback">3D view is unavailable in this browser. The layout and content still work.</p>}
      <Navbar />
      <ScrollExperience ready={ready} />
      <Footer />
    </>
  )
}
