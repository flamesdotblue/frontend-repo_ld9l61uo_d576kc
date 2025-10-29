import React from 'react';
import { Megaphone, Flame, Crown } from 'lucide-react';

const updates = {
  features: [
    { title: 'Agentic Tabs', desc: 'Automate multi-step workflows with intelligent tab flows.', icon: Flame },
    { title: 'Unified Identity', desc: 'Single sign-on across all Passify products.', icon: Crown },
  ],
  announcements: [
    { title: 'Passify Browser Public Preview', desc: 'Experience the new era of browsing with AI-native features.' },
    { title: 'Ecosystem Expansions', desc: 'New integrations for Notes, Drive, and Mail.' },
  ],
  mostUsed: ['Lavender AI', 'Passify Browser', 'Flux Drive', 'Voxa'],
};

const Badge = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{children}</span>
);

const UpdatesSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-center gap-2">
        <Megaphone size={18} className="text-violet-300" />
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Whats New</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-4 flex items-center gap-2">
            <Badge>New Features</Badge>
          </div>
          <ul className="space-y-4 text-white/80">
            {updates.features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <f.icon size={18} className="mt-0.5 text-violet-300" />
                <div>
                  <div className="font-medium text-white">{f.title}</div>
                  <div className="text-sm text-white/70">{f.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-4 flex items-center gap-2">
            <Badge>Most Used</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {updates.mostUsed.map((m) => (
              <span key={m} className="rounded-xl border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-white/80">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-4 flex items-center gap-2">
            <Badge>Announcements</Badge>
          </div>
          <ul className="space-y-3">
            {updates.announcements.map((a) => (
              <li key={a.title} className="rounded-xl border border-white/10 bg-black/30 p-4 text-white/80">
                <div className="font-medium text-white">{a.title}</div>
                <div className="text-sm text-white/70">{a.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
