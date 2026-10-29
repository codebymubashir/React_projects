import { useLayoutEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { S, G, reduceMotion as reduce } from '../lib/state'
import { LAYOUTS, keys, pourPose } from '../lib/keyframes'

/**
 * One scrubbed GSAP timeline drives the shared scene state S across the whole page.
 * Timeline units = 100vh of scroll. 0-6: section to section. 6.5-7.7: glass rises, can pours.
 */
export default function useScrollTimeline() {
  useLayoutEffect(() => {
    let lenis, raf
    if (!reduce) {
      lenis = new Lenis()
      lenis.on('scroll', ScrollTrigger.update)
      raf = (t) => lenis.raf(t * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
    }

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const el = document.querySelector(a.getAttribute('href'))
      if (!el) return
      e.preventDefault()
      lenis ? lenis.scrollTo(el) : el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    }
    document.addEventListener('click', onClick)

    const mm = gsap.matchMedia()
    mm.add({ m: '(max-width:767px)', t: '(min-width:768px) and (max-width:1099px)', d: '(min-width:1100px)' }, (ctx) => {
      const { m, t } = ctx.conditions
      const a = m ? LAYOUTS.m : t ? LAYOUTS.t : LAYOUTS.d
      Object.assign(G, { x: a.gx, foot: a.foot })
      const K = keys(a)
      gsap.set(S, K[0])
      gsap.set('#site-footer', { y: 0, yPercent: ((a.fh + 28) / a.fh) * 100 })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: { trigger: '#scroll', start: 'top top', end: 'bottom bottom', scrub: reduce ? true : 0.5, invalidateOnRefresh: true }
      })
      K.slice(1).forEach((k, i) => tl.to(S, { ...k, duration: 1 }, i))
      tl.to(S, { gl: 1, duration: 0.3, ease: 'none' }, 6.5) // glass rises with the footer
        .to('#site-footer', { yPercent: 0, duration: 0.3, ease: 'none' }, 6.5)
        .to(S, { ...pourPose(a), duration: 0.45 }, 6.5) // can swings over the glass
        .to(S, { st: 1, duration: 0.05, ease: 'none' }, 6.95) // stream starts
        .to(S, { fill: 1, duration: 0.7, ease: 'none' }, 7) // glass fills with black liquid
        .to(S, { st: 0, duration: 0.05, ease: 'none' }, 7.65) // stream stops
        .to({}, { duration: 0.3 }, 7.7)
    })

    return () => {
      mm.revert()
      document.removeEventListener('click', onClick)
      if (lenis) { gsap.ticker.remove(raf); lenis.destroy() }
    }
  }, [])
}
