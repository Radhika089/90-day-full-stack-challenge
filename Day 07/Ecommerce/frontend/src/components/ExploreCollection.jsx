import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../utils/constant";

const ExploreCollection = () => {
  const collections = [
    {
      name: "Brews",
      label: "COFFEE",
      description: "Freshly roasted beans for every kind of coffee moment.",
      link: "/brews",
      products: products
        .filter((product) => product.category === "brews")
        .slice(0, 3),
      bg: "#ead7c0",
    },
    {
      name: "Gear",
      label: "BREWING TOOLS",
      description: "Thoughtful tools to help you brew a better cup at home.",
      link: "/gear",
      products: products
        .filter((product) => product.category === "gear")
        .slice(0, 3),
      bg: "#e4ddd1",
    },
    {
      name: "Accessories",
      label: "COFFEE RITUAL",
      description: "Beautiful everyday pieces made for your coffee ritual.",
      link: "/accessories",
      products: products
        .filter((product) => product.category === "accessories")
        .slice(0, 3),
      bg: "#ead8cc",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff6e5] px-5 py-20 font-sans sm:px-8 md:px-10 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#d99555] opacity-[0.07] blur-[120px]" />

      {/* Decorative sparkles */}
      <div className="pointer-events-none absolute left-[8%] top-[20%] z-0 text-xl text-[#b87543] opacity-25">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[9%] top-[35%] z-0 text-lg text-[#b87543] opacity-25">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[15%] left-[15%] z-0 text-lg text-[#b87543] opacity-20">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b96447]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#76584a]">
              EXPLORE THE COLLECTION
            </p>

            <span className="h-2.5 w-2.5 rounded-full bg-[#b96447]" />
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#3a1407] sm:text-5xl">
            Everything for your
            <span className="ml-2 font-normal italic text-[#8a573b]">
              coffee ritual.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#76584a]">
            From freshly roasted beans to the tools and little details that make
            every cup feel better.
          </p>
        </div>

        {/* Collections */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              to={collection.link}
              className="group flex flex-col items-center text-center">
              {/* Circle */}
              <div
                className="relative flex h-[290px] w-[290px] items-center justify-center rounded-full transition-transform duration-500 group-hover:-translate-y-2 sm:h-[330px] sm:w-[330px]"
                style={{ backgroundColor: collection.bg }}>
                {/* Inner circle */}
                <div className="absolute inset-5 rounded-full border border-[#ffffff]/50" />

                {/* Product 1 */}
                {collection.products[0] && (
                  <img
                    src={collection.products[0].image}
                    alt={collection.products[0].name}
                    className="absolute left-[12%] top-[25%] z-10 h-[145px] w-[105px] rotate-[-8deg] object-cover shadow-xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:-rotate-12 group-hover:scale-105 sm:h-[160px] sm:w-[115px]"
                  />
                )}

                {/* Product 2 */}
                {collection.products[1] && (
                  <img
                    src={collection.products[1].image}
                    alt={collection.products[1].name}
                    className="absolute right-[10%] top-[18%] z-20 h-[155px] w-[110px] rotate-[7deg] object-cover shadow-2xl transition-transform duration-700 group-hover:translate-x-2 group-hover:rotate-12 group-hover:scale-105 sm:h-[175px] sm:w-[120px]"
                  />
                )}

                {/* Product 3 */}
                {collection.products[2] && (
                  <img
                    src={collection.products[2].image}
                    alt={collection.products[2].name}
                    className="absolute bottom-[12%] left-1/2 z-30 h-[135px] w-[100px] -translate-x-1/2 rotate-[-3deg] object-cover shadow-xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-105 sm:h-[150px] sm:w-[110px]"
                  />
                )}

                {/* Small label */}
                <div className="absolute bottom-[-10px] left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#dcc8ae] bg-[#fffaf2] px-4 py-2 shadow-sm">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#704332]">
                    {collection.label}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="mt-9 max-w-[300px]">
                <h3 className="text-2xl font-semibold tracking-tight text-[#3a1407] transition-colors duration-300 group-hover:text-[#8a573b]">
                  {collection.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#76584a]">
                  {collection.description}
                </p>

                <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#3a1407]">
                  <span className="border-b border-[#3a1407] pb-1">
                    Explore {collection.name.toLowerCase()}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3a1407] text-[#fffaf2] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={14} />
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

export default ExploreCollection;
