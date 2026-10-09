import { useMemo, useState } from "react";
import InventoryHeader from "../components/Inventory/InventoryHeader";
import InventoryFilters from "../components/Inventory/InventoryFilters";
import InventoryTable from "../components/Inventory/InventoryTable";

const initialProducts = [
  {
    id: "1",
    name: "House Blend",
    category: "Brews",
    stock: 12,
    image: "https://placehold.co/100x100/F1E6D5/3A1407?text=Coffee",
  },
  {
    id: "2",
    name: "Ethiopian Roast",
    category: "Brews",
    stock: 3,
    image: "https://placehold.co/100x100/E9DDC9/3A1407?text=Roast",
  },
  {
    id: "3",
    name: "Classic French Press",
    category: "Gear",
    stock: 8,
    image: "https://placehold.co/100x100/E5E7EB/315C4A?text=Press",
  },
  {
    id: "4",
    name: "Cold Brew Bottle",
    category: "Accessories",
    stock: 0,
    image: "https://placehold.co/100x100/DCE8E1/315C4A?text=Bottle",
  },
  {
    id: "5",
    name: "Ceramic Coffee Dripper",
    category: "Gear",
    stock: 5,
    image: "https://placehold.co/100x100/F1E6D5/3A1407?text=Dripper",
  },
  {
    id: "6",
    name: "Dark Roast",
    category: "Brews",
    stock: 15,
    image: "https://placehold.co/100x100/E9DDC9/3A1407?text=Coffee",
  },
  {
    id: "7",
    name: "Pour Over Set",
    category: "Gear",
    stock: 7,
    image: "https://placehold.co/100x100/E5E7EB/315C4A?text=Pour",
  },
  {
    id: "8",
    name: "Coffee Storage Jar",
    category: "Accessories",
    stock: 2,
    image: "https://placehold.co/100x100/DCE8E1/315C4A?text=Jar",
  },
  {
    id: "9",
    name: "Colombian Beans",
    category: "Brews",
    stock: 10,
    image: "https://placehold.co/100x100/F1E6D5/3A1407?text=Beans",
  },
  {
    id: "10",
    name: "Travel Coffee Mug",
    category: "Accessories",
    stock: 4,
    image: "https://placehold.co/100x100/DCE8E1/315C4A?text=Mug",
  },
  {
    id: "11",
    name: "Espresso Beans",
    category: "Brews",
    stock: 9,
    image: "https://placehold.co/100x100/E9DDC9/3A1407?text=Espresso",
  },
  {
    id: "12",
    name: "Glass Server",
    category: "Gear",
    stock: 6,
    image: "https://placehold.co/100x100/E5E7EB/315C4A?text=Server",
  },
];

const Inventory = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [stockStatus, setStockStatus] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory = category === "" || product.category === category;

      const matchesStock =
        stockStatus === ""
          ? true
          : stockStatus === "in-stock"
            ? product.stock > 5
            : stockStatus === "low-stock"
              ? product.stock > 0 && product.stock <= 5
              : product.stock === 0;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [products, search, category, stockStatus]);

  const handleStockUpdate = (id, stock) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === id ? { ...product, stock } : product,
      ),
    );
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setStockStatus("");
  };

  return (
    <div className="w-full">
      <InventoryHeader products={products} />

      <InventoryFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        stockStatus={stockStatus}
        setStockStatus={setStockStatus}
        onReset={handleReset}
      />

      <InventoryTable
        products={filteredProducts}
        onStockUpdate={handleStockUpdate}
      />
    </div>
  );
};

export default Inventory;
