import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import OrderHeader from "../components/Orders/OrderHeader";
import OrderFilters from "../components/Orders/OrderFilters";
import OrderTable from "../components/Orders/OrderTable";
import OrderDetails from "../components/Orders/OrderDetails";

const initialOrders = [
  {
    _id: "68e612ab1234567890abcdef",
    user: "user001",
    items: [
      {
        product: { _id: "p001", name: "House Blend" },
        quantity: 2,
        price: 850,
      },
    ],
    subtotal: 1700,
    shippingFee: 50,
    discount: 100,
    totalAmount: 1650,
    shippingAddress: {
      name: "Aarav Sharma",
      phone: "+91 98765 43210",
      email: "aarav@example.com",
      address: "24 Green Park",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "processing",
    createdAt: "2026-10-08T09:30:00.000Z",
    updatedAt: "2026-10-08T09:30:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf0",
    user: "user002",
    items: [
      {
        product: { _id: "p002", name: "Classic French Press" },
        quantity: 1,
        price: 1200,
      },
    ],
    subtotal: 1200,
    shippingFee: 0,
    discount: 0,
    totalAmount: 1200,
    shippingAddress: {
      name: "Meera Kapoor",
      phone: "+91 98765 12340",
      email: "meera@example.com",
      address: "18 Model Town",
      city: "Ludhiana",
      state: "Punjab",
      pincode: "141002",
    },
    paymentStatus: "pending",
    paymentMethod: "cod",
    orderStatus: "pending",
    createdAt: "2026-10-08T11:15:00.000Z",
    updatedAt: "2026-10-08T11:15:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf1",
    user: "user003",
    items: [
      {
        product: { _id: "p003", name: "Ethiopian Roast" },
        quantity: 2,
        price: 950,
      },
    ],
    subtotal: 1900,
    shippingFee: 50,
    discount: 0,
    totalAmount: 1950,
    shippingAddress: {
      name: "Ishaan Verma",
      phone: "+91 98123 45670",
      email: "ishaan@example.com",
      address: "52 Civil Lines",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302006",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "shipped",
    createdAt: "2026-10-07T08:20:00.000Z",
    updatedAt: "2026-10-07T08:20:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf2",
    user: "user004",
    items: [
      {
        product: { _id: "p004", name: "Cold Brew Bottle" },
        quantity: 1,
        price: 750,
      },
    ],
    subtotal: 750,
    shippingFee: 50,
    discount: 50,
    totalAmount: 750,
    shippingAddress: {
      name: "Ananya Singh",
      phone: "+91 97654 32100",
      email: "ananya@example.com",
      address: "9 Sector 22",
      city: "Chandigarh",
      state: "Chandigarh",
      pincode: "160022",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "delivered",
    createdAt: "2026-10-07T07:10:00.000Z",
    updatedAt: "2026-10-08T12:00:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf3",
    user: "user005",
    items: [
      {
        product: { _id: "p005", name: "Pour Over Set" },
        quantity: 1,
        price: 1450,
      },
    ],
    subtotal: 1450,
    shippingFee: 50,
    discount: 0,
    totalAmount: 1500,
    shippingAddress: {
      name: "Kabir Malhotra",
      phone: "+91 99887 76655",
      email: "kabir@example.com",
      address: "41 Park Street",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700016",
    },
    paymentStatus: "failed",
    paymentMethod: "razorpay",
    orderStatus: "pending",
    createdAt: "2026-10-06T13:45:00.000Z",
    updatedAt: "2026-10-06T13:45:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf4",
    user: "user006",
    items: [
      {
        product: { _id: "p006", name: "Colombian Beans" },
        quantity: 1,
        price: 900,
      },
    ],
    subtotal: 900,
    shippingFee: 50,
    discount: 0,
    totalAmount: 950,
    shippingAddress: {
      name: "Diya Mehta",
      phone: "+91 98989 12121",
      email: "diya@example.com",
      address: "12 Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500034",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "delivered",
    createdAt: "2026-10-06T10:00:00.000Z",
    updatedAt: "2026-10-07T15:30:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf5",
    user: "user007",
    items: [
      {
        product: { _id: "p007", name: "Coffee Storage Jar" },
        quantity: 1,
        price: 550,
      },
    ],
    subtotal: 550,
    shippingFee: 50,
    discount: 0,
    totalAmount: 600,
    shippingAddress: {
      name: "Arjun Gill",
      phone: "+91 98111 22233",
      email: "arjun@example.com",
      address: "30 Mall Road",
      city: "Amritsar",
      state: "Punjab",
      pincode: "143001",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "cancelled",
    createdAt: "2026-10-05T09:15:00.000Z",
    updatedAt: "2026-10-05T12:00:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf6",
    user: "user008",
    items: [
      {
        product: { _id: "p008", name: "Dark Roast" },
        quantity: 1,
        price: 1050,
      },
      {
        product: { _id: "p009", name: "Ceramic Coffee Dripper" },
        quantity: 1,
        price: 900,
      },
    ],
    subtotal: 1950,
    shippingFee: 50,
    discount: 100,
    totalAmount: 1900,
    shippingAddress: {
      name: "Sara Khanna",
      phone: "+91 98770 11223",
      email: "sara@example.com",
      address: "17 Koregaon Park",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "processing",
    createdAt: "2026-10-05T08:00:00.000Z",
    updatedAt: "2026-10-05T08:00:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf7",
    user: "user009",
    items: [
      {
        product: { _id: "p010", name: "Travel Coffee Mug" },
        quantity: 1,
        price: 850,
      },
    ],
    subtotal: 850,
    shippingFee: 50,
    discount: 0,
    totalAmount: 900,
    shippingAddress: {
      name: "Vivaan Joshi",
      phone: "+91 98220 33445",
      email: "vivaan@example.com",
      address: "7 Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },
    paymentStatus: "pending",
    paymentMethod: "cod",
    orderStatus: "cancelled",
    createdAt: "2026-10-04T11:00:00.000Z",
    updatedAt: "2026-10-04T13:00:00.000Z",
  },
  {
    _id: "68e612ab1234567890abcdf8",
    user: "user010",
    items: [
      {
        product: { _id: "p011", name: "Espresso Beans" },
        quantity: 1,
        price: 1100,
      },
    ],
    subtotal: 1100,
    shippingFee: 50,
    discount: 0,
    totalAmount: 1150,
    shippingAddress: {
      name: "Kiara Bhatia",
      phone: "+91 98760 98765",
      email: "kiara@example.com",
      address: "22 Sector 17",
      city: "Chandigarh",
      state: "Chandigarh",
      pincode: "160017",
    },
    paymentStatus: "paid",
    paymentMethod: "razorpay",
    orderStatus: "delivered",
    createdAt: "2026-10-04T07:30:00.000Z",
    updatedAt: "2026-10-05T16:20:00.000Z",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesSearch =
        order._id.toLowerCase().includes(query) ||
        order.shippingAddress.name.toLowerCase().includes(query) ||
        (order.shippingAddress.email || "").toLowerCase().includes(query);

      return (
        matchesSearch &&
        (!status || order.orderStatus === status) &&
        (!paymentStatus || order.paymentStatus === paymentStatus)
      );
    });
  }, [orders, search, status, paymentStatus]);

  const handleStatusChange = async (order, nextStatus) => {
    const result = await Swal.fire({
      title: "Update order status?",
      text: `Change order #${order._id.slice(-6).toUpperCase()} to ${nextStatus}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm update",
      cancelButtonText: "Keep current status",
      confirmButtonColor: "#315C4A",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    setOrders((currentOrders) =>
      currentOrders.map((item) =>
        item._id === order._id
          ? {
              ...item,
              orderStatus: nextStatus,
              updatedAt: new Date().toISOString(),
            }
          : item,
      ),
    );

    setSelectedOrder((currentOrder) =>
      currentOrder?._id === order._id
        ? { ...currentOrder, orderStatus: nextStatus }
        : currentOrder,
    );

    await Swal.fire({
      title: "Order updated",
      text: `The order status is now ${nextStatus}.`,
      icon: "success",
      confirmButtonColor: "#315C4A",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="w-full">
      <OrderHeader orders={orders} />

      <OrderFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        onReset={() => {
          setSearch("");
          setStatus("");
          setPaymentStatus("");
        }}
      />

      <OrderTable orders={filteredOrders} onViewOrder={setSelectedOrder} />

      <OrderDetails
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Orders;
