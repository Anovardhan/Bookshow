import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import Castpage from "./Components/Castpage";
import { useState } from "react";
import Bookingpage from "./Components/Bookingpage";
export default function App() {
  const [searchterm, setsearchterm] = useState("");

  return (
    <BrowserRouter>
      <Nav searchterm={searchterm} setsearchterm={setsearchterm} />
      <Routes>
        <Route path="/" element={<Home searchterm={searchterm} />} />
        <Route path="/movies/:id" element={<ProductList />} />
        <Route path="/movies/:id/cast/:castid" element={<Castpage />} />
        <Route path="/movies/:id/bookings/:bookid" element={<Bookingpage />} />
      </Routes>
    </BrowserRouter>
  );
}
