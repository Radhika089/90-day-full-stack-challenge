const STORAGE_KEY = "aura_admin_categories";

const initialCategories = [
  {
    id: "1",
    name: "Brews",
    description: "Coffee beans, blends, and brewing coffee.",
    productCount: 6,
    status: true,
  },
  {
    id: "2",
    name: "Gear",
    description: "Coffee brewing tools and equipment.",
    productCount: 4,
    status: true,
  },
  {
    id: "3",
    name: "Accessories",
    description: "Coffee mugs, storage, and accessories.",
    productCount: 2,
    status: true,
  },
];

export const getCategories = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCategories));
    return initialCategories;
  } catch {
    return initialCategories;
  }
};

export const saveCategories = (categories) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
};

export const getCategoryById = (id) => {
  return getCategories().find((category) => category.id === String(id));
};

export const addCategory = (category) => {
  const categories = getCategories();

  const newCategory = {
    ...category,
    id: String(Date.now()),
    productCount: 0,
  };

  saveCategories([...categories, newCategory]);

  return newCategory;
};

export const updateCategory = (id, updatedCategory) => {
  const categories = getCategories();

  const updatedCategories = categories.map((category) =>
    category.id === String(id)
      ? { ...category, ...updatedCategory, id: category.id }
      : category,
  );

  saveCategories(updatedCategories);
};

export const deleteCategory = (id) => {
  const categories = getCategories();

  saveCategories(categories.filter((category) => category.id !== String(id)));
};

export const toggleCategoryStatus = (id) => {
  const categories = getCategories();

  const updatedCategories = categories.map((category) =>
    category.id === String(id)
      ? { ...category, status: !category.status }
      : category,
  );

  saveCategories(updatedCategories);
};
