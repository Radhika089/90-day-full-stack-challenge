import React, { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mouse",
    },
    {
      id: 2,
      name: "Keyboard",
    },
  ]);

  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");

  const addProduct = () => {
    if (!input.trim()) return;

    const newProduct = {
      id: Date.now(),
      name: input,
    };

    setProducts([...products, newProduct]);
    setInput("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (id) => {
    if (!editInput.trim()) return;

    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            name: editInput,
          };
        }

        return product;
      }),
    );

    setEditInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Product Manager</h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your products with React state
        </p>

        {/* Add Product */}
        <div className="mt-6 space-y-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter product name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <button
            onClick={addProduct}
            className="w-full rounded-xl bg-black py-3 text-white font-medium hover:bg-zinc-800 transition">
            Add Product
          </button>
        </div>

        {/* Edit Product */}
        <div className="mt-6">
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder="Enter new product name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
          />
        </div>

        {/* Product List */}
        <div className="mt-8 space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-2xl border border-gray-200 p-4 hover:shadow-sm transition">
              <div>
                <p className="font-semibold text-gray-900">{product.name}</p>

                <p className="text-xs text-gray-400">ID: {product.id}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => editProduct(product.id)}
                  className="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700 hover:bg-green-200 transition">
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700 hover:bg-red-200 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
