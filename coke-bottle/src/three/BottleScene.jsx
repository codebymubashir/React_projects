import { Component, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'
import { S } from '../lib/state'
import Can from './Can'
import Tumbler from './Tumbler'
import Particles from './Particles'

/** Studio reflections generated on the fly (no HDR file needed): softboxes, strips, red kicker, warm floor bounce */
function Studio() {
  const L = [
    [[1.5, 16], [-9, 0, 2], '#ffffff', 4], [[1.5, 16], [9, 0, -2], '#ffffff', 3], [[16, 3], [0, 10, 0], '#ffffff', 2.5],
    [[10, 10], [0, 1, 10], '#fff2e0', 0.5], [[5, 12], [7, -1, -8], '#e41e2b', 2.5], [[12, 2], [0, 0, -11], '#ffd9b0', 1.5],
    [[18, 2], [0, -7, 0], '#ff5a4a', 0.8], [[0.6, 14], [-4, 0, 7], '#ffffff', 3], [[0.6, 14], [4, 0, 7], '#ffffff', 2]
  ]
  return (
    <Environment resolution={256} frames={1}>
      <mesh scale={50}><sphereGeometry args={[1, 32, 16]} /><meshBasicMaterial color="#0c0c0e" side={THREE.BackSide} /></mesh>
      {L.map(([s, p, c, k], i) => <Lightformer key={i} form="rect" intensity={k} color={c} scale={[s[0], s[1], 1]} position={p} target={[0, 0, 0]} />)}
    </Environment>
  )
}

/** Camera dolly + pointer parallax, and feeds the CSS background glow */
function Rig() {
  const bg = useRef(), sm = useRef({ x: 0, y: 0 })
  useEffect(() => { bg.current = document.getElementById('bg') }, [])
  useFrame(({ camera, pointer }) => {
    sm.current.x += (pointer.x * 0.5 - sm.current.x) * 0.05
    sm.current.y += (pointer.y * 0.5 - sm.current.y) * 0.05
    camera.position.set(sm.current.x * 0.7, sm.current.y * 0.5, S.cz)
    camera.lookAt(0, 0, 0)
    bg.current?.style.setProperty('--r', S.red.toFixed(3))
    bg.current?.style.setProperty('--x', (S.x * 6).toFixed(2))
  })
  return null
}

/** Scroll-linked lighting: warm key, cool rim, and a red light that sweeps across the glass as the can turns */
function Lights() {
  const key = useRef(), rim = useRef(), red = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    key.current.intensity = 1.6 * S.li
    key.current.position.x = 3 + Math.sin(t * 0.4) * 2
    rim.current.intensity = 1.2 * S.li
    red.current.position.x = Math.sin(S.ry * 0.5 + t * 0.3) * 5
    red.current.intensity = (1.5 + S.red * 7) * 6
  })
  return (
    <>
      <directionalLight ref={key} color="#ffe9cf" position={[3, 4, 5]} />
      <directionalLight ref={rim} color="#cfe0ff" position={[-4, 2, -3]} />
      <pointLight ref={red} color="#e41e2b" position={[0, 1, 3.5]} distance={22} decay={1} />
      <ambientLight intensity={0.15} />
    </>
  )
}

class Boundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onFail() }
  render() { return this.state.failed ? null : this.props.children }
}

export default function BottleScene({ onReady, onFail }) {
  return (
    <Boundary onFail={onFail}>
      <Canvas
        aria-hidden="true"
        dpr={[1, window.innerWidth < 768 ? 1.5 : 2]}
        camera={{ fov: 35, near: 0.1, far: 60, position: [0, 0, 9] }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ position: 'fixed', inset: 0, zIndex: 3, pointerEvents: 'none' }}
        onCreated={({ gl }) => {
          gl.localClippingEnabled = true // needed for the liquid fill level
          gl.toneMappingExposure = 0.95
          gl.domElement.addEventListener('webglcontextlost', (e) => { e.preventDefault(); onFail() })
          onReady()
        }}
      >
        <Studio /><Rig /><Lights /><Can /><Tumbler /><Particles />
      </Canvas>
    </Boundary>
  )
}
