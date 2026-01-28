"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden",
        className
      )}
    >
      <div className="bg-neutral-800 px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="poppins-light text-neutral-400 text-xs ml-2">
          terminal
        </span>
      </div>
      <div className="p-6 font-mono text-sm space-y-2">{children}</div>
    </div>
  );
}

interface TypingAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TypingAnimation({
  children,
  className,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const text = String(children);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className={cn("text-neutral-300", className)}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">▋</span>}
    </div>
  );
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
}: AnimatedSpanProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div className={cn("text-neutral-300 animate-in fade-in", className)}>
      {children}
    </div>
  );
}
