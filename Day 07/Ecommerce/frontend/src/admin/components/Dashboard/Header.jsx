import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Dashboard
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Overview of your store performance and activity.
          </p>
        </div>

        {/* Right */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-[#315C4A]/30 hover:text-[#315C4A] hover:shadow-sm">
          <Bell size={18} strokeWidth={1.8} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#315C4A]" />
        </button>
      </div>
    </div>
  );
};

export default Header;
