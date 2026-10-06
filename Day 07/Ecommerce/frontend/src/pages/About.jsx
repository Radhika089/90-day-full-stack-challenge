import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <main className="bg-[#fffaf2] text-[#3a1407]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[3px] text-[#9a4f28]">
              Our Story
            </p>

            <h1 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Coffee made for the moments that matter.
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#765847]">
              At AURA, we believe coffee is more than a morning habit. It is the
              quiet start to a busy day, the conversation shared with someone
              you love, and the little ritual that makes an ordinary moment feel
              special.
            </p>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#765847]">
              We carefully source and roast our coffee with one simple idea in
              mind — make every cup worth slowing down for.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3a1407] px-6 py-3 text-sm text-white transition hover:bg-[#5c2410]">
              Explore Our Coffee
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[28px]">
            <img
              src="/hero3.avif"
              alt="AURA Coffee"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f5eee2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#9a4f28]">
              What We Believe
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Simple coffee. Thoughtfully made.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#765847]">
              From the beans we choose to the way we package every order, we
              care about the details that turn good coffee into a great daily
              ritual.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#fffaf2] p-7">
              <h3 className="font-serif text-xl">Freshly Roasted</h3>
              <p className="mt-3 text-sm leading-6 text-[#765847]">
                Coffee roasted with care so every cup feels fresh, balanced, and
                full of character.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fffaf2] p-7">
              <h3 className="font-serif text-xl">Thoughtful Sourcing</h3>
              <p className="mt-3 text-sm leading-6 text-[#765847]">
                We believe great coffee starts with great beans and respect for
                where they come from.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fffaf2] p-7">
              <h3 className="font-serif text-xl">Everyday Rituals</h3>
              <p className="mt-3 text-sm leading-6 text-[#765847]">
                Coffee should fit naturally into your life — from slow mornings
                to busy afternoons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
        <p className="font-serif text-3xl leading-tight sm:text-4xl">
          Take a moment. Make a cup. Find your AURA.
        </p>

        <Link
          to="/subscribe"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#9a4f28] transition hover:text-[#3a1407]">
          Make coffee part of your ritual
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
};

export default About;
