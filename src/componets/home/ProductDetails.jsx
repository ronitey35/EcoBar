import { useState } from "react";
import ProductCard from "../layout/ProductCard";

const productsData = [
  {
    id: 1,
    name: "Green Apples",
    category: "Fruit",
    price: 14.99,
    oldPrice: 19.99,
    image: "apple.png",
    rating: 4,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Fresh Mango",
    category: "Fruit",
    price: 10.99,
    image: "mango.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Tomatoes",
    category: "Vegetables",
    price: 4.99,
    image: "tomato.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Cauliflower",
    category: "Vegetables",
    price: 10.99,
    image: "cauliflower.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Green Lettuce",
    category: "Vegetables",
    price: 8.99,
    image: "lettuce.png",
    rating: 3,
  },
  {
    id: 6,
    name: "Capsicum",
    category: "Vegetables",
    price: 12.99,
    image: "capsicon.png",
    rating: 4,
  },
  {
    id: 7,
    name: "Green Chili",
    category: "Vegetables",
    price: 6.99,
    image: "chilli.png",
    rating: 3,
  },
  {
    id: 8,
    name: "Eggplant",
    category: "Vegetables",
    price: 9.99,
    image: "eggplant.png",
    rating: 4,
  },
];

const categories = ["All", "Vegetables", "Fruit", "Meat & Fish"];

const ProductsDetails = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All" 
      ? productsData
      : productsData.filter((product) => product.category === activeCategory);

  return (
    <div className="max-width section-padding-x ">
      <h1 className="text-4xl font-bold text-center mb-8">Introducing Our Products</h1>

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-md">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === category
                  ? "bg-green-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDetails;
