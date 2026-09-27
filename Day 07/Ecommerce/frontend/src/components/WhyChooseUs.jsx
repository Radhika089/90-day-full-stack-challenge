const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff6e5] px-6 py-24 font-sans sm:px-10">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d99555] opacity-[0.10] blur-[100px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#9a6748]">
          WHY CHOOSE US
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-[#3a1407] sm:text-5xl">
          Crafted carefully,
          <span className="ml-2 font-normal italic text-[#8a573b]">
            from bean to cup.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#76584a]">
          From carefully selected beans to the final roast, every detail is
          considered to make your everyday coffee taste better.
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-3">
        {/* Left benefits */}
        <div className="space-y-10 text-center md:text-right">
          <div>
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-end">
              <span className="text-xl">☕</span>
              <h3 className="text-lg font-semibold text-[#3a1407]">
                Premium Beans
              </h3>
            </div>

            <p className="text-sm leading-6 text-[#76584a]">
              Carefully selected beans for a smooth, memorable cup.
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-end">
              <span className="text-xl">✦</span>
              <h3 className="text-lg font-semibold text-[#3a1407]">
                Expert Roasting
              </h3>
            </div>

            <p className="text-sm leading-6 text-[#76584a]">
              Small-batch roasted to bring out the character of every bean.
            </p>
          </div>
        </div>

        {/* Center coffee */}
        <div className="relative flex justify-center">
          <div className="absolute bottom-8 h-28 w-48 rounded-full bg-[#8a4b28]/20 blur-3xl" />

          <img
            src="/coffeeCup.png"
            alt="Fresh coffee"
            className="relative z-10 h-[330px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:-translate-y-2"
          />

          {/* Small badge */}
          <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#d9b895] bg-[#fffaf2]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#704332] shadow-sm backdrop-blur-sm">
            Roasted with care
          </div>
        </div>

        {/* Right benefits */}
        <div className="space-y-10 text-center md:text-left">
          <div>
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
              <span className="text-xl">🌱</span>
              <h3 className="text-lg font-semibold text-[#3a1407]">
                Freshly Packed
              </h3>
            </div>

            <p className="text-sm leading-6 text-[#76584a]">
              Sealed fresh to help preserve aroma and flavour.
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
              <span className="text-xl">♡</span>
              <h3 className="text-lg font-semibold text-[#3a1407]">
                Made for Every Day
              </h3>
            </div>

            <p className="text-sm leading-6 text-[#76584a]">
              Great coffee designed for your everyday brewing ritual.
            </p>
          </div>
        </div>
      </div>

      {/* Organic brown bottom */}
      <div
        className="absolute bottom-[-1px] left-0 z-20 h-20 w-full bg-[#431b0d]"
        style={{ clipPath: "ellipse(70% 70% at 50% 100%)" }}
      />
    </section>
  );
};

export default WhyChooseUs;
