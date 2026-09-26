import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Espresso",
    description: "Bold, rich and full of character.",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    link: "/brews",
  },
  {
    title: "Cold Brew",
    description: "Smooth, refreshing and easy going.",
    image: "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg",
    link: "/brews",
  },
  {
    title: "House Blends",
    description: "Balanced coffee for every day.",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    link: "/brews",
  },
];

const ShopCategory = () => {
  return (
    <section className="bg-[#fdfbf7] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#b96447]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b96447]">
                Explore Aura
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#1f2f2e] sm:text-4xl">
              Find your coffee mood.
            </h2>
          </div>

          <Link
            to="/brews"
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-[#1f2f2e]">
            <span className="border-b border-[#1f2f2e] pb-1">Explore all</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f2f2e] transition-all duration-300 group-hover:bg-[#1f2f2e] group-hover:text-[#fdfbf7]">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative h-[430px] overflow-hidden rounded-[2rem] bg-[#1f2f2e]">
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2f2e]/90 via-[#1f2f2e]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-[#fdfbf7]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-[#fdfbf7]/75">
                      {category.description}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdfbf7] text-[#1f2f2e] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
