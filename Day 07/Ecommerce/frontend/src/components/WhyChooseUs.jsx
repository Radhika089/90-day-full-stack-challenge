import React from "react";
import { Coffee, Leaf, PackageCheck, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5eee2] px-5 pb-0 pt-12 font-sans sm:px-8 md:px-10 md:pt-18">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d99555] opacity-[0.10] blur-[110px]" />
      {/* Heading */}
      <div className="relative z-20 mx-auto max-w-2xl text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#9a6748] sm:text-[11px]">
          WHY CHOOSE US
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#3a1407] sm:text-5xl">
          More than coffee,
          <span className="ml-2 font-normal italic text-[#8a573b]">
            made with care.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#76584a]">
          From carefully selected beans to the final roast, every little detail
          is considered to make your everyday cup better.
        </p>
      </div>
      {/* Main composition */}
      <div className="relative z-10 mx-auto mt-8 p-3 max-w-6xl sm:mt-10">
        {/* Desktop brown background */}
        <svg
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 hidden h-[190px] w-screen -translate-x-1/2 md:block"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none">
          <path
            d="M0 55
            C35 48 65 59 100 51
            C135 43 165 58 205 49
            C245 40 275 56 315 48
            C355 40 390 54 430 46
            C470 38 505 53 545 45
            C585 37 620 52 660 44
            C700 36 740 51 780 43
            C820 35 860 50 900 42
            C940 34 980 50 1020 42
            C1060 34 1100 50 1140 42
            C1180 34 1220 49 1260 41
            C1300 33 1340 48 1380 40
            C1410 35 1430 42 1440 39
            L1440 260
            L0 260
            Z"
            fill="#431b0d"
          />
        </svg>

        {/* Mobile brown background */}
        <svg
          className="pointer-events-none absolute bottom-[310px] left-1/2 z-0 h-[150px] w-screen -translate-x-1/2 md:hidden"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none">
          <path
            d="M0 55
            C35 48 65 59 100 51
            C135 43 165 58 205 49
            C245 40 275 56 315 48
            C355 40 390 54 430 46
            C470 38 505 53 545 45
            C585 37 620 52 660 44
            C700 36 740 51 780 43
            C820 35 860 50 900 42
            C940 34 980 50 1020 42
            C1060 34 1100 50 1140 42
            C1180 34 1220 49 1260 41
            C1300 33 1340 48 1380 40
            C1410 35 1430 42 1440 39
            L1440 260
            L0 260
            Z"
            fill="#431b0d"
          />
        </svg>

        {/* Decorative sparkles */}
        <div className="pointer-events-none absolute left-[8%] top-[25%] z-10 text-xl text-[#b87543] opacity-30">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[8%] top-[28%] z-10 text-xl text-[#b87543] opacity-30">
          ✦
        </div>

        {/* Desktop layout */}
        <div className="relative z-20 hidden items-center md:grid md:grid-cols-[1fr_420px_1fr]">
          {/* LEFT */}
          <div className="flex flex-col gap-20 pr-8">
            <div className="ml-auto max-w-[300px] text-right">
              <div className="mb-2 flex items-center justify-end gap-3">
                <h3 className="text-base font-semibold text-[#3a1407] sm:text-lg">
                  Premium Beans
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <Sparkles size={15} strokeWidth={1.7} />
                </span>
              </div>

              <p className="text-xs leading-5 text-[#76584a] sm:text-sm">
                Carefully selected beans chosen for a rich and balanced cup.
              </p>
            </div>

            <div className="ml-auto max-w-[300px] text-right">
              <div className="mb-2 flex items-center justify-end gap-3">
                <h3 className="text-base font-semibold text-[#3a1407] sm:text-lg">
                  Sustainable Sourcing
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <Leaf size={15} strokeWidth={1.7} />
                </span>
              </div>

              <p className="text-xs leading-5 text-[#76584a] sm:text-sm">
                Thoughtfully sourced from trusted coffee-growing partners.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            <div className="pointer-events-none absolute bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d98945] opacity-25 blur-[70px]" />

            <img
              src="/whyChooseUs.png"
              alt="Freshly prepared coffee"
              className="relative z-20 h-[570px] w-auto max-w-[95%] object-contain"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-20 pl-8">
            <div className="max-w-[300px] text-left">
              <div className="mb-2 flex items-center justify-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <Coffee size={15} strokeWidth={1.7} />
                </span>

                <h3 className="text-base font-semibold text-[#3a1407] sm:text-lg">
                  Expert Roasting
                </h3>
              </div>

              <p className="text-xs leading-5 text-[#76584a] sm:text-sm">
                Small-batch roasted to bring out the character of every bean.
              </p>
            </div>

            <div className="max-w-[300px] text-left">
              <div className="mb-2 flex items-center justify-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <PackageCheck size={15} strokeWidth={1.7} />
                </span>

                <h3 className="text-base font-semibold text-[#3a1407] sm:text-lg">
                  Fresh Every Day
                </h3>
              </div>

              <p className="text-xs leading-5 text-[#76584a] sm:text-sm">
                Packed fresh to preserve the aroma and flavour you love.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE layout */}
        <div className="relative z-20 flex flex-col md:hidden">
          {/* Top two benefits */}
          <div className="grid grid-cols-1 gap-8 text-center">
            <div className="mx-auto max-w-[310px]">
              <div className="mb-2 flex items-center justify-center gap-3">
                <h3 className="text-base font-semibold text-[#3a1407]">
                  Premium Beans
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <Sparkles size={15} strokeWidth={1.7} />
                </span>
              </div>

              <p className="text-xs leading-5 text-[#76584a]">
                Carefully selected beans chosen for a rich and balanced cup.
              </p>
            </div>

            <div className="mx-auto max-w-[310px]">
              <div className="mb-2 flex items-center justify-center gap-3">
                <h3 className="text-base font-semibold text-[#3a1407]">
                  Expert Roasting
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <Coffee size={15} strokeWidth={1.7} />
                </span>
              </div>

              <p className="text-xs leading-5 text-[#76584a]">
                Small-batch roasted to bring out the character of every bean.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 flex justify-center">
            <div className="pointer-events-none absolute bottom-12 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#d98945] opacity-25 blur-[70px]" />

            <img
              src="/whyChooseUs.png"
              alt="Freshly prepared coffee"
              className="relative z-20 h-[500px] w-auto max-w-[100%] object-contain"
            />
          </div>

          {/* Bottom two benefits */}
          <div className="mt-6 grid grid-cols-1 gap-8 pb-8 text-center">
            <div className="mx-auto max-w-[310px]">
              <div className="mb-2 flex items-center justify-center gap-3">
                <h3 className="text-base font-semibold text-[#3a1407]">
                  Sustainable Sourcing
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <Leaf size={15} strokeWidth={1.7} />
                </span>
              </div>

              <p className="text-xs leading-5 text-[#76584a]">
                Thoughtfully sourced from trusted coffee-growing partners.
              </p>
            </div>

            <div className="mx-auto max-w-[310px]">
              <div className="mb-2 flex items-center justify-center gap-3">
                <h3 className="text-base font-semibold text-[#3a1407]">
                  Fresh Every Day
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fffaf2] text-[#a66b43] shadow-sm">
                  <PackageCheck size={15} strokeWidth={1.7} />
                </span>
              </div>

              <p className="text-xs leading-5 text-[#76584a]">
                Packed fresh to preserve the aroma and flavour you love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
