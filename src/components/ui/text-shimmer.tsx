import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface TextShimmerProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  style?: CSSProperties;
}

export const TextShimmer: FC<TextShimmerProps> = ({
  children,
  className,
  duration = 1.5,
  style,
}) => {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400% 0; }
          50% { background-position: 400% 0; }
          100% { background-position: -400% 0; }
        }
      `}</style>
      <span
        className={cn(
          "inline-block bg-gradient-to-r from-[--base-color] via-[--base-gradient-color] to-[--base-color] bg-[length:400%_100%] bg-clip-text text-transparent",
          className
        )}
        style={{
          ...style,
          "--base-color": "currentColor",
          "--base-gradient-color": "rgba(255, 255, 255, 0.9)",
          animation: `shimmer ${duration}s ease-in-out infinite`,
        } as CSSProperties}
      >
        {children}
      </span>
    </>
  );
};