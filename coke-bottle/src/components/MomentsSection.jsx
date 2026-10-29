import Reveal from './Reveal'

const items = [['l', 'Movie night', 'Crack one open, press play.'], ['r', 'Long drives', 'Cold in the cup holder, windows down.'], ['b', 'Family tables', 'The one thing everyone reaches for.']]

export default function MomentsSection() {
  return (
    <section className="sec" id="moments">
      <div className="moments">
        <Reveal as="h2">Made for sharing.</Reveal>
        {items.map(([c, h, p]) => (
          <Reveal key={h} className={`m ${c}`}><h3>{h}</h3><p>{p}</p></Reveal>
        ))}
      </div>
    </section>
  )
}
