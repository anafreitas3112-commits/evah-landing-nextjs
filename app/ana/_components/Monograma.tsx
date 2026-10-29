export function Monograma({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 150"
      role="img"
      aria-label="Monograma A de Ana Lucia"
    >
      <defs>
        <linearGradient id="m-leg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4F1EA" />
          <stop offset="100%" stopColor="#9FD9CF" />
        </linearGradient>
        <linearGradient id="m-swoosh" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E8F86" stopOpacity="0.2" />
          <stop offset="45%" stopColor="#2EC4B6" />
          <stop offset="100%" stopColor="#B8F0E6" />
        </linearGradient>
      </defs>
      <path d="M100 8 L46 138" stroke="url(#m-leg)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M100 8 L112 8 L150 138 L132 138 Z" fill="url(#m-leg)" />
      <path d="M58 104 C 92 92, 120 92, 132 96" stroke="#F4F1EA" strokeOpacity="0.7" strokeWidth="1.6" fill="none" />
      <path
        d="M44 134 C 80 128, 110 104, 126 78 C 138 58, 150 50, 168 46 C 150 56, 142 70, 132 92 C 118 120, 86 136, 44 134 Z"
        fill="url(#m-swoosh)"
      />
      <path className="spark" d="M163 58 L166 69 L177 72 L166 75 L163 86 L160 75 L149 72 L160 69 Z" fill="#B8F0E6" />
    </svg>
  );
}
