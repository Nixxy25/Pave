"use client"

import { BellIcon, Share2Icon, CreditCardIcon, WorkflowIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/animated-beam-demo"
import { AnimatedListDemo } from "@/components/ui/animated-list-demo"
import { CheckoutDemo } from "@/components/ui/checkout-demo"

const steps = [
  {
    step: "1",
    name: "Install",
    body: "Add Pave to your project in seconds and get started with a single command.",
  },
  {
    step: "2",
    name: "Connect",
    body: "Link your business account with an API key to securely access Pave's payment network.",
  },
  {
    step: "3",
    name: "Send",
    body: "Trigger domestic or cross-border payments to anyone, anywhere, in any currency.",
  },
  {
    step: "4",
    name: "Track",
    body: "Monitor every payment in real time — from initiated to settled, all in one place.",
  },
]

const features = [
  {
    Icon: WorkflowIcon,
    name: "How It Works",
    description: "Get started with Pave in 4 simple steps.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_5%,#000_30%)] [--duration:20s]"
      >
        {steps.map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {s.step}
              </div>
              <figcaption className="text-sm dark:text-white">
                {s.name}
              </figcaption>
            </div>
            <blockquote className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">{s.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_5%,#000_30%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CreditCardIcon,
    name: "Instant Checkout",
    description: "Accept crypto payments with instant confirmation.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <CheckoutDemo className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
]

export function Features() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-950 poppins-regular">
      <div className="max-w-7xl mx-auto">
       
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
