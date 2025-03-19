"use client";

import { useState } from "react";
import { useProducts } from "../../queries/use-product";
import { ShoppingCart, Star } from "lucide-react";
import ProductCard from "../layout/product-card";
import { Range } from "react-range";

const categories = [
  { id: 1, title: "All", value: "all" },
  { id: 2, title: "Fruits", value: "fruits" },
  { id: 3, title: "Vegetables", value: "vegetables" },
  { id: 4, title: "Meat & Fish", value: "meat&fish" },
];

const ratings = [5, 4, 3, 2, 1];

const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([10, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating((prev) => (prev === rating ? null : rating));
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setPriceRange([10, 1000]);
    setSelectedRating(null);
  };

  const filteredProducts = products?.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = !selectedRating || product.rating >= selectedRating;
    return matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Our Products</h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filter Section */}
        <div className="w-full lg:w-1/4">
          <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold">Filters</h2>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium text-gray-900">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex cursor-pointer items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.value}
                      checked={selectedCategory === category.value}
                      onChange={() => handleCategoryChange(category.value)}
                      className="h-4 w-4 accent-green-600"
                    />
                    <span className="ml-2 text-sm">{category.title}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium text-gray-900">Price Range</h3>
              <Range
                step={10}
                min={10}
                max={1000}
                values={priceRange}
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                  <div {...props} className="h-2 bg-gray-300 rounded-lg relative">
                    <div
                      className="absolute h-full bg-green-600 rounded-lg"
                      style={{
                        left: `${((priceRange[0] - 10) / (1000 - 10)) * 100}%`,
                        right: `${100 - ((priceRange[1] - 10) / (1000 - 10)) * 100}%`,
                      }}
                    />
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="w-4 h-4 bg-green-600 rounded-full cursor-pointer" />
                )}
              />
              <div className="flex justify-between text-sm mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Ratings */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium text-gray-900">Ratings</h3>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <label key={rating} className="flex cursor-pointer items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={selectedRating === rating}
                      onChange={() => handleRatingChange(rating)}
                      className="h-4 w-4 accent-green-600"
                    />
                    <span className="ml-2 flex items-center text-sm">
                      <span className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </span>
                      <span className="ml-1">& Up</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={resetFilters}
              className="w-full mt-4 rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* product grid */}
        <div className="w-full lg:w-3/4">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-[300px] animate-pulse rounded-2xl bg-gray-200"></div>
              ))}
            </div>
          ) : filteredProducts?.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
              <div className="mb-4 text-gray-400">
                <ShoppingCart size={48} />
              </div>
              <h3 className="mb-1 text-lg font-medium">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
 

    </div>
  );
};

export default Products;