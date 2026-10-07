import Chart from "../components/Dashboard/Chart";
import Header from "../components/Dashboard/Header";
import LowStock from "../components/Dashboard/LowStock";
import RecentOrders from "../components/Dashboard/RecentOrders";
import StatsCard from "../components/Dashboard/StatsCard";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <StatsCard />
      <Chart />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 pt-5">
        <RecentOrders />
        <LowStock />
      </div>
    </div>
  );
};

export default Dashboard;
