export const Spark = ({ className = "", color = "currentColor" }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} style={{ color }}>
    <path
      d="M40 5C41 28 52 39 75 40C52 41 41 52 40 75C39 52 28 41 5 40C28 39 39 28 40 5Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CoffeeCupDoodle = ({ className = "", color = "currentColor" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    className={className}
    style={{ color }}>
    <path
      d="M25 43C27 39 34 38 42 39L83 41C87 41 90 45 89 50L85 78C84 88 76 94 65 95L47 94C36 93 29 86 28 76L25 43Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M89 51C101 48 108 54 106 64C104 74 96 78 85 75"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    <path
      d="M43 31C39 25 45 21 42 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M61 31C57 24 64 21 61 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M34 101C48 104 69 104 83 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const BeanDoodle = ({ className = "", color = "currentColor" }) => (
  <svg viewBox="0 0 60 80" fill="none" className={className} style={{ color }}>
    <path
      d="M31 7C18 8 10 21 10 37C10 56 19 70 32 72C44 74 51 62 51 45C51 26 44 8 31 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M34 14C27 24 24 35 25 47C26 57 30 64 35 69"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowDoodle = ({ className = "", color = "currentColor" }) => (
  <svg viewBox="0 0 100 60" fill="none" className={className} style={{ color }}>
    <path
      d="M5 40C27 10 56 7 83 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M72 18L84 28L69 31"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SwirlDoodle = ({ className = "", color = "currentColor" }) => (
  <svg viewBox="0 0 100 70" fill="none" className={className} style={{ color }}>
    <path
      d="M8 45C22 15 51 10 72 26C84 35 82 50 69 54C57 58 49 48 55 39C60 31 72 32 78 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const MiniStar = ({ className = "", color = "currentColor" }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} style={{ color }}>
    <path
      d="M20 4C21 14 26 19 36 20C26 21 21 26 20 36C19 26 14 21 4 20C14 19 19 14 20 4Z"
      fill="currentColor"
    />
  </svg>
);

export const DotCluster = ({ className = "" }) => (
  <div className={`absolute flex flex-col gap-2 ${className}`}>
    <div className="flex gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#d98b53]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#d98b53]/60" />
    </div>

    <div className="ml-3 flex gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#b96447]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#dfeacf]" />
    </div>

    <div className="ml-1">
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f2c6a0]" />
    </div>
  </div>
);
