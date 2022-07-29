import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./layout/navbar/Footer";
import Navbar from "./layout/navbar/Navbar";

import Categorias from "./pages/Categorias";
import Detalles from "./pages/Detalles";
import Estado from "./pages/Estado";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pago from "./pages/Pago";
import Rating from "./pages/Rating";
import Trabajo from "./pages/Trabajo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/trabajo" element={<Trabajo />} />
        <Route path="/estado" element={<Estado />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
      <Footer />
      <div>hola</div>
    </BrowserRouter>
  );
}

export default App;
