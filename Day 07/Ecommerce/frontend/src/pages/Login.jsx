import { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowUpRight,
  Coffee,
  Check,
  ArrowLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (data.success) {
        toast.success("Welcome Back!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#fff6e5] font-sans text-[#3a1407] lg:h-screen lg:overflow-hidden">
      <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row">
        {/* LEFT SIDE - DESKTOP ONLY */}
        <section className="relative hidden w-full overflow-hidden bg-[#431b0d] lg:flex lg:h-screen lg:min-h-0 lg:w-[46%] xl:w-[48%]">
          <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#d88d48]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#e5b37e]/10 blur-[120px]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: "radial-gradient(#f5d4ae 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <img
            src="/beans.png"
            alt=""
            className="pointer-events-none absolute left-8 top-28 w-32 rotate-[-20deg] opacity-20"
          />

          <img
            src="/heartbeans.png"
            alt=""
            className="pointer-events-none absolute bottom-16 right-8 w-36 rotate-[18deg] opacity-15"
          />

          <span className="absolute left-[16%] top-[28%] text-xl text-[#e5b37e] opacity-35">
            ✦
          </span>

          <span className="absolute right-[15%] top-[35%] text-2xl text-[#e5b37e] opacity-25">
            ✦
          </span>

          <span className="absolute bottom-[25%] left-[20%] text-lg text-[#e5b37e] opacity-20">
            ✦
          </span>

          <div className="relative z-10 flex h-full w-full flex-col px-10 py-10 xl:px-14">
            <Link
              to="/"
              className="flex w-fit items-center gap-3 text-[#fff8ed]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7ad88]/40 bg-[#fff6e5]/10">
                <Coffee size={17} />
              </span>

              <span className="text-lg font-semibold tracking-[-0.02em]">
                Aura Coffee
              </span>
            </Link>

            <div className="mx-auto flex w-full max-w-[560px] flex-1 flex-col justify-center py-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#dcae7c]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#dcae7c]">
                  WELCOME BACK
                </p>
              </div>

              <h1 className="max-w-[500px] text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-[#fff8ed] xl:text-[64px]">
                Good coffee
                <span className="block font-normal italic text-[#dfaa72]">
                  starts here.
                </span>
              </h1>

              <p className="mt-5 max-w-[390px] text-sm leading-7 text-[#d9bda8]">
                Sign in to continue your coffee ritual and keep your favorite
                brews, orders, and wishlist close at hand.
              </p>

              <div className="relative mt-2 flex h-[220px] items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d88d48]/10 blur-2xl" />

                <img
                  src="/coffeeCup.png"
                  alt="Coffee cup"
                  className="relative z-10 w-[200px] rotate-[-8deg] drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:rotate-[-3deg] hover:scale-105"
                />

                <div className="absolute bottom-2 left-1/2 h-5 w-48 -translate-x-1/2 rounded-[50%] bg-black/20 blur-xl" />
              </div>

              <div className="mt-4 max-w-[380px] border-l border-[#d9b89b]/30 pl-4">
                <p className="text-[11px] leading-6 text-[#bfa18d]">
                  Small batches. Freshly roasted. Made for slow mornings and
                  better conversations.
                </p>
              </div>
            </div>

            <div className="hidden items-center justify-between border-t border-[#d9b89b]/20 pt-4 text-[9px] uppercase tracking-[0.16em] text-[#bfa18d] sm:flex">
              <span>Small batch roasted</span>
              <span className="h-1 w-1 rounded-full bg-[#b9855d]" />
              <span>Freshly packed</span>
              <span className="h-1 w-1 rounded-full bg-[#b9855d]" />
              <span>Made with care</span>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fff6e5] px-6 py-10 sm:px-10 md:px-14 lg:h-screen lg:min-h-0 lg:w-[54%] lg:px-12 lg:py-10 xl:px-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full border border-[#e1cdb8]/40" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#d88d48]/5 blur-[90px]" />

          <div className="relative z-10 w-full max-w-[430px]">
            {/* HEADER */}
            <div className="mb-6 lg:mb-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b96447]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8a573b] sm:text-[10px]">
                  SIGN IN
                </p>
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#3a1407] sm:text-4xl md:text-[42px]">
                Welcome back
                <span className="text-[#b96447]">.</span>
              </h2>

              <p className="mt-2.5 max-w-[380px] text-xs leading-6 text-[#76584a] sm:text-sm">
                Sign in to your account and continue your coffee journey.
              </p>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="flex h-[48px] w-full items-center justify-center gap-3 rounded-full border border-[#d9c8b4] bg-[#fffaf2] px-5 text-sm font-medium text-[#4a2b1e] transition-all duration-300 hover:border-[#ad8f77] hover:bg-white hover:shadow-sm sm:h-[50px]">
              <span className="text-sm font-bold text-[#4285F4]">G</span>
              Continue with Google
            </button>

            {/* DIVIDER */}
            <div className="my-5 flex items-center gap-4 sm:my-6">
              <span className="h-px flex-1 bg-[#dfd0be]" />
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#a48673]">
                or email
              </span>
              <span className="h-px flex-1 bg-[#dfd0be]" />
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold text-[#4d2a1c]">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  required
                  className="h-[49px] w-full rounded-xl border border-[#dfd0be] bg-[#fffaf2] px-4 text-sm text-[#3a1407] outline-none transition-all duration-300 placeholder:text-[#b49a87] focus:border-[#9f6748] focus:bg-white focus:ring-4 focus:ring-[#b96447]/5"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold text-[#4d2a1c]">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-[10px] font-medium text-[#8a573b] transition-colors hover:text-[#3a1407] sm:text-[11px]">
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Enter your password"
                    required
                    className="h-[49px] w-full rounded-xl border border-[#dfd0be] bg-[#fffaf2] px-4 pr-12 text-sm text-[#3a1407] outline-none transition-all duration-300 placeholder:text-[#b49a87] focus:border-[#9f6748] focus:bg-white focus:ring-4 focus:ring-[#b96447]/5"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8f7362] transition-colors hover:text-[#3a1407]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }>
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <label className="flex cursor-pointer items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="peer sr-only"
                />

                <span className="flex h-4 w-4 items-center justify-center rounded border border-[#cdbba7] bg-[#fffaf2] transition-all peer-checked:border-[#431b0d] peer-checked:bg-[#431b0d]">
                  {rememberMe && <Check size={10} className="text-white" />}
                </span>

                <span className="text-xs text-[#76584a]">Remember me</span>
              </label>

              {/* SIGN IN */}
              <button
                type="submit"
                className="group flex h-[51px] w-full items-center justify-between rounded-full bg-[#431b0d] px-5 pl-6 text-sm font-semibold text-[#fff6e5] shadow-lg shadow-[#431b0d]/10 transition-all duration-300 hover:bg-[#54200f] hover:shadow-xl">
                <span>Sign in</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff6e5]/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </button>
            </form>

            {/* REGISTER */}
            <div className="mt-5 border-t border-[#e4d6c5] pt-4 text-center">
              <p className="text-xs text-[#806657]">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-1.5 font-semibold text-[#431b0d] underline decoration-[#c6a184] underline-offset-4 transition-colors hover:text-[#a9582d]">
                  Create one
                </Link>
              </p>
            </div>

            {/* BACK */}
            <div className="mt-4 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#9a7d69] transition-colors hover:text-[#3a1407]">
                <ArrowLeft size={12} />
                Back to Aura Coffee
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
