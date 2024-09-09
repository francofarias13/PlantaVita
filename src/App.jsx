import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/NavBar/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/NavBar/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/NavBar/context/CartContext";
import Cart from "./components/NavBar/Cart/Cart";

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
