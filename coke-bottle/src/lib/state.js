import { Vector3 } from 'three'

export const reduceMotion = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** Scroll-driven scene state. GSAP tweens it, R3F components read it every frame. */
export const S = { x: 0, y: 0, rx: 0, ry: 0, rz: 0, sc: 1.45, cz: 9, li: 1, red: 0, ice: 0, gl: 0, fill: 0, st: 0, pr: 0 }
/** Glass anchor in world units (set per breakpoint). surfY = current liquid surface. */
export const G = { x: 0, foot: -1.06, start: -4.13, surfY: -4 }
/** Intro progress (0 -> 1) */
export const I = { k: reduceMotion ? 1 : 0 }
/** Can mouth in world space, written by Can, read by Tumbler and Particles */
export const M = new Vector3()
