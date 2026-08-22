import React from "react";

import about from "../assets/about/about.jpg";

const About = () => {
  return (
    <div className="bg-[#b96447] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-20">
          <img
            src={about}
            alt="about"
            className="h-full w-90 rounded-tr-[12rem]"
          />

          <div>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">
              Our Story
            </span>

            <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">
              Made with passion,
              <br />
              served with warmth.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/80">
              What started with a simple love for good coffee has grown into a
              place where people come to slow down, connect, and enjoy the
              little moments. We believe great coffee is more than just a drink
              — it’s an experience worth sharing.
            </p>

            <p className="mt-4 max-w-lg text-base leading-7 text-white/80">
              From carefully selected beans to every cup we serve, we put
              passion into the details so you can simply sit back, sip, and stay
              awhile.
            </p>

            <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#b96447] transition hover:bg-[#f5e8df]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
