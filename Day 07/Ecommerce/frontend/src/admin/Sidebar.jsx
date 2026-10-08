import {
  ChevronDown,
  ClipboardList,
  Home,
  LogOut,
  Package,
  PanelLeft,
  Settings,
  ShoppingBag,
  LayoutGrid,
  UserRound,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Dashboard",
      to: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Product Management",
      icon: ShoppingBag,
      children: [
        {
          title: "Products",
          to: "/admin/products",
          icon: Package,
        },
        {
          title: "Categories",
          to: "/admin/categories",
          icon: LayoutGrid,
        },
      ],
    },
    {
      title: "Inventory Management",
      icon: Package,
      children: [
        {
          title: "Inventory",
          to: "/admin/inventory",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Order Management",
      icon: ClipboardList,
      children: [
        {
          title: "Orders",
          to: "/admin/orders",
          icon: ShoppingBag,
        },
      ],
    },
    {
      title: "Customers",
      to: "/admin/customers",
      icon: Users,
    },
    {
      title: "Settings",
      to: "/admin/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="bg-black">
      <aside className="w-72 bg-white h-screen top-0 sticky">
        {/* header */}
        <div className="flex items-center justify-between  px-5 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-[#315c4a] h-10 w-10 rounded-xl flex items-center justify-center">
              <span className="text-center font-bold text-lg text-white">
                A
              </span>
            </div>
            <div>
              <h3 className="text-md tracking-wide text-gray-900 font-semibold">
                AURA
              </h3>
              <p className="text-xs tracking-wide uppercase text-gray-400">
                Coffee Co.
              </p>
            </div>
          </div>

          <button className="h-9 w-9 hover:bg-gray-200 text-gray-400 rounded-md transition hover:text-zinc-800 flex items-center justify-center">
            <PanelLeft className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Navbar */}
        <div className="mt-4 px-3">
          <p className="px-3 mb-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-500">
            Overview
          </p>

          <nav className="space-y-1">
            {navLinks.map((nav) => {
              const Icon = nav.icon;
              if (!nav.children) {
                return (
                  <Link
                    className=" flex items-center hover:text-[#315C4A] hover:bg-[#E8F1EC] transition gap-3 py-4 px-3 rounded-xl text-gray-600"
                    key={nav.title}>
                    <Icon
                      size={18}
                      className="text-gray-400 hover:text-[#315C4A] transition"
                    />
                    <span className="text-sm font-semibold">{nav.title} </span>
                  </Link>
                );
              }
              return (
                <div className="" key={nav.title}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between hover:text-[#315C4A] hover:bg-[#E8F1EC] transition gap-3 py-4 px-3 rounded-xl text-gray-600">
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className="text-gray-400 hover:text-[#315C4A] transition"
                      />
                      <span className="text-sm font-semibold">{nav.title}</span>
                    </div>

                    <ChevronDown size={15} className="text-gray-400" />
                  </button>

                  <div>
                    {nav.children.map((child) => {
                      const ChildIcon = child.icon;
                      return (
                        <Link
                          className="flex items-center hover:text-[#315C4A] hover:bg-[#E8F1EC] transition gap-3 py-4 px-3 ml-6 border-l border-gray-300 rounded-xl text-gray-600"
                          key={child.title}>
                          <ChildIcon
                            size={18}
                            className="text-gray-400 hover:text-[#315C4A] transition"
                          />
                          <span className="text-sm font-semibold">
                            {child.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* bottom */}
        <div className="px-4 mt-3">
          <div className="border-t border-gray-200"></div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
