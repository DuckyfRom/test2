export default function Logo({ size = 32 }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="7"
          width="32"
          height="8"
          rx="2"
          fill="#1a2e20"
          stroke="#2ec97a"
          strokeWidth="1.2"
        />
        <rect
          x="2"
          y="21"
          width="32"
          height="8"
          rx="2"
          fill="#1a2e20"
          stroke="#2ec97a"
          strokeWidth="1.2"
        />
        <rect x="6" y="10" width="5" height="2.5" rx="1" fill="#2ec97a" />
        <rect
          x="13"
          y="10"
          width="5"
          height="2.5"
          rx="1"
          fill="#2ec97a"
          opacity="0.45"
        />
        <rect x="20" y="10" width="8" height="2.5" rx="1" fill="#1e3228" />
        <rect x="6" y="24" width="5" height="2.5" rx="1" fill="#2ec97a" />
        <rect
          x="13"
          y="24"
          width="5"
          height="2.5"
          rx="1"
          fill="#2ec97a"
          opacity="0.45"
        />
        <rect x="20" y="24" width="8" height="2.5" rx="1" fill="#1e3228" />
        <circle cx="30" cy="11.2" r="1.8" fill="#2ec97a" />
        <circle cx="30" cy="25.2" r="1.8" fill="#c8a050" />
      </svg>
      <span className="font-head font-bold text-lg text-cream tracking-tight">
        Byte<span className="text-green">Rack</span>
      </span>
    </div>
  );
}
