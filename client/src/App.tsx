import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="px-15 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:href" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
