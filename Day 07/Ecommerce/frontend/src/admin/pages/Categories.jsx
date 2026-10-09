import { useMemo, useState } from "react";
import CategoryHeader from "../components/Categories/CategoryHeader";
import CategoryFilters from "../components/Categories/CategoryFilters";
import CategoryTable from "../components/Categories/CategoryTable";
import {
  deleteCategory,
  getCategories,
  toggleCategoryStatus,
} from "../utils/categoryStorage";

const Categories = () => {
  const [categories, setCategories] = useState(() => getCategories());
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesSearch = [category.name, category.description].some(
        (value) => value?.toLowerCase().includes(search.trim().toLowerCase()),
      );

      const matchesStatus =
        status === ""
          ? true
          : status === "active"
            ? category.status
            : !category.status;

      return matchesSearch && matchesStatus;
    });
  }, [categories, search, status]);

  const handleDelete = (id) => {
    deleteCategory(id);
    setCategories(getCategories());
  };

  const handleStatusToggle = (id) => {
    toggleCategoryStatus(id);
    setCategories(getCategories());
  };

  const handleReset = () => {
    setSearch("");
    setStatus("");
  };

  return (
    <div className="w-full">
      <CategoryHeader />

      <CategoryFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onReset={handleReset}
      />

      <CategoryTable
        categories={filteredCategories}
        onDelete={handleDelete}
        onStatusToggle={handleStatusToggle}
      />
    </div>
  );
};

export default Categories;
