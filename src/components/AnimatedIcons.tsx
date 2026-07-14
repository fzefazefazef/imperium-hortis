// Icônes SVG animées maison — cartes services de la home.
// Palette v2 : vert impérial #2E4B33 + vert sauge #7A8B6F. Le laiton (#B08D4C)
// ne subsiste que sur le trait de sol de la pousse. Couleurs paramétrables.
// Animations continues (keyframes) définies dans src/index.css (préfixe .ih-*).

const IMPERIAL = "#2E4B33";
const SAGE = "#7A8B6F";
const BRASS = "#B08D4C";

interface IconProps {
  size?: number;
  className?: string;
  /** couleur principale (défaut vert impérial) */
  primary?: string;
  /** couleur secondaire (défaut vert sauge) */
  secondary?: string;
}

/** Tige + deux feuilles qui s'ouvrent en oscillation douce (+ trait de sol laiton). */
export const SproutIcon: React.FC<IconProps> = ({
  size = 56,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    role="img"
    aria-label="Jardins d'exception"
    className={className}
  >
    {/* Trait de sol — seul rappel laiton */}
    <line x1={20} y1={58} x2={44} y2={58} stroke={BRASS} strokeWidth={1} strokeLinecap="round" />
    {/* Tige */}
    <path d="M32 58 Q31 42 32 30" stroke={primary} strokeWidth={3} strokeLinecap="round" />
    {/* Feuille gauche */}
    <path className="ih-sprout-leaf-left" d="M32 33 C 21 31 15 23 12 12 C 23 15 31 22 32 33 Z" fill={primary} />
    {/* Feuille droite */}
    <path className="ih-sprout-leaf-right" d="M32 33 C 43 31 49 23 52 12 C 41 15 33 22 32 33 Z" fill={secondary} />
  </svg>
);

/** Soleil : halo pulsant + rayons rotatifs scintillants + cœur (tons verts). */
export const SunIcon: React.FC<IconProps> = ({
  size = 56,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    role="img"
    aria-label="Éclairage paysager"
    className={className}
  >
    <defs>
      <radialGradient id="ih-sun-halo-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={secondary} stopOpacity={0.6} />
        <stop offset="100%" stopColor={secondary} stopOpacity={0} />
      </radialGradient>
    </defs>

    <circle className="ih-sun-halo" cx={32} cy={32} r={22} fill="url(#ih-sun-halo-grad)" />

    <g className="ih-sun-rays" stroke={primary} strokeWidth={2.5} strokeLinecap="round">
      <line x1={32} y1={10} x2={32} y2={17} />
      <line x1={32} y1={47} x2={32} y2={54} />
      <line x1={10} y1={32} x2={17} y2={32} />
      <line x1={47} y1={32} x2={54} y2={32} />
      <line x1={16.5} y1={16.5} x2={21.5} y2={21.5} />
      <line x1={42.5} y1={42.5} x2={47.5} y2={47.5} />
      <line x1={47.5} y1={16.5} x2={42.5} y2={21.5} />
      <line x1={21.5} y1={42.5} x2={16.5} y2={47.5} />
    </g>

    <circle cx={32} cy={32} r={8} fill={primary} />
  </svg>
);

/** Arrosoir qui s'incline + gouttes décalées (tons verts). */
export const WateringCanIcon: React.FC<IconProps> = ({
  size = 56,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    role="img"
    aria-label="Entretien paysager"
    className={className}
  >
    <g className="ih-can-body" stroke={primary} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M22 32 L24 50 Q24.4 52 26.4 52 L37.6 52 Q39.6 52 40 50 L42 32 Z" />
      <line x1={20} y1={32} x2={44} y2={32} />
      <path d="M25 32 Q32 20 42 30" />
      <path d="M22 35 L9 26" />
      <line x1={6} y1={23} x2={12} y2={29} />
    </g>

    <g fill={secondary}>
      <circle className="ih-can-drop" cx={8} cy={31} r={1.8} />
      <circle className="ih-can-drop ih-can-drop-2" cx={11} cy={30} r={1.6} />
      <circle className="ih-can-drop ih-can-drop-3" cx={6} cy={30} r={1.5} />
    </g>
  </svg>
);

/* ===========================================================================
   Icônes services (page Nos Services) — stroke 1.5, boucle continue ~3.2s.
   Jamais one-shot, jamais uniquement au hover.
   =========================================================================== */

/** Fleur : 3 pétales qui pulsent en phases décalées, cœur laiton, feuille qui ondule. */
export const FlowerIcon: React.FC<IconProps> = ({
  size = 46,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Mise en scène végétale" className={className}>
    <line x1={32} y1={54} x2={32} y2={40} stroke={primary} strokeWidth={1.5} strokeLinecap="round" />
    <path className="ih-flower-leaf" d="M32 48 C 24 47 19 42 17 35 C 26 35 32 40 32 48 Z" fill={secondary} />
    <circle className="ih-flower-petal ih-flower-petal-1" cx={32} cy={16} r={9} fill={primary} fillOpacity={0.85} />
    <circle className="ih-flower-petal ih-flower-petal-2" cx={20} cy={30} r={9} fill={primary} fillOpacity={0.85} />
    <circle className="ih-flower-petal ih-flower-petal-3" cx={44} cy={30} r={9} fill={primary} fillOpacity={0.85} />
    <circle cx={32} cy={26} r={5} fill={BRASS} />
  </svg>
);

/** Topiaire : boule sur tronc qui oscille, deux points sage qui pulsent en alternance. */
export const TopiaryIcon: React.FC<IconProps> = ({
  size = 46,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Sculptures végétales" className={className}>
    <line x1={20} y1={58} x2={44} y2={58} stroke={BRASS} strokeWidth={1} strokeLinecap="round" />
    <g className="ih-topiary-sway">
      <line x1={32} y1={58} x2={32} y2={30} stroke={primary} strokeWidth={2} strokeLinecap="round" />
      <circle cx={32} cy={19} r={13} fill={primary} fillOpacity={0.85} />
    </g>
    <circle className="ih-topiary-dot ih-topiary-dot-1" cx={13} cy={44} r={3} fill={secondary} />
    <circle className="ih-topiary-dot ih-topiary-dot-2" cx={51} cy={44} r={3} fill={secondary} />
  </svg>
);

/** Sécateur : lames croisées qui s'ouvrent/ferment en opposition, feuille qui tombe en boucle. */
export const ShearsIcon: React.FC<IconProps> = ({
  size = 46,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Maintenance premium" className={className}>
    <path className="ih-shears-leaf" d="M10 40 C 14 38 18 39 19 43 C 15 45 11 44 10 40 Z" fill={secondary} />
    <g className="ih-shears-blade-a">
      <line x1={32} y1={32} x2={14} y2={14} stroke={primary} strokeWidth={2.2} strokeLinecap="round" />
    </g>
    <g className="ih-shears-blade-b">
      <line x1={32} y1={32} x2={50} y2={14} stroke={primary} strokeWidth={2.2} strokeLinecap="round" />
    </g>
    <circle cx={32} cy={32} r={3} fill={BRASS} />
    <path d="M32 32 L20 50" stroke={secondary} strokeWidth={2.2} strokeLinecap="round" />
    <path d="M32 32 L44 50" stroke={secondary} strokeWidth={2.2} strokeLinecap="round" />
  </svg>
);

/** Irrigation : arc de diffusion, 3 gouttes en cascade décalée, ondulation d'eau. */
export const IrrigationIcon: React.FC<IconProps> = ({
  size = 46,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Pelouses & arrosage" className={className}>
    <path d="M18 26 Q32 8 46 26" stroke={primary} strokeWidth={2} strokeLinecap="round" fill="none" />
    <line x1={32} y1={26} x2={32} y2={18} stroke={primary} strokeWidth={2} strokeLinecap="round" />
    <g fill={secondary}>
      <circle className="ih-irrigation-drop ih-irrigation-drop-1" cx={24} cy={31} r={2.2} />
      <circle className="ih-irrigation-drop ih-irrigation-drop-2" cx={32} cy={31} r={2.2} />
      <circle className="ih-irrigation-drop ih-irrigation-drop-3" cx={40} cy={31} r={2.2} />
    </g>
    <path
      className="ih-irrigation-wave"
      d="M12 52 Q20 47 28 52 Q36 57 44 52 Q52 47 58 52"
      stroke={BRASS}
      strokeWidth={1}
      fill="none"
    />
  </svg>
);

/** Lumière : halo pulsant (glow vert), 5 rayons qui scintillent en décalé. */
export const LightIcon: React.FC<IconProps> = ({
  size = 46,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Optimisation de jardins" className={className}>
    <line x1={32} y1={40} x2={32} y2={56} stroke={BRASS} strokeWidth={1.5} strokeLinecap="round" />
    <g stroke={secondary} strokeWidth={2} strokeLinecap="round">
      <line className="ih-light-ray ih-light-ray-1" x1={32} y1={8} x2={32} y2={14} />
      <line className="ih-light-ray ih-light-ray-2" x1={13} y1={17} x2={18} y2={21} />
      <line className="ih-light-ray ih-light-ray-3" x1={51} y1={17} x2={46} y2={21} />
      <line className="ih-light-ray ih-light-ray-4" x1={9} y1={34} x2={15} y2={33} />
      <line className="ih-light-ray ih-light-ray-5" x1={55} y1={34} x2={49} y2={33} />
    </g>
    <circle className="ih-light-halo" cx={32} cy={30} r={10} fill={primary} />
  </svg>
);

/** Pousse au soleil : rayons qui tournent en continu, pousse qui respire. */
export const GrowthIcon: React.FC<IconProps> = ({
  size = 46,
  className,
  primary = IMPERIAL,
  secondary = SAGE,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Sélection & fourniture de plantes" className={className}>
    <g className="ih-growth-sun-rays" stroke={BRASS} strokeWidth={1.5} strokeLinecap="round">
      <line x1={46} y1={8} x2={46} y2={12} />
      <line x1={56} y1={18} x2={52} y2={18} />
      <line x1={39} y1={11} x2={41.5} y2={14.5} />
      <line x1={53} y1={11} x2={50.5} y2={14.5} />
      <line x1={39} y1={25} x2={41.5} y2={21.5} />
      <line x1={53} y1={25} x2={50.5} y2={21.5} />
    </g>
    <circle cx={46} cy={18} r={5} fill={BRASS} fillOpacity={0.85} />
    <g className="ih-growth-sprout">
      <line x1={24} y1={56} x2={24} y2={38} stroke={primary} strokeWidth={2.5} strokeLinecap="round" />
      <path d="M24 40 C 16 39 11 33 9 25 C 18 27 24 32 24 40 Z" fill={primary} />
      <path d="M24 44 C 32 43 37 38 39 31 C 30 32 24 37 24 44 Z" fill={secondary} />
    </g>
  </svg>
);
