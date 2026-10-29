import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { S, I, M, reduceMotion } from '../lib/state'
import { makeLabel, makeBump, makeCondensation } from './textures'

const spline = (pts, n) => new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(n)

/**
 * The single can instance used across every scroll scene.
 * rig = position / scale / tilt (GSAP-driven), spin = rotation around the can's own axis.
 */
export default function Can() {
  const rig = useRef(), spin = useRef(), idle = useRef(0)

  const o = useMemo(() => {
    const top = new THREE.LatheGeometry(spline([[0.582, 1.2], [0.577, 1.25], [0.55, 1.31], [0.5, 1.365], [0.472, 1.4], [0.468, 1.43], [0.485, 1.45], [0.5, 1.465], [0.495, 1.482], [0.475, 1.485], [0.458, 1.468], [0.452, 1.44], [0.42, 1.418], [0.3, 1.41], [0, 1.41]], 90), 96)
    const bottom = new THREE.LatheGeometry(spline([[0, -1.3], [0.22, -1.318], [0.38, -1.36], [0.45, -1.42], [0.49, -1.452], [0.53, -1.44], [0.565, -1.37], [0.582, -1.28]], 50), 96)
    const s = new THREE.Shape()
    s.moveTo(-0.2, -0.1); s.lineTo(0.12, -0.1); s.absarc(0.12, 0, 0.1, -Math.PI / 2, Math.PI / 2, false); s.lineTo(-0.2, 0.1); s.absarc(-0.2, 0, 0.1, Math.PI / 2, (3 * Math.PI) / 2, false)
    const hole = new THREE.Path(); hole.absellipse(0.12, 0, 0.06, 0.045, 0, Math.PI * 2); s.holes.push(hole)
    const tab = new THREE.ExtrudeGeometry(s, { depth: 0.015, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 3, curveSegments: 16 })
    const alu = new THREE.MeshPhysicalMaterial({ color: '#dfe3e6', metalness: 1, roughness: 0.22, clearcoat: 0.3, envMapIntensity: 1.4, side: THREE.DoubleSide })
    return { top, bottom, tab, alu, label: makeLabel(), bump: makeBump(), cond: makeCondensation() }
  }, [])

  useFrame(({ clock }, delta) => {
    const dt = Math.min(delta, 0.05), t = clock.elapsedTime, k = I.k, r = rig.current
    idle.current += dt * 0.18
    r.position.set(S.x, S.y + (reduceMotion ? 0 : Math.sin(t * 1.1) * 0.05) - (1 - k) * 2.2, 0)
    r.scale.setScalar(S.sc * (0.7 + 0.3 * k))
    r.rotation.set(S.rx, 0, S.rz)
    spin.current.rotation.y = S.ry + (1 - k) * -3 + (reduceMotion ? 0 : Math.sin(idle.current * 2.2) * 0.16 * (1 - S.pr)) // small sway, logo stays readable
    r.updateMatrixWorld(true)
    M.set(0, 1.46, 0); r.localToWorld(M) // can mouth, world space
  })

  return (
    <group ref={rig}>
      <group ref={spin}>
        {/* painted body: glossy clear coat over a fine orange-peel bump */}
        <mesh position-y={-0.05}>
          <cylinderGeometry args={[0.582, 0.582, 2.5, 128, 1, true]} />
          <meshPhysicalMaterial map={o.label} metalness={0.25} roughness={0.34} clearcoat={1} clearcoatRoughness={0.04} bumpMap={o.bump} bumpScale={0.2} envMapIntensity={0.95} />
        </mesh>
        <mesh geometry={o.top} material={o.alu} />
        <mesh geometry={o.bottom} material={o.alu} />
        <mesh geometry={o.tab} material={o.alu} rotation-x={-Math.PI / 2} position={[-0.02, 1.432, 0]} />
        <mesh material={o.alu} position={[-0.02, 1.44, 0]}><cylinderGeometry args={[0.045, 0.05, 0.03, 24]} /></mesh>
        <mesh rotation-x={-Math.PI / 2} scale={[1.3, 0.55, 1]} position={[0.15, 1.412, 0]}><circleGeometry args={[0.1, 32]} /><meshBasicMaterial color="#1c1c1c" /></mesh>
        {/* condensation */}
        <mesh position-y={-0.05} renderOrder={4}>
          <cylinderGeometry args={[0.59, 0.59, 2.5, 64, 1, true]} />
          <meshPhysicalMaterial color="#ffffff" alphaMap={o.cond} transparent opacity={0.16} roughness={0.05} envMapIntensity={1} depthWrite={false} />
        </mesh>
      </group>
    </group>
  )
}
