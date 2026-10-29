import useScrollTimeline from '../hooks/useScrollTimeline'
import HeroSection from './HeroSection'
import StorySection from './StorySection'
import IngredientsSection from './IngredientsSection'
import MomentsSection from './MomentsSection'
import FinalCTA from './FinalCTA'

/** All scroll content. 7 sections = the 7 camera/can compositions in lib/keyframes.js */
export default function ScrollExperience({ ready }) {
  useScrollTimeline()
  return (
    <main id="scroll" className="relative z-[2]">
      <HeroSection ready={ready} />
      <StorySection id="icon" kicker="Our story" title="Recognised at a glance.">
        <p>Red body, white script, silver crown. You can pick it out from across the street, and from across the world.</p>
      </StorySection>
      <StorySection id="ice" kicker="Experience" title="Ice cold. Instantly." align="center">
        <p>Frost on the glass, fizz in the first pour, the crack of the tab.</p>
      </StorySection>
      <IngredientsSection />
      <StorySection id="taste" kicker="The taste" title="Three notes. One sip.">
        <dl className="notes">
          <div><dt>Sparkle</dt><dd>Fine bubbles that lift the first sip.</dd></div>
          <div><dt>Caramel</dt><dd>A deep, warm sweetness underneath.</dd></div>
          <div><dt>Chill</dt><dd>Best close to freezing, poured over ice.</dd></div>
        </dl>
      </StorySection>
      <MomentsSection />
      <FinalCTA />
    </main>
  )
}
