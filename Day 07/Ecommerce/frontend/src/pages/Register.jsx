import React from "react";
import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero/hero3.jpg";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] lg:grid lg:grid-cols-2">
      {/* Left - Register */}
      <div className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-md">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 text-[#2d211b]">
            <Coffee size={20} strokeWidth={1.7} />

            <span className="text-sm font-semibold tracking-[0.18em]">
              AURA
            </span>
          </Link>

          {/* Heading */}
          <div className="mt-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9a7658]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
                Join AURA
              </p>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#2d211b]">
              Create account
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#8d8178]">
              Create your account and make every cup a little better.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="h-12 w-full border border-[#dcd2c9] bg-white px-4 text-sm text-[#2d211b] outline-none transition placeholder:text-[#b2a69d] focus:border-[#9a7658]"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full border border-[#dcd2c9] bg-white px-4 text-sm text-[#2d211b] outline-none transition placeholder:text-[#b2a69d] focus:border-[#9a7658]"
              />
            </div>

            {/* Password */}
            <div className="mt-5">
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="h-12 w-full border border-[#dcd2c9] bg-white px-4 text-sm text-[#2d211b] outline-none transition placeholder:text-[#b2a69d] focus:border-[#9a7658]"
              />

              <p className="mt-2 text-[10px] text-[#a0948b]">
                Use at least 8 characters.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#2d211b] text-sm font-medium text-white transition hover:bg-[#40312a]">
              Create Account
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center">
            <p className="text-xs text-[#8d8178]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#9a7658] transition hover:text-[#2d211b]">
                Sign in
              </Link>
            </p>
          </div>

          <p className="mt-8 text-center text-[10px] leading-5 text-[#a0948b]">
            By creating an account, you agree to AURA Coffee's terms and privacy
            policy.
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative hidden min-h-screen overflow-hidden lg:block">
        <img
          src={hero}
          alt="AURA Coffee"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2d211b]/35" />

        <div className="absolute inset-x-0 bottom-0 p-12 xl:p-16">
          <div className="max-w-md text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-white/70" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                A little ritual
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
              Find your
              <br />
              perfect brew.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Keep your favorites close, discover new coffees, and make every
              morning worth waking up for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
