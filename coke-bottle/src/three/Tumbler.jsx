import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { S, G, M } from '../lib/state'
import { GLASS_H, FLOOR, INNER, innerR } from '../lib/glass'
import { makeGlassPrint } from './textures'

const smooth = (pts, n) => new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(n)
const OUTER = [[0, 0], [0.3, 0], [0.355, 0.025], [0.375, 0.06], [0.38, 0.14], [0.385, 0.3], [0.41, 0.5], [0.46, 0.75], [0.5, 1.0], [0.52, 1.2], [0.525, 1.3]]

/** Contour glass: wide rim, narrow waist, flared thick green-tinted base, fluted lower half */
function buildGlass() {
  const inner = smooth([...INNER].reverse().concat([[0, FLOOR]]), 40)
  const g = new THREE.LatheGeometry([...smooth(OUTER, 48), ...inner], 128)
  const p = g.attributes.position, col = new Float32Array(p.count * 3)
  const green = new THREE.Color('#79d6a8'), clear = new THREE.Color('#eef8ff'), c = new THREE.Color()
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i)
    const k = Math.pow(Math.max(0, 1 - y / 0.8), 1.5) // vertical flutes, fading out toward the rim
    const f = 1 + 0.013 * Math.cos(Math.atan2(z, x) * 12) * k
    p.setXYZ(i, x * f, y, z * f)
    c.copy(green).lerp(clear, THREE.MathUtils.smoothstep(y, 0.1, 0.3)) // green glass at the bottom
    col.set([c.r, c.g, c.b], i * 3)
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3))
  g.computeVertexNormals()
  return g
}

/**
 * Footer glass. Rises with the footer, the drink is clipped by a plane at the fill level,
 * and a thin stream runs from the can mouth (M) down to the liquid surface.
 */
export default function Tumbler() {
  const group = useRef(), surf = useRef(), stream = useRef()
  const o = useMemo(() => ({
    clip: new THREE.Plane(new THREE.Vector3(0, -1, 0), 0),
    glass: buildGlass(),
    liquid: new THREE.LatheGeometry([[0, FLOOR], ...INNER.map(([r, y]) => [r * 0.975, y]), [0, GLASS_H]].map(([r, y]) => new THREE.Vector2(r, y)), 96),
    print: makeGlassPrint()
  }), [])

  useFrame(() => {
    const base = G.start + (G.foot - G.start) * S.gl
    group.current.position.set(G.x, base, 0)
    group.current.visible = S.gl > 0.001
    const surfY = base + FLOOR + S.fill
    G.surfY = surfY
    o.clip.constant = surfY
    surf.current.visible = S.fill > 0.004
    surf.current.position.set(G.x, surfY, 0)
    const lr = 0.975 * innerR(surfY - base)
    surf.current.scale.set(lr, lr, 1)
    const len = Math.max(M.y - surfY, 0) * S.st
    stream.current.visible = S.st > 0.01
    stream.current.scale.set(1, Math.max(len, 0.001), 1)
    stream.current.position.set(M.x, M.y - len / 2, 0)
  })

  const drink = { color: '#1b0804', emissive: '#1a0803', roughness: 0.08, clearcoat: 1, envMapIntensity: 1.5, side: THREE.DoubleSide }
  const glassProps = { color: '#ffffff', transmission: 1, thickness: 0.45, ior: 1.5, roughness: 0.03, clearcoat: 1, envMapIntensity: 3, side: THREE.DoubleSide }
  return (
    <>
      <group ref={group} visible={false}>
        <mesh geometry={o.liquid}><meshPhysicalMaterial {...drink} clippingPlanes={[o.clip]} /></mesh>
        <mesh geometry={o.glass} renderOrder={5}><meshPhysicalMaterial {...glassProps} vertexColors /></mesh>
        <mesh rotation-x={Math.PI / 2} position-y={GLASS_H}><torusGeometry args={[0.516, 0.012, 12, 96]} /><meshPhysicalMaterial {...glassProps} /></mesh>
        {/* white script printed on the glass */}
        <mesh position-y={0.95} renderOrder={7}>
          <cylinderGeometry args={[0.522, 0.492, 0.34, 48, 1, true, -0.9, 1.8]} />
          <meshBasicMaterial map={o.print} transparent depthWrite={false} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
      </group>
      <mesh ref={surf} rotation-x={-Math.PI / 2} visible={false}><circleGeometry args={[1, 48]} /><meshPhysicalMaterial {...drink} /></mesh>
      <mesh ref={stream} visible={false}><cylinderGeometry args={[0.04, 0.04, 1, 12]} /><meshPhysicalMaterial {...drink} /></mesh>
    </>
  )
}