const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconeWhats = () => (
  <svg {...base}>
    <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3a8.5 8.5 0 1 1 15.5-4.6z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4 4 0 0 1-2.7-2.7l.8-1-1-2z" />
  </svg>
);

export const IconeContato = () => (
  <svg {...base}>
    <circle cx="10" cy="8" r="4" />
    <path d="M3 21a7 7 0 0 1 12-4.9" />
    <path d="M19 14v6M16 17h6" />
  </svg>
);

export const IconePino = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 22s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z" fill="currentColor" />
    <circle cx="12" cy="10" r="2.6" fill="#0A2827" />
  </svg>
);

export const Seta = () => (
  <svg {...base} width={20} height={20} strokeWidth={2}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const IconeCompartilhar = () => (
  <svg {...base} width={22} height={22} strokeWidth={1.6}>
    <circle cx="18" cy="5" r="2.6" />
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="18" cy="19" r="2.6" />
    <path d="M8.4 13.3l7.2 4.4M15.6 6.3l-7.2 4.4" />
  </svg>
);

export const IconeCopiar = () => (
  <svg {...base} width={18} height={18} strokeWidth={2}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);
