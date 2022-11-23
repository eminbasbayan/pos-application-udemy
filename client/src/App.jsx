import { BrowserRouter, Routes, Route } from "react-router-dom";
import BillPage from "./pages/BillPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
