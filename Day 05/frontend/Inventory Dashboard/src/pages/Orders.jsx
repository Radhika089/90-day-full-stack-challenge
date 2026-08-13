import React from "react";
import Header from "../components/Orders/Header";
import Stats from "../components/Orders/Stats";
import Filters from "../components/Orders/Filters";
import OrdersList from "../components/Orders/OrdersList";

const Orders = () => {
  return (
    <div>
      <Header />
      <Stats />
      <Filters />
      <OrdersList />
    </div>
  );
};

export default Orders;
