import React from "react";
import { useCartStore } from "../store/useCartStore";
import { ICartItem } from "../types/cart-item";

const CartSummary: React.FC = () => {
  const { cartItems, totalAmount, removeFromCart } = useCartStore();
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item: ICartItem) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default CartSummary;
