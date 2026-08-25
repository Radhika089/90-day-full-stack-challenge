import React, { useState } from "react";
import LoginLeft from "../components/Auth/LoginLeft";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2Icon } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Auth = ({ mode }) => {
  const { login, register } = useAppContext();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(
        err.message ||
          (mode === "login"
            ? "Invalid email or password"
            : "Registration Failed"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-white text-zinc-900 min-h-screen font-sans">
      <LoginLeft />
      {/* right */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h1 className="text-3xl tracking-tight font-medium text-zinc-900 mb-1.5 font-sans">
              {isLogin ? "Sign In" : "Create an account"}
            </h1>
            <p className="text-sm text-zinc-400">
              {isLogin
                ? "Enter your credentials to access your website builder."
                : "Get started by entering your registration details."}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 border border-red-200 bg-red-50 text-red-700 text-xs rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  required
                  className="w-full border-b border-zinc-200 pl-2 py-2 focus:outline-none focus:border-zinc-950 text-sm text-zinc-900 bg-transparent placeholder-zinc-300 transition-colors"
                />
              </div>
            )}
            <div>
              <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="w-full border-b border-zinc-200 pl-2 py-2 focus:outline-none focus:border-zinc-950 text-sm text-zinc-900 bg-transparent placeholder-zinc-300 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full border-b border-zinc-200 pl-2 py-2 focus:outline-none focus:border-zinc-950 text-sm text-zinc-900 bg-transparent placeholder-zinc-300 transition-colors"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-600 flex items-center justify-center cursor-pointer transition-colors"
                  onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-linear-to-br from-red-600 to-amber-600 text-white font-semibold hover:scale-102 disabled:opacity-40 flex items-center justify-center cursor-pointer rounded-lg mt-2 transition-all">
                {loading && (
                  <Loader2Icon className="animate-spin h-3.5 w-3.5 mr-2" />
                )}

                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          <p className="text-sm text-zinc-400 mt-8 pt-6 border-t border-zinc-200 font-sans">
            {isLogin ? (
              <>
                New to AI WebForge{" "}
                <Link
                  to={"/register"}
                  className="text-zinc-900 font-medium hover:underline">
                  Create and account{" "}
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-zinc-900 font-medium hover:underline">
                  Sign in here{" "}
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
