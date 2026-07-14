import { useEffect, useRef, useState, ElementType, CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** délai avant l'apparition, en millisecondes (cascades : 0 / 120 / 240 / 360 / 480) */
  delay?: number;
  /** 'up' (défaut) = fondu + montée · 'image' = clip-path + zoom · 'line' = filet qui se déploie */
  variant?: "up" | "image" | "line";
  /** élément wrapper (défaut 'div') */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
  style,
}) => {
  // ref volontairement typée `any` : le wrapper est polymorphe (as), TS ne peut pas
  // inférer un type d'élément unique. L'usage réel reste des éléments DOM standards.
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // prefers-reduced-motion : on affiche immédiatement, sans observer ni transition.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // one-shot
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
