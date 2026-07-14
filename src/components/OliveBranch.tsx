// Branche d'olivier line-art, décor de fond discret. Composant partagé (home + Philosophie).

const OliveBranch = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 420"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tige principale */}
    <path d="M30 410 C 55 330 70 270 95 205 C 118 145 140 90 150 20" />
    {/* Rameaux */}
    <path d="M95 205 C 70 195 50 175 40 150" />
    <path d="M118 145 C 145 140 165 120 172 92" />
    <path d="M138 95 C 116 92 98 76 92 52" />
    {/* Feuilles (ellipses) */}
    <ellipse cx="36" cy="146" rx="12" ry="5" transform="rotate(-35 36 146)" />
    <ellipse cx="176" cy="88" rx="12" ry="5" transform="rotate(30 176 88)" />
    <ellipse cx="88" cy="48" rx="12" ry="5" transform="rotate(-30 88 48)" />
    <ellipse cx="150" cy="18" rx="11" ry="4.5" transform="rotate(20 150 18)" />
    <ellipse cx="72" cy="250" rx="12" ry="5" transform="rotate(-45 72 250)" />
    <ellipse cx="128" cy="120" rx="11" ry="4.5" transform="rotate(28 128 120)" />
  </svg>
);

export default OliveBranch;
