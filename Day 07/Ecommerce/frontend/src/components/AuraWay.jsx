import { DotCluster } from "./HeroDoodles";

const AuraWay = () => {
  return (
    <section className="relative mt-4 overflow-hidden bg-[#dfeacf] px-6 pb-28 pt-24 text-[#1f2f2e]">
      <div className="absolute left-0 top-[-1px] w-full">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="block h-[85px] w-full sm:h-[110px] md:h-[135px]">
          <path
            d="
                M0 65
                C100 25 180 45 275 68
                C380 94 430 110 535 75
                C650 38 710 35 810 70
                C920 108 1010 110 1110 70
                C1210 30 1300 55 1440 15
                L1440 0
                L0 0
                Z
              "
            fill="#fdfbf7"
          />
        </svg>
      </div>

      <DotCluster className="left-8 top-28 md:left-24 md:top-36" />
      <DotCluster className="right-8 top-28 md:right-24 md:top-36" />

      <div className="relative z-10 mx-auto max-w-3xl pt-16 text-center">
        <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#1f2f2e]/50">
          The Aura way
        </p>

        <h2
          className="
              text-3xl
              font-bold
              leading-[1.08]
              tracking-[-0.045em]
              sm:text-4xl
              md:text-5xl
            ">
          Living life in balance
          <br />
          calls for a smarter
          <br />
          cup of coffee.
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-[#1f2f2e]/65">
          We keep coffee simple — thoughtfully selected beans, careful brewing,
          and a cup worth slowing down for.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-[#fdfbf7]/65 p-6 backdrop-blur-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f9dcc4] text-lg">
            ☕
          </div>

          <h3 className="mt-5 text-base font-semibold">Smooth & refreshing</h3>

          <p className="mt-2 text-xs leading-5 text-[#1f2f2e]/60">
            Clean, balanced coffee made for your everyday ritual.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#fdfbf7]/65 p-6 backdrop-blur-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f9dcc4] text-lg">
            ✦
          </div>

          <h3 className="mt-5 text-base font-semibold">Thoughtfully made</h3>

          <p className="mt-2 text-xs leading-5 text-[#1f2f2e]/60">
            Quality beans and careful brewing without unnecessary fuss.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#fdfbf7]/65 p-6 backdrop-blur-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f9dcc4] text-lg">
            ↗
          </div>

          <h3 className="mt-5 text-base font-semibold">
            Made for slow moments
          </h3>

          <p className="mt-2 text-xs leading-5 text-[#1f2f2e]/60">
            Morning routines, afternoon resets, and everything between.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuraWay;
