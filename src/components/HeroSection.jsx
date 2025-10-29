import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(80% 60% at 50% 20%, rgba(124,58,237,0.20) 0%, rgba(0,0,0,0) 60%)'
      }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Rocket size={16} className="text-violet-300" />
            <span className="text-xs text-violet-200">Introducing Passify Browser</span>
          </div>
          <h1 className="font-['Geist',Inter,ui-sans-serif] text-4xl font-semibold leading-tight text-white drop-shadow md:text-6xl">
            The Agentic Browser for the Passify Ecosystem
          </h1>
          <p className="mt-4 max-w-xl text-sm text-violet-100/90 md:text-base">
            A cinematic, intelligent browser that unifies your products, identity, and workflows. Explore the Passify universe — crafted for speed, privacy, and seamless interoperability.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
