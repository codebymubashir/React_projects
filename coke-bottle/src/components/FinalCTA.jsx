import Reveal from './Reveal'
import Button from './Button'

/** Sticky 100vh panel inside a 300vh section: the can pours into the glass while this stays pinned. */
export default function FinalCTA() {
  return (
    <section id="final" aria-label="Open happiness">
      <div className="pin">
        <Reveal as="h2">Open happiness</Reveal>
        <Reveal className="fc">
          <p>Crack it. Pour it. Share it.</p>
          <Button solid external href="https://www.coca-cola.com">Find your Coke</Button>
        </Reveal>
      </div>
    </section>
  )
}
