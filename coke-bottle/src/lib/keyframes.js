/** Per-breakpoint layout numbers (world units). sx/sy = side offsets, fh = footer height in vh. */
export const LAYOUTS = {
  m: { sx: 0, sy: 1.5, s: 0.7, my: 1.4, fy: 0.6, gx: -0.35, foot: -0.85, fh: 34 },
  t: { sx: 1.6, sy: 0, s: 0.9, my: 0, fy: 0.3, gx: 0, foot: -1.06, fh: 30 },
  d: { sx: 2.6, sy: 0, s: 1, my: 0, fy: 0.3, gx: 0, foot: -1.06, fh: 30 }
}

/** One keyframe per section: hero, icon, ice, craft, taste, moments, final */
export const keys = (a) =>
  [
    { x: 0, y: 0, rx: 0, ry: 0, rz: 0, sc: 1.45 * a.s, cz: 9, li: 1, red: 0, ice: 0 },
    { x: a.sx, y: a.sy, rx: 0, ry: 5.93, rz: -0.06, sc: 1.3 * a.s, cz: 8.6, li: 1.3, red: 0.35, ice: 0 },
    { x: 0, y: a.sy * 0.3, rx: 0.12, ry: 12.97, rz: 0.35, sc: 1.2 * a.s, cz: 8.2, li: 1.1, red: 0.12, ice: 1 },
    { x: -a.sx, y: a.sy, rx: 0, ry: 18.45, rz: -0.08, sc: 1.3 * a.s, cz: 9.2, li: 1.2, red: 0.55, ice: 0 },
    { x: a.sx, y: a.sy, rx: 0, ry: 25.48, rz: 0.05, sc: 1.3 * a.s, cz: 8.8, li: 1.2, red: 0.7, ice: 0 },
    { x: 0, y: a.my, rx: -0.08, ry: 31.12, rz: -0.2, sc: 1.1 * a.s, cz: 9.4, li: 1.1, red: 0.4, ice: 0 },
    { x: 0, y: a.fy, rx: 0, ry: 37.7, rz: 0, sc: 1.3 * a.s, cz: 8.4, li: 1.8, red: 0.9, ice: 0 }
  ].map((k) => ({ gl: 0, fill: 0, st: 0, pr: 0, ...k }))

/** Can tilted ~115deg with its mouth just above the glass rim */
export const pourPose = (a) => {
  const sc = 0.85 * a.s
  return { x: a.gx + 0.1 + 1.327 * sc, y: a.foot + 1.8 + 0.607 * sc, rx: 0, ry: 37.7, rz: 2, sc, cz: 8.4, li: 1.6, red: 0.9, pr: 1 }
}
