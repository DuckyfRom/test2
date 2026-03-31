import {
  GRID_COLOR,
  GRID_OPACITY,
  GRID_SPREAD,
  GRID_LINE_WIDTH,
  BLOB_FREQUENCY,
  BLOB_DEFINITIONS,
} from '../config/backgroundConfig'

const ANIM_NAMES = ['blob-a', 'blob-b', 'blob-c']

export default function Background() {
  const activeBlobs = BLOB_DEFINITIONS.slice(0, BLOB_FREQUENCY)

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right,  rgba(${GRID_COLOR}, ${GRID_OPACITY}) ${GRID_LINE_WIDTH}px, transparent ${GRID_LINE_WIDTH}px),
            linear-gradient(to bottom, rgba(${GRID_COLOR}, ${GRID_OPACITY}) ${GRID_LINE_WIDTH}px, transparent ${GRID_LINE_WIDTH}px)
          `,
          backgroundSize: `${GRID_SPREAD}px ${GRID_SPREAD}px`,
        }}
      />

      {/* Blobs */}
      {activeBlobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width:      b.SIZE,
            height:     b.SIZE,
            ...b.POSITION,
            background: b.COLOR,
            filter:     `blur(${b.BLUR}px)`,
            opacity:    b.OPACITY,
            animation:  `${ANIM_NAMES[i % ANIM_NAMES.length]} ${b.DURATION}s ease infinite ${b.DELAY}s`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}
