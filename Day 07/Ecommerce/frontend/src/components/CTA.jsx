import { ArrowUpRight, Coffee, PackageCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5eee2] font-sans">
      {/* Brown CTA panel */}
      <div className="relative mx-auto overflow-hidden bg-[#431b0d] px-6 pb-20 pt-14 sm:px-10 sm:pt-16">
        {/* Top curve */}
        <svg
          className="absolute left-0 top-0 z-20 h-7 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none">
          <path
            d="M0 45 C100 20 170 62 270 38 C370 14 450 58 550 35 C650 12 730 56 830 33 C930 10 1010 55 1110 32 C1210 9 1300 52 1380 30 C1410 23 1430 25 1440 22 L1440 0 L0 0 Z"
            fill="#f5eee2"
          />
        </svg>

        {/* Warm glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a45d32] opacity-20 blur-[100px]" />

        {/* Decorative beans */}
        <img
          src="/beans.png"
          alt=""
          className="pointer-events-none absolute left-[-35px] top-[35%] z-0 w-28 rotate-[-20deg] opacity-10 md:left-8 md:w-36"
        />

        <img
          src="/heartbeans.png"
          alt=""
          className="pointer-events-none absolute right-[-35px] top-[25%] z-0 w-32 rotate-[20deg] opacity-10 md:right-8 md:w-40"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl pt-3 text-center">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[#dca66c]">
            FRESH FROM THE ROAST
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#fff7e9] sm:text-4xl md:text-5xl">
            Freshly roasted,
            <span className="block font-normal italic text-[#e4a866]">
              ready for your cup.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-[#e5c9ad] sm:text-sm">
            Small-batch coffee roasted with care, packed fresh and delivered
            straight to your door.
          </p>

          {/* Benefits */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-[#f2d9bd] sm:gap-x-8 sm:text-xs">
            <div className="flex items-center gap-1.5">
              <Coffee size={14} strokeWidth={1.6} />
              <span>Small-batch roasted</span>
            </div>

            <div className="flex items-center gap-1.5">
              <PackageCheck size={14} strokeWidth={1.6} />
              <span>Packed fresh</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Truck size={14} strokeWidth={1.6} />
              <span>Delivered to you</span>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/brews"
            className="group mx-auto mt-5 flex w-fit items-center gap-2.5 rounded-full bg-[#e4a04f] px-5 py-2.5 text-xs font-semibold text-[#3a1407] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0b66b] sm:px-6 sm:py-3 sm:text-sm">
            Shop coffee
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a1407] text-[#fff7e9] transition-transform duration-300 group-hover:rotate-45 sm:h-7 sm:w-7">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </div>

        {/* Bottom curve */}
        <svg
          className="absolute bottom-[-1px] left-0 z-20 h-9 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none">
          <path
            d="M0 55 C90 80 160 38 260 62 C360 86 440 43 540 66 C640 89 720 45 820 68 C920 91 1000 47 1100 70 C1200 93 1280 50 1360 70 C1400 80 1425 73 1440 76 L1440 100 L0 100 Z"
            fill="#f5eee2"
          />
        </svg>
      </div>

      {/* Image strip */}
      <div className="relative z-30 -mt-1 flex h-[100px] items-end justify-center overflow-hidden sm:h-[125px]">
        <img
          src="/hero1.webp"
          alt="Fresh coffee"
          className="absolute bottom-[-38px] left-[2%] h-[125px] w-[155px] rotate-[-8deg] rounded-[35%] object-cover sm:bottom-[-48px] sm:h-[165px] sm:w-[200px]"
        />

        <img
          src="/hero3.avif"
          alt="Fresh coffee"
          className="absolute bottom-[-30px] left-[22%] h-[140px] w-[150px] rotate-[5deg] rounded-[35%] object-cover sm:bottom-[-40px] sm:h-[180px] sm:w-[190px]"
        />

        <img
          src="/hero2.jpg"
          alt="Fresh coffee"
          className="absolute bottom-[-35px] right-[22%] h-[140px] w-[150px] rotate-[-5deg] rounded-[35%] object-cover sm:bottom-[-45px] sm:h-[180px] sm:w-[190px]"
        />

        <img
          src="/hero1.webp"
          alt="Fresh coffee"
          className="absolute bottom-[-38px] right-[2%] h-[125px] w-[155px] rotate-[8deg] rounded-[35%] object-cover sm:bottom-[-48px] sm:h-[165px] sm:w-[200px]"
        />
      </div>
    </section>
  );
};

export default CTA;
