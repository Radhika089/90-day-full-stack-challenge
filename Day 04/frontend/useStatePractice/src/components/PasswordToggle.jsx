import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="relative w-72">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full rounded-xl border border-gray-500 py-3 pl-4 pr-12 outline-none focus:border-[#29b354]"
        />
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 cursor-pointer"
          onClick={handleToggle}>
          {showPassword ? (
            <EyeOff className=" text-gray-400 hover:text-gray-700" />
          ) : (
            <Eye className=" text-gray-400 hover:text-gray-700" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordToggle;
