import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#192b2f] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-wide">
              AURA COFFEE CO.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Thoughtfully brewed coffee, warm moments, and a place to slow
              down. Made with passion, served with warmth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Brews</li>
              <li>Gear</li>
              <li>Our Story</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Visit Us
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/70">
              24 Market Street
              <br />
              Open daily · 8am — 8pm
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aura Coffee Co. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
