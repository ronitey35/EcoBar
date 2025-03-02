import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden p-4 border border-gray-200 hover:shadow-xl transition-all">
      {product.tag && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          {product.tag}
        </span>
      )}
      <div className="flex justify-center items-center h-40">
        <img src={ `/products/${product.image}` } alt={product.name} className="h-full w-auto object-contain" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-green-600 font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between items-center mt-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-green-600 transition">
            <ShoppingCart size={16} />
          </button>
          <button className="text-gray-500 hover:text-red-500 transition">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
