"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/** Wraps content with a glow that follows the cursor. */
export function Spotlight({
  children,
  className,
  color = "rgba(254,101,0,0.14)",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={cn("group/spot relative", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{ background: `radial-gradient(380px circle at var(--x) var(--y), ${color}, transparent 65%)` }}
      />
      {children}
    </div>
  );
}
