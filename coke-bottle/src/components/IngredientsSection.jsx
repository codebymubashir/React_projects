import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { reduceMotion } from '../lib/state'
import StorySection from './StorySection'

const chips = [['Carbonated water', 0.6], ['Sugar', 1.1], ['Caramel color', 0.8], ['Natural flavors', 1.4]]

/** Ingredient chips drift slightly at different speeds (subtle layered parallax, never enough to collide). */
export default function IngredientsSection() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (reduceMotion) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.chip').forEach((el) =>
        gsap.to(el, { y: -16 * el.dataset.s, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={ref}>
      <StorySection id="craft" kicker="Ingredients" title="Crafted to be iconic." align="right">
        <p>Bright bubbles over a deep caramel base. Simple things, balanced exactly.</p>
        <div className="chips">{chips.map(([n, s]) => <span key={n} className="chip" data-s={s}>{n}</span>)}</div>
      </StorySection>
    </div>
  )
}