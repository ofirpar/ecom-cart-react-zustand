import React from "react";
import { useCartStore } from "../store/useCartStore";
import { IProduct } from "../types/item";

const products: IProduct[] = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
];

const ProductList: React.FC = () => {
  const { addToCart } = useCartStore();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
