import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5eee2] text-[#432519]">
      {/* Footer */}
      <div className="relative mt-[35px] bg-[#f5eee2]">
        <div className="relative z-20 mx-auto max-w-7xl px-6 pb-[150px] pt-[45px] sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="font-serif">
                <div className="relative inline-block text-[28px] font-bold leading-none tracking-[-1.5px]">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-normal tracking-[1px]">
                    THE
                  </span>
                  AURA
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#9b7252]" />

                  <span className="text-[11px] italic">Coffee</span>

                  <span className="h-px w-5 bg-[#9b7252]" />
                </div>
              </div>

              <p className="mt-5 max-w-[230px] text-[13px] leading-6 text-[#765847]">
                Thoughtfully roasted coffee for slow mornings, meaningful
                moments, and everyday rituals.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex gap-2.5">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8916c] text-[#956b49] transition-all duration-300 hover:bg-[#956b49] hover:text-white">
                  <FaFacebookF size={11} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8916c] text-[#956b49] transition-all duration-300 hover:bg-[#956b49] hover:text-white">
                  <FaInstagram size={11} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8916c] text-[#956b49] transition-all duration-300 hover:bg-[#956b49] hover:text-white">
                  <FaLinkedinIn size={11} />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-[#5b3828]">
                Shop
              </h3>

              <ul className="space-y-3 text-[13px] text-[#765847]">
                <li>
                  <Link
                    to="/shop"
                    className="transition-colors hover:text-[#a96f42]">
                    All Coffee
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="transition-colors hover:text-[#a96f42]">
                    Bestsellers
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="transition-colors hover:text-[#a96f42]">
                    Collections
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="transition-colors hover:text-[#a96f42]">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-[#5b3828]">
                Explore
              </h3>

              <ul className="space-y-3 text-[13px] text-[#765847]">
                <li>
                  <Link
                    to="/"
                    className="transition-colors hover:text-[#a96f42]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="transition-colors hover:text-[#a96f42]">
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    to="/brews"
                    className="transition-colors hover:text-[#a96f42]">
                    Brews
                  </Link>
                </li>

                <li>
                  <Link
                    to="/gear"
                    className="transition-colors hover:text-[#a96f42]">
                    Gear
                  </Link>
                </li>

                <li>
                  <Link
                    to="/accessories"
                    className="transition-colors hover:text-[#a96f42]">
                    Accessories
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-[#a96f42]">
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/subscribe"
                    className="transition-colors hover:text-[#a96f42]">
                    Subscribe
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div id="newsletter">
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-[#5b3828]">
                Stay in the loop
              </h3>

              <p className="mb-5 max-w-[250px] text-[13px] leading-6 text-[#765847]">
                Get coffee inspiration, new releases, and special offers in your
                inbox.
              </p>

              <div className="flex max-w-[280px] border-b border-[#a98a6f] pb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent text-[12px] text-[#432519] outline-none placeholder:text-[#9a7b65]"
                />

                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5a3523] text-white transition-all hover:bg-[#8b5c3d]">
                  <FaArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-[#d8c6aa]" />

          {/* Bottom Footer */}
          <div className="flex flex-col gap-3 pt-5 text-[10px] tracking-wide text-[#8b6d57] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Aura Coffee. All rights reserved.
            </p>

            <div className="flex gap-5">
              <Link
                to="/privacy"
                className="transition-colors hover:text-[#5a3523]">
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-[#5a3523]">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Coffee Beans */}
        <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden">
          <img
            src="/coffee-beans-pile.png"
            alt=""
            className="block h-auto w-full max-w-none object-cover object-bottom [image-rendering:auto]"
          />
        </div>
      </div>
    </footer>
  );
}
