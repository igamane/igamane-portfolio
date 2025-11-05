"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const shuffle = <T,>(arr: T[]) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const SOURCES = Array.from({ length: 8 }, (_, i) => `/fiverr-reviews/${i + 1}.png`);

const Clients = () => {
  const randomized = useMemo(() => shuffle(SOURCES), []);

  return (
    <section id="testimonials" className="py-20">
    <h1 className="heading">
      Kind words from
      <span className="text-purple"> satisfied clients on Fiverr</span>
    </h1>

    {/* Two-per-row reviews, fully visible images */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {randomized.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative rounded-xl overflow-hidden border border-white/10 bg-black-200/40 p-3 flex items-center justify-center"
        >
          <Image
            src={src}
            alt={`Fiverr review ${i + 1}`}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
      {/* GitHub contributions section */}
      <div className="mt-20">
        <h2 className="heading">
          GitHub <span className="text-purple">contributions</span>
        </h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mt-3">
          I contribute a lot on private repositories for clients, which do not show publicly.
        </p>

        <div className="mt-8">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 p-3 overflow-hidden">
            <Image
              src="/github-contributions.png"
              alt="GitHub contributions heatmap"
              className="w-full h-auto rounded-xl border border-white/10"
            />
            <div className="absolute left-3 bottom-3 text-xs px-2 py-1 rounded-md bg-black/60 border border-white/10">
              Private work included
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Clients;
