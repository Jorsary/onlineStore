import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";


function App() {
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center box-border px-20">
        <div className="bg-white max-w-6xl w-full rounded-2xl shadow-2xl  my-6">
          {cart && <Cart onCloseCart={() => setCart(false)} />}
          <Header onCloseCart={() => setCart(true)} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
