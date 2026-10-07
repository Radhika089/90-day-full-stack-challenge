import {
  ClipboardList,
  Home,
  LayoutGrid,
  PanelLeft,
  Settings,
  ShoppingBag,
} from "lucide-react";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: Home,
    },
    {
      title: "Products",
      to: "/products",
      icon: ShoppingBag,
    },
    {
      title: "Categories",
      to: "/categories",
      icon: LayoutGrid,
    },
    {
      title: "Orders",
      to: "/orders",
      icon: ClipboardList,
    },
    {
      title: "Settings",
      to: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div>
      <aside className="w-72 h-screen bg-white border-r border-gray-200 "></aside>
    </div>
  );
};

export default Sidebar;
