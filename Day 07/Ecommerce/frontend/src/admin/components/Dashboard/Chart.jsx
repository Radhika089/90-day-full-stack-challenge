import RevenueChart from "./Chart/RevenueChart";
import OrderStatusChart from "./Chart/OrderStatusChart";

const Chart = () => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-5 pt-5">
      <div className="xl:col-span-3">
        <RevenueChart />
      </div>

      <div className="xl:col-span-2">
        <OrderStatusChart />
      </div>
    </div>
  );
};

export default Chart;
