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
import { registerUser } from "../api/authApi";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      toast.error("Please accept the terms");
      return;
    }

    try {
      const data = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (data.success) {
        toast.success("Account created successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#fff6e5] font-sans text-[#3a1407] lg:h-screen lg:overflow-hidden">
      <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row">
        {/* LEFT SIDE - DESKTOP ONLY */}
        <section className="relative hidden w-full overflow-hidden bg-[#431b0d] lg:flex lg:h-screen lg:w-[46%] xl:w-[48%]">
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

          <div className="relative z-10 flex h-full w-full flex-col px-10 py-8 xl:px-14 xl:py-9">
            <Link
              to="/"
              className="flex w-fit items-center gap-3 text-[#fff8ed]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7ad88]/40 bg-[#fff6e5]/10">
                <Coffee size={16} />
              </span>

              <span className="text-base font-semibold tracking-[-0.02em]">
                Aura Coffee
              </span>
            </Link>

            <div className="mx-auto flex w-full max-w-[560px] flex-1 flex-col justify-center py-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#dcae7c]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#dcae7c]">
                  JOIN THE RITUAL
                </p>
              </div>

              <h1 className="max-w-[500px] text-[46px] font-medium leading-[1.02] tracking-[-0.04em] text-[#fff8ed] xl:text-[58px]">
                Make coffee moments
                <span className="block font-normal italic text-[#dfaa72]">
                  yours.
                </span>
              </h1>

              <p className="mt-4 max-w-[380px] text-[13px] leading-6 text-[#d9bda8]">
                Create your Aura Coffee account and make every brew, order, and
                favorite part of your ritual easier to find.
              </p>

              <div className="relative mt-1 flex h-[190px] items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d88d48]/10 blur-2xl" />

                <img
                  src="/coffeeCup.png"
                  alt="Coffee cup"
                  className="relative z-10 w-[175px] rotate-[6deg] drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:rotate-[2deg] hover:scale-105"
                />

                <div className="absolute bottom-1 left-1/2 h-4 w-44 -translate-x-1/2 rounded-[50%] bg-black/20 blur-xl" />
              </div>

              <div className="mt-2 max-w-[360px] border-l border-[#d9b89b]/30 pl-4">
                <p className="text-[10px] leading-5 text-[#bfa18d]">
                  Discover beans worth remembering, tools worth keeping, and
                  coffee worth slowing down for.
                </p>
              </div>
            </div>

            <div className="hidden items-center justify-between border-t border-[#d9b89b]/20 pt-3 text-[8px] uppercase tracking-[0.16em] text-[#bfa18d] sm:flex">
              <span>Small batch roasted</span>

              <span className="h-1 w-1 rounded-full bg-[#b9855d]" />

              <span>Freshly packed</span>

              <span className="h-1 w-1 rounded-full bg-[#b9855d]" />

              <span>Made with care</span>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fff6e5] px-6 py-7 sm:px-10 md:px-14 lg:h-screen lg:min-h-0 lg:w-[54%] lg:px-12 lg:py-5 xl:px-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full border border-[#e1cdb8]/40" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#d88d48]/5 blur-[90px]" />

          <div className="relative z-10 w-full max-w-[430px]">
            {/* HEADER */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#b96447]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8a573b]">
                  CREATE ACCOUNT
                </p>
              </div>

              <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.035em] text-[#3a1407] sm:text-3xl md:text-[36px]">
                Welcome to Aura
                <span className="text-[#b96447]">.</span>
              </h2>

              <p className="mt-1.5 max-w-[380px] text-[11px] leading-5 text-[#76584a] sm:text-xs">
                Create your account and make your coffee ritual a little more
                personal.
              </p>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="flex h-[43px] w-full items-center justify-center gap-3 rounded-full border border-[#d9c8b4] bg-[#fffaf2] px-5 text-xs font-medium text-[#4a2b1e] transition-all duration-300 hover:border-[#ad8f77] hover:bg-white hover:shadow-sm">
              <span className="text-sm font-bold text-[#4285F4]">G</span>
              Continue with Google
            </button>

            {/* DIVIDER */}
            <div className="my-3.5 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#dfd0be]" />

              <span className="text-[8px] uppercase tracking-[0.15em] text-[#a48673]">
                or sign up with email
              </span>

              <span className="h-px flex-1 bg-[#dfd0be]" />
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-[10px] font-semibold text-[#4d2a1c]">
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="h-[42px] w-full rounded-xl border border-[#dfd0be] bg-[#fffaf2] px-4 text-xs text-[#3a1407] outline-none transition-all duration-300 placeholder:text-[#b49a87] focus:border-[#9f6748] focus:bg-white focus:ring-4 focus:ring-[#b96447]/5"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[10px] font-semibold text-[#4d2a1c]">
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
                  className="h-[42px] w-full rounded-xl border border-[#dfd0be] bg-[#fffaf2] px-4 text-xs text-[#3a1407] outline-none transition-all duration-300 placeholder:text-[#b49a87] focus:border-[#9f6748] focus:bg-white focus:ring-4 focus:ring-[#b96447]/5"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-[10px] font-semibold text-[#4d2a1c]">
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Create a password"
                    required
                    minLength={6}
                    className="h-[42px] w-full rounded-xl border border-[#dfd0be] bg-[#fffaf2] px-4 pr-11 text-xs text-[#3a1407] outline-none transition-all duration-300 placeholder:text-[#b49a87] focus:border-[#9f6748] focus:bg-white focus:ring-4 focus:ring-[#b96447]/5"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8f7362] transition-colors hover:text-[#3a1407]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }>
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 block text-[10px] font-semibold text-[#4d2a1c]">
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repeat your password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    minLength={6}
                    className="h-[42px] w-full rounded-xl border border-[#dfd0be] bg-[#fffaf2] px-4 pr-11 text-xs text-[#3a1407] outline-none transition-all duration-300 placeholder:text-[#b49a87] focus:border-[#9f6748] focus:bg-white focus:ring-4 focus:ring-[#b96447]/5"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8f7362] transition-colors hover:text-[#3a1407]"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }>
                    {showConfirmPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>
              </div>

              {/* TERMS */}
              <label className="flex cursor-pointer items-start gap-2.5 pt-0.5">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="peer sr-only"
                  required
                />

                <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border border-[#cdbba7] bg-[#fffaf2] transition-all peer-checked:border-[#431b0d] peer-checked:bg-[#431b0d]">
                  {agreeTerms && <Check size={9} className="text-white" />}
                </span>

                <span className="text-[10px] leading-4 text-[#806657]">
                  I agree to Aura Coffee's{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-[#5e3928] underline underline-offset-2">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-semibold text-[#5e3928] underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* CREATE ACCOUNT */}
              <button
                type="submit"
                className="group mt-1 flex h-[46px] w-full items-center justify-between rounded-full bg-[#431b0d] px-4 pl-5 text-xs font-semibold text-[#fff6e5] shadow-lg shadow-[#431b0d]/10 transition-all duration-300 hover:bg-[#54200f] hover:shadow-xl">
                <span>Create my account</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff6e5]/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </form>

            {/* LOGIN */}
            <div className="mt-3.5 border-t border-[#e4d6c5] pt-3 text-center">
              <p className="text-[10px] text-[#806657]">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1.5 font-semibold text-[#431b0d] underline decoration-[#c6a184] underline-offset-4 transition-colors hover:text-[#a9582d]">
                  Sign in
                </Link>
              </p>
            </div>

            {/* BACK */}
            <div className="mt-2.5 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[9px] font-medium text-[#9a7d69] transition-colors hover:text-[#3a1407]">
                <ArrowLeft size={11} />
                Back to Aura Coffee
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
