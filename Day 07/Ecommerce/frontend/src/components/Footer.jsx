import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const beans = [
  // bottom pile
  { x: 0, y: 78, r: -18, w: 30 },
  { x: 3, y: 65, r: 28, w: 22 },
  { x: 6, y: 82, r: -8, w: 27 },
  { x: 9, y: 58, r: 42, w: 20 },
  { x: 12, y: 73, r: -25, w: 29 },
  { x: 15, y: 88, r: 15, w: 25 },
  { x: 18, y: 62, r: -35, w: 21 },
  { x: 21, y: 76, r: 18, w: 30 },
  { x: 24, y: 90, r: -15, w: 25 },
  { x: 27, y: 66, r: 38, w: 21 },
  { x: 30, y: 82, r: -28, w: 29 },
  { x: 33, y: 58, r: 15, w: 22 },
  { x: 36, y: 76, r: 45, w: 28 },
  { x: 39, y: 91, r: -20, w: 24 },
  { x: 42, y: 67, r: 30, w: 20 },
  { x: 45, y: 83, r: -40, w: 29 },
  { x: 48, y: 59, r: 18, w: 23 },
  { x: 51, y: 76, r: -25, w: 30 },
  { x: 54, y: 90, r: 35, w: 24 },
  { x: 57, y: 67, r: -12, w: 21 },
  { x: 60, y: 82, r: 28, w: 29 },
  { x: 63, y: 57, r: -35, w: 22 },
  { x: 66, y: 76, r: 15, w: 27 },
  { x: 69, y: 90, r: -25, w: 24 },
  { x: 72, y: 64, r: 40, w: 21 },
  { x: 75, y: 80, r: -15, w: 30 },
  { x: 78, y: 58, r: 25, w: 22 },
  { x: 81, y: 74, r: -30, w: 28 },
  { x: 84, y: 90, r: 18, w: 24 },
  { x: 87, y: 65, r: 42, w: 21 },
  { x: 90, y: 79, r: -18, w: 29 },
  { x: 93, y: 59, r: 28, w: 23 },
  { x: 96, y: 82, r: -25, w: 28 },
  { x: 99, y: 70, r: 35, w: 21 },

  // second scattered layer
  { x: 4, y: 43, r: 15, w: 18 },
  { x: 8, y: 34, r: -25, w: 16 },
  { x: 13, y: 48, r: 35, w: 19 },
  { x: 18, y: 39, r: -12, w: 17 },
  { x: 23, y: 51, r: 28, w: 18 },
  { x: 28, y: 36, r: -35, w: 16 },
  { x: 34, y: 47, r: 20, w: 18 },
  { x: 40, y: 38, r: -25, w: 16 },
  { x: 46, y: 50, r: 32, w: 19 },
  { x: 53, y: 40, r: -18, w: 17 },
  { x: 59, y: 48, r: 25, w: 18 },
  { x: 65, y: 35, r: -30, w: 16 },
  { x: 71, y: 49, r: 20, w: 19 },
  { x: 77, y: 39, r: -20, w: 17 },
  { x: 83, y: 47, r: 35, w: 18 },
  { x: 89, y: 34, r: -25, w: 16 },
  { x: 94, y: 50, r: 28, w: 19 },
];

function CoffeeBean({ bean }) {
  return (
    <span
      className="
        absolute
        rounded-[55%]
        bg-gradient-to-br
        from-[#75452c]
        via-[#542d1d]
        to-[#2c160d]
        shadow-[inset_2px_2px_3px_rgba(255,255,255,0.18),inset_-3px_-3px_5px_rgba(0,0,0,0.4),0_2px_3px_rgba(40,20,10,0.18)]
      "
      style={{
        left: `${bean.x}%`,
        bottom: `${bean.y}px`,
        width: `${bean.w}px`,
        height: `${bean.w * 0.65}px`,
        transform: `rotate(${bean.r}deg)`,
      }}>
      {/* bean groove */}
      <span
        className="
          absolute
          left-1/2
          top-[10%]
          h-[80%]
          w-[2px]
          -translate-x-1/2
          rotate-[18deg]
          rounded-full
          bg-[#28130b]/60
        "
      />

      {/* small highlight */}
      <span
        className="
          absolute
          left-[25%]
          top-[18%]
          h-[25%]
          w-[20%]
          rounded-full
          bg-white/10
          blur-[1px]
        "
      />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative h-[340px] overflow-hidden bg-[#f8f1df]">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-7">
        {/* Logo */}
        <div className="text-center text-[#432519]">
          <div className="relative font-serif text-[27px] font-bold tracking-[-1.5px]">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-normal tracking-normal">
              THE
            </span>
            ROASTERY
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-px w-5 bg-[#9b7252]" />
            <span className="font-serif text-[10px] italic">Club</span>
            <span className="h-px w-5 bg-[#9b7252]" />
          </div>

          <div className="mt-2 text-[13px] opacity-60">☕</div>
        </div>

        {/* Navigation */}
        <nav className="mt-7 flex gap-8 text-[9px] font-medium uppercase tracking-[1.5px] text-[#654333]">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social */}
        <div className="mt-5 flex gap-2">
          <a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8916c] text-[#956b49]">
            <FaFacebookF size={11} />
          </a>

          <a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8916c] text-[#956b49]">
            <FaInstagram size={11} />
          </a>

          <a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8916c] text-[#956b49]">
            <FaLinkedinIn size={11} />
          </a>
        </div>
      </div>

      {/* REAL BEAN IMAGE */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/coffee-beans-pile.png"
          alt=""
          className="block w-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
}
