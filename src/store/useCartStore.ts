import { create } from "zustand";
import { ICartItem } from "../types/cart-item";
import { ICartState } from "../types/cart-state";
import { IProduct } from "../types/item";

export const useCartStore = create<ICartState>((set) => ({
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  addToCart: (product: IProduct) =>
    set((state: ICartState) => {
      const newCartItems = [...state.cartItems];
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        newCartItems.push({ ...product, quantity: 1 });
      }
      return {
        cartItems: newCartItems,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + product.price,
      };
    }),
  removeFromCart: (itemToRemove: ICartItem) =>
    set((state: ICartState) => {
      const items = state.cartItems.filter(
        (item) => item.id !== itemToRemove.id
      );

      return {
        cartItems: [...items],
        totalQuantity: state.totalQuantity - itemToRemove.quantity,
        totalAmount:
          state.totalAmount - itemToRemove.quantity * itemToRemove.price,
      };
    }),
}));
