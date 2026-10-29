import * as THREE from 'three'

const canvas = (w, h) => Object.assign(document.createElement('canvas'), { width: w, height: h })

/** Wrapped can label: deep red paint, large tilted script wordmark, white wave ribbon. Redrawn once fonts load. */
export function makeLabel() {
  const c = canvas(2048, 1400), x = c.getContext('2d'), tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.offset.x = 0.5 // seam at the back, logo at the front
  tex.anisotropy = 8
  const draw = () => {
    const g = x.createLinearGradient(0, 0, 2048, 0)
    ;[[0, '#4f050c'], [0.22, '#9a0a1a'], [0.4, '#cc111f'], [0.5, '#d9182a'], [0.6, '#cc111f'], [0.78, '#9a0a1a'], [1, '#4f050c']].forEach(([o, k]) => g.addColorStop(o, k))
    x.fillStyle = g; x.fillRect(0, 0, 2048, 1400)
    // white wave ribbon down the right side
    x.fillStyle = '#f2f2f2'; x.beginPath(); x.moveTo(1375, 0)
    x.bezierCurveTo(1330, 380, 1285, 900, 1325, 1400); x.lineTo(1395, 1400); x.bezierCurveTo(1355, 900, 1400, 380, 1450, 0); x.closePath(); x.fill()
    // wordmark: large, bold, tilted up the can
    x.save(); x.translate(1000, 700); x.rotate(-1.36)
    x.fillStyle = '#fff'; x.strokeStyle = '#fff'; x.lineJoin = 'round'; x.textAlign = 'center'; x.textBaseline = 'middle'
    x.font = '300px Yellowtail, "Brush Script MT", cursive'
    const w = x.measureText('Coca-Cola').width
    x.font = `${Math.floor((300 * 1250) / w)}px Yellowtail, "Brush Script MT", cursive`
    x.lineWidth = 7; x.strokeText('Coca-Cola', 0, 0); x.fillText('Coca-Cola', 0, 0)
    x.font = '700 34px Inter, Arial, sans-serif'; x.lineWidth = 0; x.fillText('Trademark Regd.', 215, 70)
    x.restore()
    tex.needsUpdate = true
  }
  draw()
  document.fonts?.load('300px Yellowtail').then(() => document.fonts.load('700 34px Inter')).then(draw).catch(() => {})
  return tex
}

/** Fine orange-peel bump for the painted aluminium */
export function makeBump() {
  const c = canvas(512, 512), x = c.getContext('2d')
  x.fillStyle = '#808080'; x.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 9000; i++) { const v = (110 + Math.random() * 36) | 0; x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(Math.random() * 512, Math.random() * 512, 2, 2) }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 3)
  return t
}

/** Condensation droplets used as an alpha map */
export function makeCondensation() {
  const c = canvas(512, 512), x = c.getContext('2d')
  x.fillStyle = '#000'; x.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 260; i++) { x.fillStyle = `rgba(255,255,255,${0.35 + Math.random() * 0.65})`; x.beginPath(); x.arc(Math.random() * 512, Math.random() * 512, 0.6 + Math.random() * 1.8, 0, 6.283); x.fill() }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 2)
  return t
}

/** Sprites for points: 'bubble' (simple ring), 'bokeh' (soft disc), 'real' (glassy bubble with highlight, rim light and bounce light) */
export function makeSprite(kind) {
  const c = canvas(128, 128), x = c.getContext('2d')
  if (kind === 'bokeh') {
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 64)
    g.addColorStop(0, 'rgba(255,255,255,.5)'); g.addColorStop(0.8, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(255,255,255,0)')
    x.fillStyle = g; x.fillRect(0, 0, 128, 128)
  } else if (kind === 'real') {
    const g = x.createRadialGradient(64, 64, 6, 64, 64, 58)
    g.addColorStop(0, 'rgba(255,255,255,.03)'); g.addColorStop(0.75, 'rgba(255,255,255,.1)'); g.addColorStop(1, 'rgba(255,255,255,.45)')
    x.fillStyle = g; x.beginPath(); x.arc(64, 64, 58, 0, 6.283); x.fill()
    x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 3; x.beginPath(); x.arc(64, 64, 57, 0, 6.283); x.stroke()
    x.fillStyle = 'rgba(255,255,255,.95)'; x.beginPath(); x.ellipse(44, 42, 12, 8, -0.7, 0, 6.283); x.fill() // specular highlight
    x.strokeStyle = 'rgba(255,230,200,.7)'; x.lineWidth = 5; x.beginPath(); x.arc(64, 64, 44, 0.3, 1.2); x.stroke() // bounce light
  } else {
    x.fillStyle = 'rgba(255,255,255,.12)'; x.beginPath(); x.arc(64, 64, 56, 0, 6.283); x.fill()
    x.strokeStyle = 'rgba(255,255,255,.85)'; x.lineWidth = 6; x.stroke()
  }
  return new THREE.CanvasTexture(c)
}

/** Frosted-ice map: mostly clear (dark) with cloudy white patches. Used as roughness + bump. */
export function makeFrost() {
  const c = canvas(256, 256), x = c.getContext('2d')
  x.fillStyle = '#1c1c1c'; x.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 70; i++) {
    const px = Math.random() * 256, py = Math.random() * 256, r = 18 + Math.random() * 46
    const g = x.createRadialGradient(px, py, 0, px, py, r)
    g.addColorStop(0, `rgba(255,255,255,${0.25 + Math.random() * 0.4})`); g.addColorStop(1, 'rgba(255,255,255,0)')
    x.fillStyle = g; x.fillRect(px - r, py - r, r * 2, r * 2)
  }
  for (let i = 0; i < 40; i++) { x.strokeStyle = `rgba(255,255,255,${Math.random() * 0.25})`; x.lineWidth = 0.6; x.beginPath(); const sx = Math.random() * 256, sy = Math.random() * 256; x.moveTo(sx, sy); x.lineTo(sx + (Math.random() - 0.5) * 90, sy + (Math.random() - 0.5) * 90); x.stroke() }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping
  return t
}

/** White script printed on the front of the glass (transparent background) */
export function makeGlassPrint() {
  const c = canvas(1024, 384), x = c.getContext('2d'), tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  const draw = () => {
    x.clearRect(0, 0, 1024, 384)
    x.fillStyle = '#fff'; x.strokeStyle = '#fff'; x.lineJoin = 'round'; x.textAlign = 'center'; x.textBaseline = 'middle'
    x.font = '200px Yellowtail, "Brush Script MT", cursive'
    const w = x.measureText('Coca-Cola').width
    x.font = `${Math.floor((200 * 940) / w)}px Yellowtail, "Brush Script MT", cursive`
    x.globalAlpha = 0.95; x.lineWidth = 4
    x.strokeText('Coca-Cola', 512, 192); x.fillText('Coca-Cola', 512, 192)
    tex.needsUpdate = true
  }
  draw()
  document.fonts?.load('200px Yellowtail').then(draw).catch(() => {})
  return tex
}