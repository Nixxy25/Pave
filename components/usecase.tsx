"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import usecasesData from "@/data/usecases.json";

// Icon components
const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  lightning: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  book: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  wallet: (
    <svg className="w-6 h-6 text-[#fe6500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

interface UseCaseItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ item }: { item: UseCaseItem }) {
  return (
    <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
      <div className="w-12 h-12 bg-[#fe6500]/20 rounded-lg flex items-center justify-center mb-4">
        {icons[item.icon]}
      </div>
      <h3 className="poppins-black text-white text-xl mb-3">{item.title}</h3>
      <p className="poppins-light text-neutral-400 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export function UseCase() {
  return (
    <section className="w-full -mt-10">
      <div className="w-full px-4">
        {/* Black rounded container */}
        <div className="bg-black/90 rounded-t-3xl p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="poppins-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              How Pave Works For You
            </h2>
            <p className="poppins-light text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              Whether you&apos;re building the next big thing or running a business, Pave has you covered.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="developer" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-neutral-800 p-1 rounded-full">
                <TabsTrigger 
                  value="developer" 
                  className="poppins-light rounded-full px-6 py-2 data-[state=active]:bg-[#fe6500] data-[state=active]:text-white text-neutral-400"
                >
                  Developer
                </TabsTrigger>
                <TabsTrigger 
                  value="company" 
                  className="poppins-light rounded-full px-6 py-2 data-[state=active]:bg-[#fe6500] data-[state=active]:text-white text-neutral-400"
                >
                  Company
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Developer Content */}
            <TabsContent value="developer" className="mt-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 text-center">
                  <h3 className="poppins-black text-white text-2xl md:text-3xl mb-3">
                    {usecasesData.developer.title}
                  </h3>
                  <p className="poppins-light text-neutral-400 text-base md:text-lg">
                    {usecasesData.developer.description}
                  </p>
                </div>
                
                {/* Code Block */}
                <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
                  <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
                    <span className="poppins-light text-neutral-400 text-sm">JavaScript / TypeScript</span>
                    <button className="poppins-light text-xs text-neutral-400 hover:text-white transition-colors">
                      Copy
                    </button>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="poppins-light text-sm text-neutral-300 leading-relaxed">
{usecasesData.developer.codeExample}
                    </code>
                  </pre>
                </div>
              </div>
            </TabsContent>

            {/* Company Content */}
            <TabsContent value="company" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {usecasesData.company.map((item) => (
                  <FeatureCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
