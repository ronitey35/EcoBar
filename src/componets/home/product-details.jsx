import { useState } from "react";
import { useProducts } from "../../queries/use-product";
import ProductCard from "../layout/product-card";


const categories = ["All", "Vegetables", "Fruit", "Meat & Fish"];

const ProductsDetails = () => {
  const {data:productsData} = useProducts()
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
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDetails;
