const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    category: "Whole Bean",
    price: 18,
    rating: 4.8,
    reviews: 124,
    weight: "250g",
    roast: "Light",
    origin: "Ethiopia",
    tastingNotes: ["Jasmine", "Citrus", "Honey"],
    description:
      "A bright and floral coffee with delicate citrus and honey sweetness.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    name: "Colombian Reserve",
    category: "Whole Bean",
    price: 16,
    rating: 4.7,
    reviews: 98,
    weight: "250g",
    roast: "Medium",
    origin: "Colombia",
    tastingNotes: ["Caramel", "Chocolate", "Nuts"],
    description:
      "A smooth and balanced coffee with caramel sweetness and nutty notes.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    name: "Midnight Roast",
    category: "Whole Bean",
    price: 17,
    rating: 4.6,
    reviews: 86,
    weight: "250g",
    roast: "Dark",
    origin: "Brazil",
    tastingNotes: ["Dark Chocolate", "Caramel", "Smoke"],
    description:
      "A bold dark roast with rich chocolate and toasted caramel flavors.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    name: "Costa Rica Honey",
    category: "Whole Bean",
    price: 19,
    rating: 4.9,
    reviews: 143,
    weight: "250g",
    roast: "Light",
    origin: "Costa Rica",
    tastingNotes: ["Honey", "Tropical Fruit", "Brown Sugar"],
    description:
      "A vibrant coffee with tropical fruit flavors and natural honey sweetness.",
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    name: "House Espresso",
    category: "Ground Coffee",
    price: 14,
    rating: 4.5,
    reviews: 76,
    weight: "250g",
    roast: "Dark",
    origin: "House Blend",
    tastingNotes: ["Chocolate", "Roasted Nuts", "Caramel"],
    description:
      "A rich and full-bodied espresso blend made for a strong morning cup.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    name: "Vanilla Cream Brew",
    category: "Ground Coffee",
    price: 15,
    rating: 4.4,
    reviews: 64,
    weight: "250g",
    roast: "Medium",
    origin: "House Blend",
    tastingNotes: ["Vanilla", "Cream", "Caramel"],
    description:
      "A smooth coffee blend with subtle vanilla and creamy sweetness.",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    name: "Hazelnut Morning",
    category: "Ground Coffee",
    price: 15,
    rating: 4.3,
    reviews: 58,
    weight: "250g",
    roast: "Medium",
    origin: "House Blend",
    tastingNotes: ["Hazelnut", "Caramel", "Cocoa"],
    description:
      "A comforting morning blend with roasted hazelnut and caramel notes.",
    image:
      "https://plus.unsplash.com/premium_photo-1676929362309-b126513ccf66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGF6ZWxudXQlMjBNb3JuaW5nfGVufDB8fDB8fHww",
  },

  {
    id: 8,
    name: "Guatemala Antigua",
    category: "Whole Bean",
    price: 20,
    rating: 4.8,
    reviews: 112,
    weight: "250g",
    roast: "Medium",
    origin: "Guatemala",
    tastingNotes: ["Cocoa", "Orange", "Brown Sugar"],
    description:
      "A beautifully balanced coffee with cocoa, citrus, and brown sugar notes.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 9,
    name: "Classic Cold Brew",
    category: "Cold Brew",
    price: 11,
    rating: 4.2,
    reviews: 47,
    weight: "330ml",
    roast: "Medium",
    origin: "House Blend",
    tastingNotes: ["Chocolate", "Caramel"],
    description:
      "Slow-steeped coffee with a smooth body and naturally sweet finish.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 10,
    name: "Vanilla Cold Brew",
    category: "Cold Brew",
    price: 12,
    rating: 4.6,
    reviews: 69,
    weight: "330ml",
    roast: "Medium",
    origin: "House Blend",
    tastingNotes: ["Vanilla", "Cocoa", "Cream"],
    description:
      "Silky cold brew with a gentle vanilla finish and smooth body.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 11,
    name: "Brazilian Santos",
    category: "Whole Bean",
    price: 15,
    rating: 4.1,
    reviews: 39,
    weight: "250g",
    roast: "Medium",
    origin: "Brazil",
    tastingNotes: ["Milk Chocolate", "Nuts", "Caramel"],
    description:
      "A mellow Brazilian coffee with a smooth body and chocolate sweetness.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 12,
    name: "Morning Ritual Bundle",
    category: "Coffee Bundles",
    price: 36,
    rating: 4.7,
    reviews: 91,
    weight: "500g",
    roast: "Medium",
    origin: "House Blend",
    tastingNotes: ["Caramel", "Chocolate", "Nuts"],
    description:
      "A carefully selected bundle for your everyday morning coffee ritual.",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 13,
    name: "Explorer's Collection",
    category: "Coffee Bundles",
    price: 48,
    rating: 4.9,
    reviews: 157,
    weight: "750g",
    roast: "Mixed",
    origin: "Multiple Origins",
    tastingNotes: ["Floral", "Chocolate", "Fruit"],
    description:
      "Three unique coffees from different growing regions in one collection.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 14,
    name: "Decaf Evening Roast",
    category: "Ground Coffee",
    price: 16,
    rating: 4.3,
    reviews: 52,
    weight: "250g",
    roast: "Medium",
    origin: "Colombia",
    tastingNotes: ["Cocoa", "Caramel", "Almond"],
    description: "A smooth decaf coffee designed for relaxing evening cups.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 15,
    name: "Sumatra Dark",
    category: "Whole Bean",
    price: 18,
    rating: 4.6,
    reviews: 83,
    weight: "250g",
    roast: "Dark",
    origin: "Indonesia",
    tastingNotes: ["Dark Chocolate", "Spice", "Earthy"],
    description:
      "A deep and earthy dark roast with chocolate and subtle spice.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
];

export default products;
