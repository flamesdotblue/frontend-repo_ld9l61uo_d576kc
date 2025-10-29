import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import UpdatesSection from './components/UpdatesSection.jsx';
import Newsletter from './components/Newsletter.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Background aura */}
      <div className="pointer-events-none fixed inset-0 -z-0" aria-hidden>
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)] blur-3xl" />
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
          <span className="font-semibold tracking-tight">Passify</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#newsletter" className="hover:text-white">Updates</a>
          <a href="https://passify.in" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">Open App</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <ProductShowcase />
        <UpdatesSection />
        <section id="about" className="mx-auto max-w-5xl px-6 py-16 text-white/80">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">The Future of Digital Evolution</h2>
          <p className="mt-3 leading-relaxed">
            Passify is a multi-product ecosystem engineered for a new era of computing. We believe software should be cinematic, intelligent, and unified. Every product is designed to work beautifully on its own and even better together — connected through a universal account, shared identity, and seamless data flows.
          </p>
        </section>
        <Newsletter />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Passify. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
