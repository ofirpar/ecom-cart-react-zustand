import "./App.css";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

function App() {
  return (
    <div>
      <h1>E-Commerce Cart</h1>
      <div className="main">
        <ProductList />
        <CartSummary />
      </div>
    </div>
  );
}

export default App;
