// ─── GRID PATTERN ────────────────────────────────────────────────────────────

export const GRID_COLOR = "200, 196, 184"; // RGB — base line color
export const GRID_OPACITY = 0.02; // 0–1 — line transparency
export const GRID_SPREAD = 96; // px  — cell size (gap between lines)
export const GRID_LINE_WIDTH = 1; // px  — line thickness

// ─── BLOBS ────────────────────────────────────────────────────────────────────

// How many blobs to render. Set to 0 to disable all blobs.
// Must not exceed the number of entries in BLOB_DEFINITIONS below.
export const BLOB_FREQUENCY = 3;

export const BLOB_DEFINITIONS = [
  {
    COLOR: "#0d9488", // teal
    SIZE: 700, // px  — diameter of the blob circle
    BLUR: 140, // px  — blur radius (higher = more diffuse)
    OPACITY: 0.055, // 0–1 — how visible the blob is
    DURATION: 40, // s   — one full animation cycle
    DELAY: 0, // s   — delay before animation starts
    POSITION: { top: "-15%", left: "-10%" },
  },
  {
    COLOR: "#6d28d9", // violet
    SIZE: 600,
    BLUR: 150,
    OPACITY: 0.045,
    DURATION: 48,
    DELAY: 6,
    POSITION: { top: "-5%", right: "-12%" },
  },
  {
    COLOR: "#1d4ed8", // indigo
    SIZE: 650,
    BLUR: 140,
    OPACITY: 0.05,
    DURATION: 52,
    DELAY: 3,
    POSITION: { bottom: "-12%", left: "5%" },
  },
];
