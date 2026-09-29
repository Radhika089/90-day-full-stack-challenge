import React, { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { getProducts } from "../api/productApi";

const CollectionPage = ({
  title = "Shop Our Coffee",
  description = "Explore our collection of small-batch coffees, brewing gear, and everyday coffee essentials.",
  category = "all",
  bannerImage = "/hero2.jpg",
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRoast, setSelectedRoast] = useState("all");
  const [sortBy, setSortBy] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  const productsPerPage = 8;

  const categories = [
    { label: "All", value: "all" },
    { label: "Coffee Beans", value: "brews" },
    { label: "Brewing Gear", value: "gear" },
    { label: "Accessories", value: "accessories" },
  ];

  const visibleCategories =
    category === "all"
      ? categories
      : categories.filter(
          (item) => item.value === "all" || item.value === category,
        );

  const roastOptions = ["all", "Light", "Medium", "Dark"];

  const availableProducts = useMemo(() => {
    if (category === "all") {
      return products;
    }

    return products.filter((product) => product.category === category);
  }, [category, products]);

  const filteredProducts = useMemo(() => {
    let result = [...availableProducts];

    if (category === "all" && selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (selectedRoast !== "all") {
      result = result.filter((product) => product.roast === selectedRoast);
    }

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [availableProducts, category, selectedCategory, selectedRoast, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleRoastChange = (value) => {
    setSelectedRoast(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();

      console.log("API DATA:", data);

      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-[#fffaf2] font-sans text-[#3a1407]">
      {/* TOP BANNER */}
      <section className="relative h-[180px] w-full overflow-hidden sm:h-[210px] md:h-[230px]">
        <img src={bannerImage} alt="" className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-[#2b1208]/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
            <div className="max-w-xl">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e5b98f]">
                AURA COFFEE CO.
              </p>

              <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#fff8ed] sm:text-4xl">
                {title}
              </h1>

              <p className="mt-2 max-w-md text-xs leading-5 text-[#ead6c5] sm:text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="bg-[#fffaf2] px-5 py-5 sm:px-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs">
            <Link
              to="/"
              className="text-xs text-[#8a6d5b] transition hover:text-[#a9582d]">
              Home
            </Link>

            <span className="text-xs text-[#c3a991]">/</span>

            <span className="text-xs font-semibold text-[#3a1407]">
              {title}
            </span>
          </div>
        </div>
      </section>

      {/* SHOP AREA */}
      <section className="px-5 pb-20 pt-2 sm:px-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[210px_1fr]">
            {/* FILTER SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 border-b border-[#e5d7c7] pb-4">
                  <SlidersHorizontal size={15} className="text-[#76584a]" />

                  <h2 className="text-sm font-semibold text-[#3a1407]">
                    Filter
                  </h2>
                </div>

                {/* Categories */}
                <div className="border-b border-[#e5d7c7] py-6">
                  <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#806858]">
                    Categories
                  </h3>

                  <div className="space-y-3">
                    {visibleCategories.map((item) => (
                      <label
                        key={item.value}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#76584a]">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === item.value}
                          onChange={() => handleCategoryChange(item.value)}
                          className="h-3.5 w-3.5 accent-[#3a1407]"
                        />

                        <span
                          className={
                            selectedCategory === item.value
                              ? "font-semibold text-[#3a1407]"
                              : ""
                          }>
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Roast */}
                <div className="py-6">
                  <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#806858]">
                    Roast Level
                  </h3>

                  <div className="space-y-3">
                    {roastOptions.map((item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 text-sm text-[#76584a]">
                        <input
                          type="radio"
                          name="roast"
                          checked={selectedRoast === item}
                          onChange={() => handleRoastChange(item)}
                          className="h-3.5 w-3.5 accent-[#3a1407]"
                        />

                        <span
                          className={
                            selectedRoast === item
                              ? "font-semibold text-[#3a1407]"
                              : ""
                          }>
                          {item === "all" ? "All" : item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedRoast("all");
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-[6px] bg-[#3a1407] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#54200f]">
                  Reset Filters
                </button>
              </div>
            </aside>

            {/* PRODUCTS */}
            <div>
              {/* MOBILE FILTERS + SORT */}
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:mb-7">
                <div>
                  <p className="text-xs text-[#806858]">
                    Showing{" "}
                    <span className="font-semibold text-[#3a1407]">
                      {filteredProducts.length}
                    </span>{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Mobile category */}
                  <div className="relative lg:hidden">
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="appearance-none rounded-full border border-[#ddcbb7] bg-[#fffaf2] py-2.5 pl-4 pr-9 text-xs font-medium text-[#5c3929] outline-none">
                      {categories.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={13}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#806858]"
                    />
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="appearance-none rounded-full border border-[#ddcbb7] bg-[#fffaf2] py-2.5 pl-4 pr-9 text-xs font-medium text-[#5c3929] outline-none">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>

                    <ChevronDown
                      size={13}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#806858]"
                    />
                  </div>
                </div>
              </div>

              {/* PRODUCT GRID */}
              {visibleProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
                  {visibleProducts.map((product) => (
                    <Product product={product} key={product._id} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[16px] border border-dashed border-[#ddcbb7] bg-[#fffaf2] px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e2cf] text-xl">
                    ☕
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-[#3a1407]">
                    No products found
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#806858]">
                    Try changing your filters to discover more from our
                    collection.
                  </p>

                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedRoast("all");
                      setCurrentPage(1);
                    }}
                    className="mt-5 rounded-full bg-[#3a1407] px-5 py-2.5 text-xs font-semibold text-white">
                    Clear filters
                  </button>
                </div>
              )}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="mt-14 flex items-center justify-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ddcbb7] bg-[#fffaf2] text-[#76584a] transition hover:bg-[#f1e2cf] disabled:cursor-not-allowed disabled:opacity-40">
                    <ChevronLeft size={15} />
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition ${currentPage === page ? "bg-[#3a1407] text-white" : "border border-[#ddcbb7] bg-[#fffaf2] text-[#76584a] hover:bg-[#f1e2cf]"}`}>
                      {page}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ddcbb7] bg-[#fffaf2] text-[#76584a] transition hover:bg-[#f1e2cf] disabled:cursor-not-allowed disabled:opacity-40">
                    <ChevronRight size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
