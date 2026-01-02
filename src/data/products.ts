// Product data for the e-commerce store
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  inStock: boolean;
}

export const categories = [
  { id: "electronics", name: "Electronics", icon: "Smartphone" },
  { id: "computers", name: "Computers", icon: "Laptop" },
  { id: "clothes", name: "Clothes", icon: "Shirt" },
  { id: "arts-crafts", name: "Arts & Crafts", icon: "Palette" },
  { id: "toys-games", name: "Toys & Games", icon: "Gamepad2" },
  { id: "jewelry", name: "Jewelry", icon: "Gem" },
  { id: "beauty-care", name: "Beauty & Care", icon: "Sparkles" },
  { id: "mother-kids", name: "Mother & Kids", icon: "Baby" },
  { id: "home-design", name: "Home Design", icon: "Lamp" },
  { id: "sports", name: "Sports", icon: "Dumbbell" },
  { id: "pet-supplies", name: "Pet Supplies", icon: "Cat" },
] as const;

export const popularCategories = [
  { id: "household", name: "Household Goods", image: "kettle", discount: 30 },
  { id: "controllers", name: "Game Controllers", image: "game-controller", isNew: true },
  { id: "accessories", name: "Accessories", image: "tote-bag" },
  { id: "furniture", name: "Furniture", image: "chair" },
] as const;

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Premium Wireless Headphones",
    category: "electronics",
    subcategory: "headphones",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "headphones-hero",
    description: "Premium wireless over-ear headphones with active noise cancellation",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
  },
  {
    id: "2",
    name: "Wireless Earbuds Pro",
    category: "electronics",
    subcategory: "headphones",
    price: 149.99,
    originalPrice: 179.99,
    discount: 17,
    image: "earbuds",
    description: "True wireless earbuds with premium sound quality",
    rating: 4.6,
    reviews: 892,
    inStock: true,
  },
  {
    id: "3",
    name: "Smart Watch Elite",
    category: "electronics",
    price: 299.99,
    image: "smartwatch",
    description: "Advanced smartwatch with health monitoring",
    rating: 4.7,
    reviews: 654,
    isNew: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Fujifilm Instax Mini 11",
    category: "electronics",
    price: 89.99,
    image: "instax-camera",
    description: "Instant camera for capturing memories",
    rating: 4.5,
    reviews: 2341,
    inStock: true,
  },
  // Computers
  {
    id: "5",
    name: "MacBook Pro 14-inch",
    category: "computers",
    price: 1999.99,
    image: "laptop",
    description: "Powerful laptop for professionals",
    rating: 4.9,
    reviews: 567,
    inStock: true,
  },
  // Home Design
  {
    id: "6",
    name: "Retro Electric Kettle",
    category: "home-design",
    subcategory: "household",
    price: 79.99,
    originalPrice: 109.99,
    discount: 30,
    image: "kettle",
    description: "Vintage style electric kettle in soft blue",
    rating: 4.4,
    reviews: 423,
    inStock: true,
  },
  {
    id: "7",
    name: "Modern Desk Lamp",
    category: "home-design",
    price: 129.99,
    image: "desk-lamp",
    description: "Minimalist desk lamp with adjustable arm",
    rating: 4.6,
    reviews: 312,
    inStock: true,
  },
  {
    id: "8",
    name: "Mid-Century Accent Chair",
    category: "home-design",
    subcategory: "furniture",
    price: 449.99,
    image: "chair",
    description: "Elegant accent chair in burnt orange",
    rating: 4.8,
    reviews: 189,
    inStock: true,
  },
  // Toys & Games
  {
    id: "9",
    name: "Pro Gaming Controller",
    category: "toys-games",
    subcategory: "controllers",
    price: 69.99,
    image: "game-controller",
    description: "Professional gaming controller with precision controls",
    rating: 4.7,
    reviews: 1567,
    isNew: true,
    inStock: true,
  },
  {
    id: "10",
    name: "Cuddly Teddy Bear",
    category: "toys-games",
    price: 34.99,
    image: "teddy-bear",
    description: "Soft and huggable teddy bear toy",
    rating: 4.9,
    reviews: 876,
    inStock: true,
  },
  // Beauty & Care
  {
    id: "11",
    name: "Luxury Face Serum",
    category: "beauty-care",
    price: 89.99,
    image: "serum",
    description: "Premium anti-aging face serum",
    rating: 4.5,
    reviews: 654,
    inStock: true,
  },
  // Clothes
  {
    id: "12",
    name: "Designer Tote Bag",
    category: "clothes",
    subcategory: "accessories",
    price: 159.99,
    image: "tote-bag",
    description: "Elegant leather tote bag in dusty blue",
    rating: 4.6,
    reviews: 234,
    inStock: true,
  },
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(
    (p) => p.category === category || p.subcategory === category
  );
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
