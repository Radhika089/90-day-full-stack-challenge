import React from "react";
import SalesPurchaseChart from "./Charts/SalesPurchaseChart";
import TopCategoriesCard from "./Charts/TopCategoriesCard";

const Charts = () => {
  return (
    <div className="grid grid-cols-3 mt-8 gap-6">
      <div className="col-span-2">
        <SalesPurchaseChart />
      </div>
      <div>
        <TopCategoriesCard />
      </div>
    </div>
  );
};

export default Charts;
