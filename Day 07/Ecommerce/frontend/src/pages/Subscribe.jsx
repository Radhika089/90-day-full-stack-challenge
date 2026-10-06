import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <main className="bg-[#fffaf2] text-[#3a1407]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#9a4f28]">
            AURA Subscription
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Never run out of your favourite coffee.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#765847]">
            Make your coffee ritual easier. Choose your favourites and have
            fresh coffee delivered regularly, right when you need it.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#f5eee2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <div className="rounded-3xl border border-[#e5d7c7] bg-[#fffaf2] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#9a4f28]">
                Starter
              </p>

              <h2 className="mt-3 font-serif text-2xl">One Bag</h2>

              <p className="mt-3 text-sm leading-6 text-[#765847]">
                A simple way to keep your favourite coffee at home.
              </p>

              <div className="mt-6 border-t border-[#eadfd3] pt-6">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold">₹599</span>
                  <span className="pb-1 text-sm text-[#8b6d57]">
                    / delivery
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-[#765847]">
                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#9a4f28]" />
                  One coffee bag
                </li>

                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#9a4f28]" />
                  Freshly roasted
                </li>

                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#9a4f28]" />
                  Delivered regularly
                </li>
              </ul>

              <Link
                to="/shop"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-[#3a1407] px-5 py-3 text-sm text-[#3a1407] transition hover:bg-[#3a1407] hover:text-white">
                Choose Coffee
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Ritual */}
            <div className="relative rounded-3xl bg-[#3a1407] p-7 text-white shadow-lg">
              <span className="absolute right-6 top-6 rounded-full bg-[#b96447] px-3 py-1 text-[9px] font-semibold uppercase tracking-[1px]">
                Popular
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#d9ad8a]">
                Ritual
              </p>

              <h2 className="mt-3 font-serif text-2xl">Two Bags</h2>

              <p className="mt-3 text-sm leading-6 text-[#d8c2b4]">
                For coffee lovers who like having more than one roast on hand.
              </p>

              <div className="mt-6 border-t border-white/15 pt-6">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold">₹1,099</span>
                  <span className="pb-1 text-sm text-[#d8c2b4]">
                    / delivery
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-[#d8c2b4]">
                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#d9ad8a]" />
                  Two coffee bags
                </li>

                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#d9ad8a]" />
                  Choose your favourites
                </li>

                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#d9ad8a]" />
                  Freshly roasted
                </li>
              </ul>

              <Link
                to="/shop"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#3a1407] transition hover:bg-[#f5eee2]">
                Start Your Ritual
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* House */}
            <div className="rounded-3xl border border-[#e5d7c7] bg-[#fffaf2] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#9a4f28]">
                House
              </p>

              <h2 className="mt-3 font-serif text-2xl">Three Bags</h2>

              <p className="mt-3 text-sm leading-6 text-[#765847]">
                For households that never want the coffee shelf to run empty.
              </p>

              <div className="mt-6 border-t border-[#eadfd3] pt-6">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold">₹1,499</span>
                  <span className="pb-1 text-sm text-[#8b6d57]">
                    / delivery
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-[#765847]">
                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#9a4f28]" />
                  Three coffee bags
                </li>

                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#9a4f28]" />
                  Mix different roasts
                </li>

                <li className="flex gap-2">
                  <Check size={16} className="mt-0.5 text-[#9a4f28]" />
                  Regular delivery
                </li>
              </ul>

              <Link
                to="/shop"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-[#3a1407] px-5 py-3 text-sm text-[#3a1407] transition hover:bg-[#3a1407] hover:text-white">
                Explore Coffee
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#9a4f28]">
            How It Works
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Your coffee, your rhythm.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eee2] font-serif text-lg">
              01
            </div>

            <h3 className="mt-4 font-serif text-xl">Choose</h3>

            <p className="mt-2 text-sm leading-6 text-[#765847]">
              Find the coffee and quantity that fits your routine.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eee2] font-serif text-lg">
              02
            </div>

            <h3 className="mt-4 font-serif text-xl">Relax</h3>

            <p className="mt-2 text-sm leading-6 text-[#765847]">
              Your coffee arrives fresh without another trip to the store.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eee2] font-serif text-lg">
              03
            </div>

            <h3 className="mt-4 font-serif text-xl">Enjoy</h3>

            <p className="mt-2 text-sm leading-6 text-[#765847]">
              Brew, slow down, and make your everyday coffee ritual yours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Subscribe;
