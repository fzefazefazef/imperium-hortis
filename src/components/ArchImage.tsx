// ArchImage — motif signature « arche romaine ».
// Masque en plein cintre + double cadre filaire laiton décalé + point laiton au sommet.
// À utiliser enveloppé dans <Reveal variant="image">.

interface ArchImageProps {
  src: string;
  alt: string;
  className?: string;
  /** petit label optionnel affiché en bas de l'arche */
  tag?: string;
}

const ArchImage: React.FC<ArchImageProps> = ({ src, alt, className = "", tag }) => (
  <div className={`relative ${className}`}>
    {/* Point laiton au sommet de l'arche */}
    <span
      className="absolute left-1/2 -translate-x-1/2 rounded-full bg-brass"
      style={{ top: "-24px", width: "7px", height: "7px" }}
      aria-hidden="true"
    />

    {/* Double cadre filaire décalé */}
    <div
      className="absolute pointer-events-none"
      style={{
        inset: "-14px",
        border: "1px solid hsl(var(--brass) / 0.55)",
        borderRadius: "999px 999px 24px 24px",
      }}
      aria-hidden="true"
    />

    {/* Image en arche */}
    <div
      className="overflow-hidden bg-cream-deep"
      style={{ aspectRatio: "3 / 4.1", borderRadius: "999px 999px 18px 18px" }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>

    {tag && (
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-inter text-[11px] uppercase tracking-[0.2em] text-cream bg-ink/50 backdrop-blur-sm px-3 py-1 rounded-full">
        {tag}
      </span>
    )}
  </div>
);

export default ArchImage;
