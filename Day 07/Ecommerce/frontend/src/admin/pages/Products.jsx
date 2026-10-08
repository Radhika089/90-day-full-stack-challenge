import { useState } from "react";
import ProductFilters from "../components/Products/ProductFilters";
import ProductHeader from "../components/Products/ProductHeader";
import ProductTable from "../components/Products/ProductTable";

const Products = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [stockSort, setStockSort] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "House Blend",
      category: "Brews",
      price: 850,
      stock: 12,
      status: true,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      id: 2,
      name: "Ethiopian Roast",
      category: "Brews",
      price: 950,
      stock: 3,
      status: true,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    },
    {
      id: 3,
      name: "Classic French Press",
      category: "Gear",
      price: 1200,
      stock: 8,
      status: true,
      image: "https://images.unsplash.com/photo-1572119865084-43c285814d63",
    },
    {
      id: 4,
      name: "Cold Brew Bottle",
      category: "Accessories",
      price: 750,
      stock: 0,
      status: false,
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    },
    {
      id: 5,
      name: "Ceramic Coffee Dripper",
      category: "Gear",
      price: 650,
      stock: 5,
      status: true,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    },
    {
      id: 6,
      name: "Dark Roast",
      category: "Brews",
      price: 1050,
      stock: 15,
      status: true,
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",
    },
    {
      id: 7,
      name: "Pour Over Set",
      category: "Gear",
      price: 1450,
      stock: 7,
      status: true,
      image: "https://images.unsplash.com/photo-1524350876685-274059332603",
    },
    {
      id: 8,
      name: "Coffee Storage Jar",
      category: "Accessories",
      price: 550,
      stock: 2,
      status: true,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    },
    {
      id: 9,
      name: "Colombian Beans",
      category: "Brews",
      price: 900,
      stock: 10,
      status: true,
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf",
    },
    {
      id: 10,
      name: "Travel Coffee Mug",
      category: "Accessories",
      price: 850,
      stock: 4,
      status: false,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a",
    },
    {
      id: 11,
      name: "Espresso Beans",
      category: "Brews",
      price: 1100,
      stock: 9,
      status: true,
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
    },
    {
      id: 12,
      name: "Glass Server",
      category: "Gear",
      price: 1300,
      stock: 6,
      status: true,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
  ]);

  const handleStatusToggle = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              status: !product.status,
            }
          : product,
      ),
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" ||
      product.category.toLowerCase() === category.toLowerCase();

    const matchesStatus =
      status === "" ||
      (status === "active" && product.status === true) ||
      (status === "inactive" && product.status === false);

    return matchSearch && matchesCategory && matchesStatus;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (priceSort === "low-high") {
      return a.price - b.price;
    }

    if (priceSort === "high-low") {
      return b.price - a.price;
    }

    if (stockSort === "low-high") {
      return a.stock - b.stock;
    }

    if (stockSort === "high-low") {
      return b.stock - a.stock;
    }

    return 0;
  });

  return (
    <div>
      <ProductHeader />
      <ProductFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        stockSort={stockSort}
        setStockSort={setStockSort}
      />
      <ProductTable
        products={sortedProducts}
        onStatusToggle={handleStatusToggle}
      />
    </div>
  );
};

export default Products;
