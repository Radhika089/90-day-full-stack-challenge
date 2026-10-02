import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Package, UserRound } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdfbf7]">
        <p className="text-sm text-[#806858]">Loading your account...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdfbf7] px-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f3e5d3]">
            <UserRound size={34} strokeWidth={1.5} className="text-[#9a4f28]" />
          </div>

          <h1 className="mt-7 text-3xl font-semibold tracking-tight text-[#3a1407]">
            Your AURA account
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#806858]">
            Login to view your profile, orders, wishlist, and more.
          </p>

          <Link
            to="/login"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3a1407] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#5c2410]">
            Login to AURA
            <ArrowRight size={16} />
          </Link>

          <p className="mt-5 text-xs text-[#9a7658]">
            New to AURA?{" "}
            <Link
              to="/register"
              className="font-medium text-[#9a4f28] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#b96447]">
            My Account
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#3a1407] md:text-5xl">
            Welcome back, {user.name}.
          </h1>

          <p className="mt-3 text-sm text-[#806858]">
            Manage your AURA account and keep track of your coffee journey.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          {/* Profile Card */}
          <div className="rounded-3xl bg-[#3a1407] p-7 text-white shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b96447] text-2xl font-semibold">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs capitalize text-white/80">
                {user.role}
              </span>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                AURA Member
              </p>

              <h2 className="mt-2 text-2xl font-medium">{user.name}</h2>

              <p className="mt-1 text-sm text-white/60">{user.email}</p>
            </div>
          </div>

          {/* Account Details */}
          <div className="rounded-3xl border border-[#e8ddd1] bg-white p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e5d3]">
                <UserRound
                  size={19}
                  strokeWidth={1.7}
                  className="text-[#9a4f28]"
                />
              </div>

              <div>
                <h2 className="font-medium text-[#3a1407]">Account Details</h2>
                <p className="text-xs text-[#806858]">
                  Your personal information
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <div className="border-b border-[#eee5dc] pb-5">
                <p className="text-xs uppercase tracking-wide text-[#9a7658]">
                  Full Name
                </p>

                <p className="mt-2 text-sm font-medium text-[#3a1407]">
                  {user.name}
                </p>
              </div>

              <div className="border-b border-[#eee5dc] pb-5">
                <p className="text-xs uppercase tracking-wide text-[#9a7658]">
                  Email Address
                </p>

                <p className="mt-2 text-sm font-medium text-[#3a1407]">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-[#9a7658]">
                  Account Type
                </p>

                <p className="mt-2 text-sm font-medium capitalize text-[#3a1407]">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to="/orders"
            className="group flex items-center justify-between rounded-2xl border border-[#e8ddd1] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e5d3]">
                <Package
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#9a4f28]"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#3a1407]">
                  Your Orders
                </h3>

                <p className="mt-1 text-xs text-[#806858]">
                  View your order history
                </p>
              </div>
            </div>

            <ArrowRight
              size={18}
              className="text-[#9a7658] transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/wishlist"
            className="group flex items-center justify-between rounded-2xl border border-[#e8ddd1] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e5d3]">
                <Heart size={20} strokeWidth={1.7} className="text-[#9a4f28]" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#3a1407]">Wishlist</h3>

                <p className="mt-1 text-xs text-[#806858]">
                  Your saved coffee favorites
                </p>
              </div>
            </div>

            <ArrowRight
              size={18}
              className="text-[#9a7658] transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
