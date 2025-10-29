import React, { useMemo, useState } from 'react';
import { Search, Star, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  { name: 'Passify Browser', slug: 'browser', color: 'from-violet-500 to-fuchsia-500', url: 'https://passify.in/browser', tag: 'New', accent: 'violet' },
  { name: 'Lavender AI', slug: 'lavender-ai', color: 'from-purple-400 to-pink-500', url: 'https://passify.in/lavender', tag: 'AI', accent: 'purple' },
  { name: 'Voxa', slug: 'voxa', color: 'from-zinc-900 to-white', url: 'https://passify.in/voxa', tag: 'Voice', accent: 'zinc' },
  { name: 'Flux Drive', slug: 'flux-drive', color: 'from-sky-500 to-cyan-400', url: 'https://passify.in/drive', tag: 'Cloud', accent: 'sky' },
  { name: 'Orbit Mail', slug: 'orbit-mail', color: 'from-amber-400 to-orange-500', url: 'https://passify.in/mail', tag: 'New', accent: 'amber' },
  { name: 'Pulse Notes', slug: 'pulse-notes', color: 'from-emerald-400 to-teal-500', url: 'https://passify.in/notes', tag: 'Notes', accent: 'emerald' },
];

const ProductCard = ({ product }) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/10"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-white/70">{product.tag}</div>
          <h3 className="mt-1 text-lg font-semibold text-white">{product.name}</h3>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">Open</div>
      </div>
      {/* Live preview mock */}
      <div className={`mt-4 h-36 w-full rounded-xl bg-gradient-to-br ${product.color} p-3 transition-all duration-300 group-hover:scale-[1.02]`}>
        <div className="h-full w-full rounded-lg border border-white/20 bg-black/30 backdrop-blur-sm" />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-white/60">
        <div className="inline-flex items-center gap-1">
          <Star size={14} className="text-yellow-300" />
          Popular
        </div>
        <div className="inline-flex items-center gap-1 text-white/70">
          Preview
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
};

const ProductShowcase = () => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="products" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Explore the Passify Ecosystem</h2>
          <p className="mt-1 text-sm text-white/70">Search products, view live previews, and jump in instantly.</p>
        </div>
        <div className="relative w-full max-w-md">
          <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Passify products..."
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/50 outline-none ring-0 backdrop-blur focus:border-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
