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
import { useState } from "react";
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

  const [collapsed, setCollapsed] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  return (
    <aside
      className={`${collapsed ? "w-[104px]" : "w-72"} sticky top-0 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div
            className={`${collapsed ? "h-8 w-8 rounded-xl bg-[#315C4A] flex items-center justify-center mr-1" : "h-10 w-10 rounded-xl bg-[#315C4A] flex items-center justify-center"}`}>
            <span className="text-lg font-bold text-white">A</span>
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-base font-semibold tracking-wide text-gray-900">
                AURA
              </h1>

              <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em]">
                Coffee Co.
              </p>
            </div>
          )}
        </div>

        <button
          type="button"
          className="h-9 w-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition"
          onClick={() => setCollapsed((prev) => !prev)}>
          <PanelLeft size={18} />
        </button>
      </div>

      {/* Navigation */}
      <div className="px-4 mt-4 flex-1 overflow-y-auto">
        {!collapsed && (
          <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Overview
          </p>
        )}

        <nav className="space-y-1">
          {navLinks.map((nav) => {
            const Icon = nav.icon;

            if (!nav.children) {
              return (
                <Link
                  key={nav.title}
                  to={nav.to}
                  className="group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:text-[#315C4A] hover:bg-[#E8F1EC] transition">
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-[#315C4A] transition"
                  />

                  {!collapsed && (
                    <span className="text-sm font-medium">{nav.title}</span>
                  )}
                </Link>
              );
            }

            return (
              <div key={nav.title} className="pt-1">
                <button
                  type="button"
                  className="group w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                  onClick={() =>
                    setOpenSection(openSection === nav.title ? null : nav.title)
                  }>
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className="text-gray-400 group-hover:text-[#315C4A] transition"
                    />

                    {!collapsed && (
                      <span className="text-sm font-medium">{nav.title}</span>
                    )}
                  </div>

                  {!collapsed && (
                    <ChevronDown
                      size={15}
                      className={`text-gray-400 transition ${openSection === nav.title ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {openSection === nav.title && (
                  <div
                    className={`${collapsed ? "flex flex-col items-center" : "ml-9 mt-1 border-l border-gray-200 pl-3 space-y-1"}`}>
                    {nav.children.map((child) => {
                      const ChildIcon = child.icon;

                      return (
                        <Link
                          key={child.title}
                          to={child.to}
                          className="block px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-[#315C4A] hover:bg-[#E8F1EC] transition">
                          <div className="flex gap-4">
                            <ChildIcon size={16} />
                            {!collapsed && <span>{child.title}</span>}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="px-4 pb-3">
        <div className="border-t border-gray-200">
          <div className="flex items-center gap-3 px-3 py-3">
            <div className="h-9 w-9 rounded-full bg-[#E8F1EC] text-[#315C4A] flex items-center justify-center">
              <UserRound size={17} />
            </div>

            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Admin
                </p>

                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            )}
          </div>

          <button
            type="button"
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition">
            <LogOut size={18} />

            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
