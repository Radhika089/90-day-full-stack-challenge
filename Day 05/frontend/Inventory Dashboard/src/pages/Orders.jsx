import React, { useEffect, useState } from "react";
import Header from "../components/Orders/Header";
import Stats from "../components/Orders/Stats";
import Filters from "../components/Orders/Filters";
import OrdersList from "../components/Orders/OrdersList";
import { getOrders } from "../api/OrderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data.orders);
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders
    .filter((order) => {
      const searchValue = search.toLowerCase();

      return (
        order.orderId.toLowerCase().includes(searchValue) ||
        order.customer.name.toLowerCase().includes(searchValue) ||
        order.customer.phone.includes(searchValue)
      );
    })
    .filter((order) => {
      if (!status) return true;
      return order.orderStatus === status;
    })
    .filter((order) => {
      if (!payment) return true;
      return order.paymentStatus === payment;
    });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sort === "name-asc") {
      return a.customer.name.localeCompare(b.customer.name);
    }

    if (sort === "amount-asc") {
      return a.totalAmount - b.totalAmount;
    }

    if (sort === "amount-desc") {
      return b.totalAmount - a.totalAmount;
    }

    return 0;
  });

  const clearFilters = () => {
    setSearch("");
    setStatus("");
    setPayment("");
    setSort("");
  };

  return (
    <div>
      <Header orders={orders} />
      <Stats orders={orders} />

      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        payment={payment}
        setPayment={setPayment}
        sort={sort}
        setSort={setSort}
        clearFilters={clearFilters}
      />

      <OrdersList orders={sortedOrders} loading={loading} error={error} />
    </div>
  );
};

export default Orders;
