
import { HiOutlineXCircle } from "react-icons/hi";
import useCartStore from "../../store/use-cart-store";

const CartItems = () => {
  const { cart, updateQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <HiOutlineXCircle
              className="h-6 w-6 text-red-600 cursor-pointer"
              onClick={() => removeFromCart(item.id)}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No Items in the cart</p>
      )}

      {cart.length > 0 && (
        <div className="flex justify-between mt-4 font-semibold">
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default CartItems;