import { useState } from "react";
import CustomerHeader from "../components/Customers/CustomerHeader";
import CustomerTable from "../components/Customers/CustomerTable";
import CustomerDetails from "../components/Customers/CustomerDetails";

const initialCustomers = [
  {
    id: "customer-001",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    phone: "+91 98765 43210",
    orders: 4,
    totalSpent: 4850,
    joined: "12 Aug 2026",
    address: "24 Green Park, New Delhi, Delhi - 110016",
  },
  {
    id: "customer-002",
    name: "Meera Kapoor",
    email: "meera@example.com",
    phone: "+91 98765 12340",
    orders: 1,
    totalSpent: 1200,
    joined: "08 Oct 2026",
    address: "18 Model Town, Ludhiana, Punjab - 141002",
  },
  {
    id: "customer-003",
    name: "Ishaan Verma",
    email: "ishaan@example.com",
    phone: "+91 98123 45670",
    orders: 3,
    totalSpent: 3650,
    joined: "22 Jul 2026",
    address: "52 Civil Lines, Jaipur, Rajasthan - 302006",
  },
  {
    id: "customer-004",
    name: "Ananya Singh",
    email: "ananya@example.com",
    phone: "+91 97654 32100",
    orders: 2,
    totalSpent: 2450,
    joined: "15 Sep 2026",
    address: "9 Sector 22, Chandigarh - 160022",
  },
  {
    id: "customer-005",
    name: "Kabir Malhotra",
    email: "kabir@example.com",
    phone: "+91 99887 76655",
    orders: 1,
    totalSpent: 1500,
    joined: "06 Oct 2026",
    address: "41 Park Street, Kolkata, West Bengal - 700016",
  },
  {
    id: "customer-006",
    name: "Diya Mehta",
    email: "diya@example.com",
    phone: "+91 98989 12121",
    orders: 5,
    totalSpent: 6200,
    joined: "03 Jun 2026",
    address: "12 Banjara Hills, Hyderabad, Telangana - 500034",
  },
  {
    id: "customer-007",
    name: "Arjun Gill",
    email: "arjun@example.com",
    phone: "+91 98111 22233",
    orders: 1,
    totalSpent: 600,
    joined: "05 Oct 2026",
    address: "30 Mall Road, Amritsar, Punjab - 143001",
  },
  {
    id: "customer-008",
    name: "Sara Khanna",
    email: "sara@example.com",
    phone: "+91 98770 11223",
    orders: 2,
    totalSpent: 3850,
    joined: "18 Aug 2026",
    address: "17 Koregaon Park, Pune, Maharashtra - 411001",
  },
];

const Customers = () => {
  const [customers] = useState(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="w-full">
      <CustomerHeader customers={customers} />

      <CustomerTable
        customers={customers}
        onViewCustomer={setSelectedCustomer}
      />

      <CustomerDetails
        customer={selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
      />
    </div>
  );
};

export default Customers;
