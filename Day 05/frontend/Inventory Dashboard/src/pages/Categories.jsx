import React from "react";
import Header from "../components/Categories/Header";
import CategoryList from "../components/Categories/CategoryList";
import DeleteCategoryModal from "../components/Categories/DeleteCategoryModal";

const Categories = () => {
  return (
    <div>
      <Header />
      <CategoryList />

      <DeleteCategoryModal />
    </div>
  );
};

export default Categories;
