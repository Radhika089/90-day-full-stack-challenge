import React from "react";
import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero/hero3.jpg";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] lg:grid lg:grid-cols-2">
      {/* Left - Image */}
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
                AURA Coffee Co.
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
              Slow mornings.
              <br />
              Better coffee.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Discover carefully selected coffee, crafted for the moments worth
              slowing down for.
            </p>
          </div>
        </div>
      </div>

      {/* Right - Login */}
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
          <div className="mt-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9a7658]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
                Welcome Back
              </p>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#2d211b]">
              Sign in
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#8d8178]">
              Welcome back. Sign in to continue your coffee journey.
            </p>
          </div>

          {/* Form */}
          <form className="mt-9">
            {/* Email */}
            <div>
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
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-[#5d4b3e]">
                  Password
                </label>

                <button
                  type="button"
                  className="text-[11px] text-[#9a7658] transition hover:text-[#2d211b]">
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-12 w-full border border-[#dcd2c9] bg-white px-4 text-sm text-[#2d211b] outline-none transition placeholder:text-[#b2a69d] focus:border-[#9a7658]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-7 flex h-12 w-full items-center justify-center gap-2 bg-[#2d211b] text-sm font-medium text-white transition hover:bg-[#40312a]">
              Sign In
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#e8e0d8]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#b0a49b]">
              New here?
            </span>
            <span className="h-px flex-1 bg-[#e8e0d8]" />
          </div>

          {/* Register */}
          <Link
            to="/register"
            className="flex h-12 w-full items-center justify-center border border-[#d8cfc7] text-sm font-medium text-[#5d4b3e] transition hover:border-[#9a7658] hover:bg-white">
            Create an account
          </Link>

          {/* Footer */}
          <p className="mt-8 text-center text-[10px] leading-5 text-[#a0948b]">
            By continuing, you agree to AURA Coffee's terms and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
