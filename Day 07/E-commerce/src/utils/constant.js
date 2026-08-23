const products = [
  //  BREWS

  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    category: "brews",
    type: "Whole Bean",
    price: 18.0,
    rating: 4.8,
    reviews: 124,
    description:
      "A bright and floral coffee with delicate citrus and honey sweetness.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    name: "Colombian Supremo",
    category: "brews",
    type: "Whole Bean",
    price: 17.0,
    rating: 4.7,
    reviews: 98,
    description:
      "A smooth and balanced coffee with notes of caramel, cocoa, and toasted nuts.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    name: "House Blend",
    category: "brews",
    type: "Whole Bean",
    price: 16.0,
    rating: 4.9,
    reviews: 186,
    description:
      "Our signature blend combining rich chocolate notes with a smooth caramel finish.",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    name: "Brazilian Santos",
    category: "brews",
    type: "Whole Bean",
    price: 17.5,
    rating: 4.6,
    reviews: 76,
    description:
      "A mellow and nutty coffee with milk chocolate sweetness and a silky body.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    name: "Kenyan AA",
    category: "brews",
    type: "Whole Bean",
    price: 21.0,
    rating: 4.9,
    reviews: 91,
    description:
      "A vibrant and complex coffee with berry acidity, citrus brightness, and a clean finish.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    name: "Midnight Roast",
    category: "brews",
    type: "Whole Bean",
    price: 19.0,
    rating: 4.7,
    reviews: 112,
    description:
      "A bold dark roast with deep cocoa, toasted caramel, and subtle smoky notes.",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    name: "Costa Rican Tarrazú",
    category: "brews",
    type: "Whole Bean",
    price: 20.0,
    rating: 4.8,
    reviews: 84,
    description:
      "A clean and lively coffee with sweet citrus, brown sugar, and a silky finish.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 8,
    name: "Sumatra Mandheling",
    category: "brews",
    type: "Whole Bean",
    price: 19.5,
    rating: 4.7,
    reviews: 73,
    description:
      "A rich full-bodied coffee with earthy spice, dark chocolate, and a smooth finish.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },

  //  GEAR

  {
    id: 9,
    name: "Ceramic Pour Over",
    category: "gear",
    type: "Brewer",
    price: 28.0,
    rating: 4.8,
    reviews: 67,
    description:
      "A minimalist ceramic dripper designed for a clean and flavorful pour-over brew.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 10,
    name: "Aura Hand Grinder",
    category: "gear",
    type: "Grinder",
    price: 65.0,
    rating: 4.9,
    reviews: 54,
    description:
      "A compact manual grinder with precise settings for a consistent coffee grind.",
    image:
      "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 11,
    name: "Gooseneck Kettle",
    category: "gear",
    type: "Kettle",
    price: 72.0,
    rating: 4.7,
    reviews: 43,
    description:
      "A precision gooseneck kettle designed for controlled and effortless pouring.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 12,
    name: "Glass French Press",
    category: "gear",
    type: "Brewer",
    price: 38.0,
    rating: 4.8,
    reviews: 81,
    description:
      "A timeless glass French press for brewing rich, full-bodied coffee at home.",
    image:
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 13,
    name: "Precision Coffee Scale",
    category: "gear",
    type: "Scale",
    price: 35.0,
    rating: 4.6,
    reviews: 39,
    description:
      "A sleek digital scale for accurately measuring coffee and water for every brew.",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 14,
    name: "Glass Coffee Carafe",
    category: "gear",
    type: "Brewing",
    price: 32.0,
    rating: 4.8,
    reviews: 48,
    description:
      "A clean glass carafe designed for serving pour-over coffee with effortless style.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },

  //  ACCESSORIES

  {
    id: 15,
    name: "Aura Ceramic Mug",
    category: "accessories",
    type: "Drinkware",
    price: 18.0,
    rating: 4.9,
    reviews: 143,
    description:
      "A beautifully crafted ceramic mug made for slow mornings and everyday coffee rituals.",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 16,
    name: "Aura Travel Tumbler",
    category: "accessories",
    type: "Drinkware",
    price: 26.0,
    rating: 4.8,
    reviews: 88,
    description:
      "A sleek insulated tumbler that keeps your coffee warm wherever the day takes you.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 17,
    name: "Coffee Bean Storage Jar",
    category: "accessories",
    type: "Storage",
    price: 24.0,
    rating: 4.7,
    reviews: 52,
    description:
      "An airtight storage jar designed to keep your coffee beans fresh and flavorful.",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 18,
    name: "Bamboo Coffee Scoop",
    category: "accessories",
    type: "Accessory",
    price: 12.0,
    rating: 4.6,
    reviews: 41,
    description:
      "A simple handcrafted bamboo scoop for measuring your coffee beans with ease.",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 19,
    name: "Ceramic Espresso Cup",
    category: "accessories",
    type: "Drinkware",
    price: 16.0,
    rating: 4.8,
    reviews: 63,
    description:
      "A compact ceramic espresso cup designed to bring a refined touch to your coffee ritual.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 20,
    name: "Coffee Tasting Set",
    category: "accessories",
    type: "Gift Set",
    price: 42.0,
    rating: 4.9,
    reviews: 57,
    description:
      "A curated tasting set made for discovering new flavors and enjoying coffee with friends.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
  },
];

export default products;
