import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (item) => {
        const cart = get().cart;
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          set({
            cart: cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          set({
            cart: [...cart, { ...item, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      decreaseQuantity: (id) => {
        set({
          cart: get().cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      updateQuantity: (id, quantity) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.quantity * item.price, 0);
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
