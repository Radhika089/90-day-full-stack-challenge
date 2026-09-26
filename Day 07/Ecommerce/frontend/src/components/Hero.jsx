import { ArrowRight } from "lucide-react";

/**
 * Fonts required — add these to your index.html <head> (or global CSS @import):
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 *
 * Tailwind config — add to your fontFamily theme:
 * fontFamily: {
 *   serif: ['"Fraunces"', 'serif'],
 *   sans: ['"Inter"', 'sans-serif'],
 * }
 */

const heroImg =
  "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#141110] font-sans text-[#f3ede2]">
      {/* subtle grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-10 lg:pb-0 lg:pt-0 lg:min-h-[86vh]">
        {/* Left: copy */}
        <div className="relative z-20 order-2 lg:order-1">
          <div className="mb-8 flex items-center gap-3 text-sm text-[#f3ede2]/50">
            <span className="h-px w-8 bg-[#b9814a]" />
            <span>Aura Coffee Co.</span>
          </div>

          <h1 className="max-w-lg font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-[#f3ede2] sm:text-[3.5rem] lg:text-[4rem]">
            Coffee that earns its place in your morning.
          </h1>

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#f3ede2]/60">
            Small-batch beans, roasted in short runs and shipped within days of
            roasting. No filler blends, no shelf-stale bags.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <button className="group inline-flex items-center gap-3 rounded-sm bg-[#f3ede2] px-6 py-3.5 text-sm font-medium text-[#141110] transition-colors hover:bg-[#b9814a] hover:text-[#141110]">
              Shop the roast list
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <a
              href="#story"
              className="text-sm text-[#f3ede2]/70 underline decoration-[#f3ede2]/25 underline-offset-[6px] transition-colors hover:text-[#f3ede2] hover:decoration-[#b9814a]">
              Our roasting process
            </a>
          </div>

          {/* quiet stat row — no icons, no cards, just numbers earning their place */}
          <div className="mt-16 flex gap-10 border-t border-[#f3ede2]/10 pt-6">
            <div>
              <p className="font-serif text-2xl text-[#f3ede2]">12</p>
              <p className="mt-1 text-xs text-[#f3ede2]/45">
                origins in rotation
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#f3ede2]">48hr</p>
              <p className="mt-1 text-xs text-[#f3ede2]/45">
                roast to doorstep
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#f3ede2]">4.9</p>
              <p className="mt-1 text-xs text-[#f3ede2]/45">
                avg. customer rating
              </p>
            </div>
          </div>
        </div>

        {/* Right: image, bleeding to the edge, headline overlaps its corner */}
        <div className="order-1 relative -mx-6 aspect-[4/5] lg:order-2 lg:-mx-0 lg:h-[86vh] lg:aspect-auto">
          <img
            src={heroImg}
            alt="Fresh espresso being pulled"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141110]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#141110]/30 lg:via-transparent lg:to-transparent" />

          {/* SKU-style tag — legitimate here because it IS a product identifier */}
          <div className="absolute bottom-6 left-6 rounded-sm bg-[#141110]/70 px-3 py-2 backdrop-blur-sm">
            <p className="text-[11px] text-[#f3ede2]/70">
              No. 014 — Ethiopia Guji, washed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
