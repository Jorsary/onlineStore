import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  const [cart, setCart] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center box-border px-20">
        <div className="bg-white max-w-6xl w-full rounded-2xl shadow-lg  my-6">
            {cart && <Cart onClose={()=>setCart(false)} />}
          <Header  onClose={()=>setCart(true)} />
          <MainPage /> 
        </div>
      </div>
    </div>
  );
}

export default App;
