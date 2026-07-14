// ArchPattern — rangée d'arches fantômes (motif signature « arche impériale »).
// Utilisé en pied de bandeau (PageHeader) et dans le CTA « jardin d'éternité » de la home.
// Le parent doit être `relative` + `overflow-hidden` pour que le motif soit rogné proprement.

interface ArchPatternProps {
  count?: number;
  archWidth?: number;
  archHeight?: number;
  gap?: number;
  opacity?: number;
  className?: string;
}

const ArchPattern: React.FC<ArchPatternProps> = ({
  count = 5,
  archWidth = 96,
  archHeight = 190,
  gap = 22,
  opacity = 0.07,
  className = "",
}) => (
  <div
    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 flex ${className}`}
    style={{ bottom: "-2px", gap: `${gap}px`, opacity }}
    aria-hidden="true"
  >
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        style={{
          width: `${archWidth}px`,
          height: `${archHeight}px`,
          border: "1px solid hsl(var(--cream))",
          borderBottom: "none",
          borderRadius: "999px 999px 0 0",
        }}
      />
    ))}
  </div>
);

export default ArchPattern;
