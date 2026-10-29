/** Shared shape of the contour glass (local units, y = 0 at the base). */
export const GLASS_H = 1.3 // rim height
export const FLOOR = 0.17 // top of the thick base = inside floor

/** Inner wall profile [radius, y], floor to rim */
export const INNER = [[0.34, 0.17], [0.358, 0.2], [0.366, 0.3], [0.392, 0.5], [0.442, 0.75], [0.482, 1.0], [0.502, 1.2], [0.507, 1.3]]

/** Inside radius of the glass at height y */
export const innerR = (y) => {
  if (y <= INNER[0][1]) return INNER[0][0]
  for (let i = 1; i < INNER.length; i++) {
    if (y <= INNER[i][1]) {
      const [r0, y0] = INNER[i - 1], [r1, y1] = INNER[i]
      return r0 + ((r1 - r0) * (y - y0)) / (y1 - y0)
    }
  }
  return INNER[INNER.length - 1][0]
}