import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
