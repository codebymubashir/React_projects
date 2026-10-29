import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { S, G, M, reduceMotion } from '../lib/state'
import { GLASS_H, FLOOR, innerR } from '../lib/glass'
import { makeSprite, makeFrost } from './textures'

const rnd = (a = 1) => (Math.random() - 0.5) * a
const small = () => window.innerWidth < 768

function buffer(n, fill) {
  const a = new Float32Array(n * 3)
  for (let i = 0; i < n; i++) a.set(fill(i), i * 3)
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(a, 3))
  return { a, g }
}

/** Rising bubbles across the whole page */
function Bubbles() {
  const N = small() ? 70 : 140
  const o = useMemo(() => ({ ...buffer(N, () => [rnd(14), rnd(10), -3 + Math.random() * 5]), sp: Array.from({ length: N }, () => 0.25 + Math.random() * 0.6), tex: makeSprite('bubble') }), [N])
  useFrame(({ clock }, delta) => {
    if (reduceMotion) return
    const dt = Math.min(delta, 0.05), t = clock.elapsedTime
    for (let i = 0; i < N; i++) {
      const j = i * 3
      o.a[j + 1] += o.sp[i] * dt
      o.a[j] += Math.sin(t * 0.8 + i) * 0.003
      if (o.a[j + 1] > 5.5) o.a[j + 1] = -5.5
    }
    o.g.attributes.position.needsUpdate = true
  })
  return <points geometry={o.g} frustumCulled={false}><pointsMaterial map={o.tex} size={0.12} transparent opacity={0.55} depthWrite={false} blending={THREE.AdditiveBlending} /></points>
}

/** Large soft out-of-focus discs far behind the product */
function Bokeh() {
  const o = useMemo(() => ({ ...buffer(small() ? 10 : 22, () => [rnd(16), rnd(9), -4 - Math.random() * 4]), tex: makeSprite('bokeh') }), [])
  const ref = useRef()
  useFrame(({ clock }) => { ref.current.position.y = Math.sin(clock.elapsedTime * 0.15) * 0.4 })
  return <points ref={ref} geometry={o.g} frustumCulled={false}><pointsMaterial map={o.tex} color="#ff5a4a" size={1.4} transparent opacity={0.1} depthWrite={false} blending={THREE.AdditiveBlending} /></points>
}

/** Splash droplets in the ice scene, fizz foam at the liquid surface while pouring */
function Foam() {
  const N = small() ? 36 : 64
  const ref = useRef()
  const o = useMemo(() => ({ ...buffer(N, () => [0, -20, 0]), v: Array.from({ length: N }, () => [0, 0, 0]), tex: makeSprite('bubble') }), [N])
  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05), pouring = S.st > 0.3, on = S.ice > 0.02 || pouring
    ref.current.visible = on
    ref.current.material.opacity = 0.7 * Math.max(S.ice, pouring ? S.st : 0)
    if (!on || reduceMotion) return
    for (let i = 0; i < N; i++) {
      const j = i * 3, v = o.v[i]
      if (o.a[j + 1] < (pouring ? G.surfY - 0.05 : S.y - 2.4) || o.a[j + 1] < -9) {
        if (pouring) { o.a[j] = M.x + rnd(0.25); o.a[j + 1] = G.surfY; o.a[j + 2] = rnd(0.3); v[0] = rnd(1.1); v[1] = 0.8 + Math.random() * 1.4; v[2] = Math.random() * 0.5 - 0.2 }
        else { o.a[j] = S.x + rnd(0.5); o.a[j + 1] = S.y + 0.1; o.a[j + 2] = rnd(0.5); v[0] = rnd(2.6); v[1] = 2.4 + Math.random() * 3; v[2] = Math.random() * 1.2 - 0.3 }
      }
      v[1] -= 6 * dt
      o.a[j] += v[0] * dt; o.a[j + 1] += v[1] * dt; o.a[j + 2] += v[2] * dt
    }
    o.g.attributes.position.needsUpdate = true
  })
  return <points ref={ref} geometry={o.g} frustumCulled={false} visible={false}><pointsMaterial map={o.tex} size={0.07} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></points>
}

/** Ice cubes orbiting the can in scene 3: rounded, irregular, refractive, with frosty clouding */
function Ice() {
  const refs = useRef([])
  const o = useMemo(() => {
    const frost = makeFrost()
    return {
      mat: new THREE.MeshPhysicalMaterial({
        color: '#e6f6ff', transmission: 1, thickness: 1.1, ior: 1.31, roughness: 0.4, roughnessMap: frost, bumpMap: frost, bumpScale: 0.5,
        attenuationColor: new THREE.Color('#a9dcff'), attenuationDistance: 2.2, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 3
      }),
      d: Array.from({ length: 8 }, () => ({ r: 1.3 + Math.random(), s: 0.25 + Math.random() * 0.4, p: Math.random() * 6.28, y: rnd(2.4), z: 0.4 + Math.random() * 0.5, b: [0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4] }))
    }
  }, [])
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    refs.current.forEach((m, i) => {
      const u = o.d[i], a = u.p + t * u.s
      m.visible = S.ice > 0.01
      m.position.set(S.x + Math.cos(a) * u.r, S.y + u.y + Math.sin(t * 0.7 + u.p) * 0.15, Math.sin(a) * u.z + 0.3)
      m.rotation.set(t * u.s, t * 0.4, u.p)
      m.scale.set(u.b[0] * S.ice, u.b[1] * S.ice, u.b[2] * S.ice) // cubes grow in and out with the scene
    })
  })
  return <group>{o.d.map((_, i) => <RoundedBox key={i} ref={(el) => (refs.current[i] = el)} args={[0.4, 0.4, 0.4]} radius={0.07} smoothness={4} material={o.mat} visible={false} />)}</group>
}

/** Fizz in the glass: many tiny-to-medium bubbles with glassy highlights. They rise through the drink while it fills; once full they escape over the rim and fade out */
function Fizz() {
  const N = small() ? 110 : 240
  const ref = useRef()
  const o = useMemo(() => {
    const b = buffer(N, () => [0, -20, 0])
    const col = new Float32Array(N * 3), sz = new Float32Array(N)
    b.g.setAttribute('color', new THREE.BufferAttribute(col, 3))
    b.g.setAttribute('aSize', new THREE.BufferAttribute(sz, 1))
    const reset = (s, i) => {
      s.th = Math.random() * 6.283; s.rf = Math.sqrt(Math.random()) * 0.96
      s.k = 0.35 + Math.pow(Math.random(), 2.2) * 1.1 // many tiny bubbles, a few big ones
      s.v = 0.2 + s.k * 0.45; s.ph = Math.random() * 6.283; s.h = 0; sz[i] = s.k
    }
    const st = Array.from({ length: N }, (_, i) => { const s = {}; reset(s, i); s.h = Math.random(); return s })
    const mat = new THREE.PointsMaterial({ map: makeSprite('real'), size: 0.1, vertexColors: true, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending })
    // per-bubble size: scale gl_PointSize by the aSize attribute
    mat.onBeforeCompile = (sh) => { sh.vertexShader = 'attribute float aSize;\n' + sh.vertexShader.replace('gl_PointSize = size;', 'gl_PointSize = size * aSize;') }
    return { ...b, col, st, reset, mat }
  }, [N])
  useFrame(({ clock }, delta) => {
    const dt = Math.min(delta, 0.05), t = clock.elapsedTime
    const show = S.gl > 0.05 && S.fill > 0.02
    ref.current.visible = show
    if (!show) return
    const base = G.start + (G.foot - G.start) * S.gl, bottom = base + FLOOR, rimH = GLASS_H - FLOOR
    const hs = G.surfY - bottom // liquid height now
    const filled = S.fill > 0.98
    const active = Math.ceil(N * Math.min(1, S.fill * 1.4)) // more bubbles as the glass fills
    for (let i = 0; i < N; i++) {
      const s = o.st[i], j = i * 3
      if (i >= active) { o.col[j] = o.col[j + 1] = o.col[j + 2] = 0; continue }
      if (!reduceMotion) s.h += s.v * dt
      let fade = 1
      if (s.h > hs) {
        if (!filled || s.h > hs + 1.3) o.reset(s, i) // not full yet: bubble pops at the surface. Full: it has escaped far enough.
        else fade = 1 - (s.h - hs) / 1.3 // above the liquid: rises out of the glass and fades
      }
      const R = innerR(Math.min(FLOOR + s.h, GLASS_H)) * s.rf
      const out = Math.max(0, s.h - rimH) * 0.18 * Math.sin(s.ph)
      o.a[j] = G.x + Math.sin(s.th) * R + Math.sin(t * 2 + s.ph) * 0.015 * s.k + out
      o.a[j + 1] = bottom + s.h
      o.a[j + 2] = Math.cos(s.th) * R
      o.col[j] = o.col[j + 1] = o.col[j + 2] = fade * (0.55 + 0.3 * s.k) // bigger bubbles read brighter
    }
    o.g.attributes.position.needsUpdate = true
    o.g.attributes.color.needsUpdate = true
    o.g.attributes.aSize.needsUpdate = true
  })
  return <points ref={ref} geometry={o.g} frustumCulled={false} visible={false} renderOrder={6}><primitive object={o.mat} attach="material" /></points>
}

export default function Particles() {
  return <><Bubbles /><Bokeh /><Foam /><Ice /><Fizz /></>
}