import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
  };

  return (
    <section id="newsletter" className="relative mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-white backdrop-blur">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Mail size={14} />
          Stay in the loop
        </div>
        <h3 className="text-2xl font-semibold">Subscribe to Passify updates</h3>
        <p className="mt-1 text-white/70">Product launches, feature drops, and ecosystem news — no spam, just signal.</p>

        {!done ? (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="w-full flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none ring-0 backdrop-blur focus:border-white/20"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-200">
            <Check size={16} />
            Youre on the list! Watch your inbox for updates.
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
