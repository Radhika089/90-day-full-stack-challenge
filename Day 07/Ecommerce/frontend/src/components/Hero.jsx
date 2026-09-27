const Hero = () => {
  return (
    <div className="relative min-h-[540px] overflow-hidden bg-[#fff6e5] px-4 py-4 font-sans sm:px-6 md:min-h-[650px] md:px-10">
      {/*  BACKGROUND  */}

      <div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-[380px] w-[500px] -translate-x-1/2 rounded-full bg-[#e9b06d] opacity-[0.20] blur-[80px] sm:-top-32 sm:h-[450px] sm:w-[600px] md:h-[500px] md:w-[700px] md:blur-[100px]" />

      <div className="pointer-events-none absolute -left-40 top-[35%] z-0 h-[300px] w-[300px] rounded-full bg-[#a95c32] opacity-[0.08] blur-[90px] md:h-[420px] md:w-[420px] md:blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 top-[15%] z-0 h-[320px] w-[320px] rounded-full bg-[#e18b43] opacity-[0.10] blur-[90px] md:h-[450px] md:w-[450px] md:blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 z-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#c8753c] opacity-[0.08] blur-[90px] md:bottom-[-250px] md:h-[500px] md:w-[850px] md:blur-[110px]" />

      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.10] md:opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(#b97845 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* DECORATIVE IMAGES */}

      {/* Top left coffee cup */}
      <img
        src="/coffeeCup.png"
        alt=""
        className="pointer-events-none absolute left-[-5px] top-24 z-0 w-20 rotate-[-15deg] opacity-50 sm:left-4 sm:w-24 md:left-8 md:top-24 md:w-32 md:opacity-70"
      />

      {/* Top right beans */}
      <img
        src="/beans.png"
        alt=""
        className="pointer-events-none absolute right-[-5px] top-20 z-0 w-24 rotate-[15deg] opacity-20 sm:right-4 sm:w-28 md:right-8 md:w-36 md:opacity-30"
      />

      {/* Bottom left coffee flowers */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/057/177/080/non_2x/fresh-coffee-flowers-alongside-roasted-coffee-beans-on-a-clean-transparent-background-fresh-coffee-flower-on-transparent-background-free-png.png"
        alt=""
        className="pointer-events-none absolute bottom-[-5px] left-[-10px] z-0 w-28 rotate-[15deg] opacity-60 sm:left-4 sm:w-32 md:bottom-[-30px] md:left-12 md:w-40 md:rotate-[20deg] md:opacity-80"
      />

      {/* Bottom right beans */}
      <img
        src="/heartbeans.png"
        alt=""
        className="pointer-events-none absolute bottom-[-10px] right-[-10px] z-0 w-28 rotate-[-20deg] opacity-20 sm:right-4 sm:w-32 md:bottom-[-30px] md:right-12 md:w-40 md:opacity-30"
      />

      {/* SPARKLES */}

      <div className="pointer-events-none absolute left-[8%] top-[34%] z-0 text-lg text-[#b87543] opacity-25 sm:left-[12%] md:left-[14%] md:text-xl md:opacity-30">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[36%] z-0 text-xl text-[#b87543] opacity-25 sm:right-[12%] md:right-[17%] md:text-2xl md:opacity-30">
        ✦
      </div>

      <div className="pointer-events-none absolute left-[12%] bottom-[18%] z-0 text-base text-[#b87543] opacity-20 sm:left-[18%] md:left-[22%] md:text-lg md:opacity-25">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[12%] bottom-[20%] z-0 text-base text-[#b87543] opacity-20 sm:right-[18%] md:right-[23%] md:text-lg md:opacity-25">
        ✦
      </div>

      {/* HERO CONTENT */}

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Small label */}
        <div className="mb-1 flex justify-center">
          <span className="rounded-full border border-[#d9b895] bg-[#fffaf2]/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8a573b] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
            Small batch · Freshly roasted
          </span>
        </div>

        {/* Heading */}
        <h1 className="relative z-30 text-center text-3xl font-medium tracking-[-0.02em] text-[#3a1407] sm:text-4xl md:text-5xl lg:text-6xl">
          Freshly Brewed Coffee
        </h1>

        {/* Supporting Copy */}
        <p className="relative z-30 mx-auto mt-2 max-w-[330px] text-center text-xs leading-5 text-[#76584a] sm:max-w-lg sm:text-sm sm:leading-6 md:text-base">
          Small-batch beans, roasted weekly and delivered fresh for a richer,
          more satisfying cup.
        </p>

        {/* COFFEE IMAGES */}

        <div className="relative mx-auto mt-3 h-[285px] w-full max-w-6xl sm:mt-4 sm:h-[330px] md:mt-5 md:h-[350px]">
          {/* Left Image */}
          <div className="absolute left-[1%] top-7 z-10 rotate-[7deg] overflow-hidden rounded-[10px] shadow-xl shadow-[#5b2b18]/15 sm:left-[7%] sm:top-5 sm:rounded-[12px] md:left-[16%]">
            <img
              src="/hero1.webp"
              alt="Freshly brewed coffee"
              className="h-[205px] w-[145px] object-cover brightness-[0.94] saturate-[0.92] sepia-[0.06] sm:h-[250px] sm:w-[200px] md:h-[300px] md:w-[260px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#a8663e]/10 mix-blend-multiply" />
          </div>

          {/* Center Image */}
          <img
            src="/hero3.avif"
            alt="Coffee cup"
            className="absolute left-1/2 top-2 z-30 h-[225px] w-[155px] -translate-x-1/2 rotate-[-4deg] rounded-[10px] object-cover shadow-2xl shadow-[#5b2b18]/20 sm:top-2 sm:h-[275px] sm:w-[215px] sm:rounded-[12px] md:top-5 md:h-[300px] md:w-[260px]"
          />

          {/* Right Image */}
          <img
            src="/hero2.jpg"
            alt="Coffee"
            className="absolute right-[1%] top-10 z-20 h-[205px] w-[145px] rotate-[9deg] rounded-[10px] object-cover shadow-xl shadow-[#5b2b18]/15 sm:right-[7%] sm:top-7 sm:h-[250px] sm:w-[200px] sm:rounded-[12px] md:right-[16%] md:top-8 md:h-[300px] md:w-[260px]"
          />

          {/* Floating label */}
          <div className="absolute bottom-0 left-1/2 z-40 -translate-x-1/2 rounded-full border border-[#dcc1a3] bg-[#fffaf1]/90 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#704332] shadow-sm backdrop-blur-sm sm:left-[13%] sm:translate-x-0 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.15em] md:left-[13%]">
            Roasted with care
          </div>
        </div>

        {/*  CTA  */}

        <div className="relative z-30 mt-1 flex items-center justify-center gap-4 sm:mt-2 sm:gap-5">
          <button className="rounded-full bg-[#3a1407] px-6 py-3 text-xs font-medium text-white shadow-lg shadow-[#3a1407]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#54200f] sm:px-8 sm:py-3.5 sm:text-sm">
            Shop now
          </button>

          <a
            href="#"
            className="text-xs font-medium text-[#5c3929] underline decoration-[#c9a17d] underline-offset-4 transition hover:text-[#a9582d] sm:text-sm">
            Our story
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
