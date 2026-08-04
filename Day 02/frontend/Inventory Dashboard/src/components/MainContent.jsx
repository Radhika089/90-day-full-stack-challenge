import React from "react";
import Header from "./Dashboard/Header";
import StatsCard from "./Dashboard/StatsCard";
import Charts from "./Dashboard/Charts";

const MainContent = () => {
  return (
    <div className="flex-1 bg-[#f8fafc] min-h-screen p-8">
      <Header />
      <StatsCard />
      <Charts />
    </div>
  );
};

export default MainContent;
