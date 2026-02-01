"use client"

import React, { forwardRef, useRef } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Image src="/pave2.png" alt="Pave" width={25} height={25} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.shopify />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.stellar />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.ethereum />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.globe />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.any />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  )
}

const Icons = {
  shopify: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 109.5 124.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#95BF47"
        d="M95.9,23.9c-0.1-0.6-0.6-1-1.1-1c-0.5,0-9.3-0.2-9.3-0.2s-7.4-7.2-8.1-7.9c-0.7-0.7-2.2-0.5-2.7-0.3
        c0,0-1.4,0.4-3.7,1.1c-0.4-1.3-1-2.8-1.8-4.4c-2.6-5-6.5-7.7-11.1-7.7c0,0,0,0,0,0c-0.3,0-0.6,0-1,0.1c-0.1-0.2-0.3-0.3-0.4-0.5
        c-2-2.2-4.6-3.2-7.7-3.1c-6,0.2-12,4.5-16.8,12.2c-3.4,5.4-6,12.2-6.8,17.5c-6.9,2.1-11.7,3.6-11.8,3.7c-3.5,1.1-3.6,1.2-4,4.5
        c-0.3,2.5-9.5,73-9.5,73l76.4,13.2l33.1-8.2C109.5,115.8,96,24.5,95.9,23.9z"
      />
      <path
        fill="#5E8E3E"
        d="M94.8,22.9c-0.5,0-9.3-0.2-9.3-0.2s-7.4-7.2-8.1-7.9c-0.3-0.3-0.6-0.4-1-0.5l0,109.7l33.1-8.2
        c0,0-13.5-91.3-13.6-92C95.8,23.3,95.3,22.9,94.8,22.9z"
      />
      <path
        fill="#FFFFFF"
        d="M58,39.9l-3.8,14.4c0,0-4.3-2-9.4-1.6c-7.5,0.5-7.5,5.2-7.5,6.4c0.4,6.4,17.3,7.8,18.3,22.9
        c0.7,11.9-6.3,20-16.4,20.6c-12.2,0.8-18.9-6.4-18.9-6.4l2.6-11c0,0,6.7,5.1,12.1,4.7c3.5-0.2,4.8-3.1,4.7-5.1
        c-0.5-8.4-14.3-7.9-15.2-21.7c-0.7-11.6,6.9-23.4,23.7-24.4C54.7,38.2,58,39.9,58,39.9z"
      />
    </svg>
  ),
  stellar: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 236.36 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M203,26.16l-28.46,14.5-137.43,70a82.49,82.49,0,0,1-.7-10.69A81.87,81.87,0,0,1,158.2,28.6l16.29-8.3,2.43-1.24A100,100,0,0,0,18.18,100q0,3.82.29,7.61a18.19,18.19,0,0,1-9.88,17.58L0,129.57V150l25.29-12.89,0,0,8.19-4.18,8.07-4.11v0L186.43,55l16.28-8.29,33.65-17.15V9.14Z"
      />
      <path
        fill="#000000"
        d="M236.36,50,49.78,145,33.5,153.31,0,170.38v20.41l33.27-16.95,28.46-14.5L199.3,89.24A83.45,83.45,0,0,1,200,100,81.87,81.87,0,0,1,78.09,171.36l-1,.53-17.66,9A100,100,0,0,0,218.18,100c0-2.57-.1-5.14-.29-7.68a18.2,18.2,0,0,1,9.87-17.58l8.6-4.38Z"
      />
    </svg>
  ),
  ethereum: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L5 12L12 16L19 12L12 2Z" fill="#627EEA" />
      <path d="M12 16L5 12L12 22L19 12L12 16Z" fill="#627EEA" opacity="0.6" />
      <path d="M12 2V9.5L18 12L12 2Z" fill="#627EEA" opacity="0.8" />
      <path d="M12 16V22L18 12L12 16Z" fill="#627EEA" opacity="0.4" />
    </svg>
  ),
  globe: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
          fill="#666"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  any: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plus/Add icon representing "any" integration */}
      <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="2" />
      <path d="M12 8V16M8 12H16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
}
