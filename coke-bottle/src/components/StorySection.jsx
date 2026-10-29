import Reveal from './Reveal'

/** Generic text scene. align: 'left' | 'right' | 'center' */
export default function StorySection({ id, kicker, title, align = 'left', children }) {
  const cls = align === 'right' ? 'r' : align === 'center' ? 'c' : ''
  return (
    <section className={`sec ${cls}`} id={id}>
      <div className="txt">
        <Reveal as="p" className="kicker">{kicker}</Reveal>
        <Reveal as="h2">{title}</Reveal>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  )
}
