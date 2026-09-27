const FeaturedCoffee = () => {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#fff6e5] font-sans">
      <div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-[380px] w-[500px] -translate-x-1/2 rounded-full bg-[#e9b06d] opacity-[0.20] blur-[80px] sm:-top-32 sm:h-[450px] sm:w-[600px] md:h-[500px] md:w-[700px] md:blur-[100px]" />
      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none">
        <path
          d="M0 55 C180 -5 350 80 540 50 C760 10 850 85 1060 50 C1230 25 1340 65 1440 20 L1440 730 C1280 790 1130 720 960 750 C760 785 620 715 430 750 C250 780 120 720 0 765 Z"
          fill="#431b0d"
        />
      </svg>

      {/*  BACKGROUND GLOW  */}

      <div className="pointer-events-none absolute left-[-100px] top-[30%] z-0 h-[350px] w-[350px] rounded-full bg-[#a45a2d] opacity-20 blur-[110px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[20%] z-0 h-[400px] w-[400px] rounded-full bg-[#d08343] opacity-10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[5%] left-1/2 z-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#a45a2d] opacity-10 blur-[110px]" />

      {/*  DECORATIVE COFFEE BEANS  */}

      <img
        src="/beans.png"
        alt=""
        className="pointer-events-none absolute left-[-20px] top-[35%] z-10 w-36 rotate-[-20deg] opacity-20 md:left-5 md:w-44"
      />

      <img
        src="/heartbeans.png"
        alt=""
        className="pointer-events-none absolute bottom-[8%] right-[-20px] z-10 w-40 rotate-[15deg] opacity-20 md:right-5 md:w-48"
      />

      {/*  CATEGORY BADGES  */}
      <div className="relative z-30 mx-auto flex max-w-4xl flex-nowrap items-center justify-center gap-3 overflow-x-auto px-4 pt-6 pb-2 md:gap-4">
        {[
          "Light Roast",
          "Medium Roast",
          "Dark Roast",
          "Cold Brew",
          "Decaf",
          "Whole Bean",
        ].map((label) => (
          <button
            key={label}
            className={`shrink-0 whitespace-nowrap rounded-full px-6 py-4 text-xs rotate-3 font-semibold shadow-md transition hover:-translate-y-1 ${
              label === "Medium Roast"
                ? "bg-[#d88d48] text-[#431b0d]"
                : "bg-[#fff6e5] text-[#431b0d]"
            }`}>
            {label}
          </button>
        ))}
      </div>

      {/*  FEATURED CONTENT  */}
      <div className="relative z-20 mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 pb-24 pt-10 sm:pt-14 md:grid-cols-2 md:gap-12 md:px-10 md:pb-28 md:pt-16">
        {/*  PRODUCT IMAGE  */}

        <div className="relative flex min-h-[330px] items-center justify-center md:min-h-[420px]">
          {/* Product glow */}

          <div className="absolute h-[250px] w-[250px] rounded-full bg-[#e4a15d] opacity-20 blur-[70px] md:h-[330px] md:w-[330px]" />

          {/* beans */}

          <img
            src="/beans.png"
            alt=""
            className="absolute left-[12%] top-[20%] z-10 w-20 rotate-[-25deg] opacity-20 md:left-[8%] md:w-24"
          />

          {/* Product image */}

          <img
            src="/product.webp"
            alt="Whole Bean Coffee — Medium Roast"
            className="relative z-20 h-[300px] w-[225px] rotate-[-4deg] rounded-[18px] object-cover shadow-2xl shadow-black/30 sm:h-[340px] sm:w-[255px] md:h-[390px] md:w-[290px]"
          />

          {/* Featured badge */}

          <div className="absolute right-[10%] top-[12%] z-30 flex h-20 w-20 rotate-[8deg] items-center justify-center rounded-full bg-[#e09a54] text-center text-[9px] font-bold uppercase leading-4 text-[#431b0d] shadow-xl sm:h-24 sm:w-24 sm:text-[10px] md:right-[13%] md:top-[10%]">
            Featured
            <br />
            Coffee
          </div>
        </div>

        {/*  PRODUCT DETAILS  */}

        <div className="relative z-20 mx-auto max-w-md text-center md:mx-0 md:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d9a46f] sm:text-xs">
            Featured Roast
          </p>

          <h2 className="mt-2 text-3xl font-medium text-[#fff6e5] sm:text-4xl md:text-5xl">
            Medium Roast Whole Bean
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#d8b9a2] sm:text-base sm:leading-7">
            Notes of caramel and toasted hazelnut, roasted in small batches and
            shipped within 48 hours of roasting. Best brewed within 3 weeks.
          </p>

          {/* Rating */}

          <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
            <span className="text-sm tracking-wide text-[#e4a15d]">★★★★★</span>

            <span className="text-xs text-[#c9a995]">4.8 · 124 reviews</span>
          </div>

          {/* Price + Cart */}

          <div className="mt-6 flex items-center justify-center gap-5 md:justify-start">
            <div>
              <p className="text-2xl font-semibold text-[#fff6e5] sm:text-3xl">
                ₹475
              </p>

              <p className="text-xs text-[#b99581]">250g</p>
            </div>

            <button className="rounded-full bg-[#e09a54] px-6 py-3 text-xs font-semibold text-[#431b0d] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#efad65] sm:px-7 sm:py-3.5 sm:text-sm">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/*  BOTTOM CURVE  */}

      <div
        className="pointer-events-none absolute bottom-[-1px] left-0 z-30 h-10 w-full bg-[#fff6e5]"
        style={{ clipPath: "ellipse(65% 45% at 50% 100%)" }}
      />
    </section>
  );
};

export default FeaturedCoffee;
