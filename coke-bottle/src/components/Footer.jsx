import Button from './Button'

/** Fixed footer. The scroll timeline slides it up while the 3D glass rises with it. */
export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="f-brand"><a className="logo" href="#home">Coca-Cola</a><p>Concept preview. Not an official Coca-Cola product.</p></div>
      <div className="f-links">
        {[['Home', '#home'], ['Our Story', '#icon'], ['Experience', '#ice'], ['Ingredients', '#craft'], ['Moments', '#moments']].map(([n, h]) => <a key={h} href={h}>{n}</a>)}
      </div>
      <Button href="#home" arrow={false}>Back to top</Button>
    </footer>
  )
}
