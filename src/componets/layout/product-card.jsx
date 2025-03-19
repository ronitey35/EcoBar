import { Heart, ShoppingCart } from "lucide-react"
import useCartStore from "../../store/use-cart-store"

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore()

  return (
    <div className="relative h-[300px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-all hover:shadow-xl">
      {product.tag && (
        <span className="absolute left-2 top-2 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
          {product.tag}
        </span>
      )}
      <div className="flex h-40 items-center justify-center">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-auto object-contain" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-1 rounded-full bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
          >
            <ShoppingCart size={16} />
          </button>
          <button className="text-gray-500 transition hover:text-red-500">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard