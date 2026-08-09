import React from "react";
import Header from "../components/Dashboard/Header";
import StatsCard from "../components/Dashboard/StatsCard";
import Charts from "../components/Dashboard/Charts";
import ProductTable from "../components/Dashboard/ProductTable";

const Dashboard = () => {
  return (
    <>
      <Header />
      <StatsCard />
      <Charts />
      <ProductTable />
    </>
  );
};

export default Dashboard;
