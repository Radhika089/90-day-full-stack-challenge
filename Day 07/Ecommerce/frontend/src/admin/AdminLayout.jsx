import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#FAFAFA] min-h-screen p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
