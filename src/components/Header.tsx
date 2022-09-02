import React, { ComponentElement, useEffect, useState } from "react";
import { CartProps } from "../models/IProduct";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { cartShow, getTotals } from "../store/reducers/CartSlice";

export default function Header() {
  const { cartTotal,cartItems, } = useAppSelector((state) => state.cart);
  const totalCart = Number(cartTotal);
  const dispatch=useAppDispatch()
  
  
  return (
    <header className="flex justify-between items-center px-14 py-10 border-b border-b-slate-200">
        <NavLink className="flex items-center" to="/">
          <img width={40} height={40} className="mr-4" src="img/logo.png" />
          <div className="cursor-pointer">
            <h3 className="uppercase font-bold text-xl leading-6 min-w-max">
              React store
            </h3>
          <p className="text-sm opacity-50 min-w-max">Магазин низких цен</p>
        </div>
      </NavLink>
      <ul className="flex flex-shrink basis-48 justify-between items-center">
        <li onClick={()=>dispatch(cartShow())} className="cursor-pointer flex">
          <img className="mr-2" src="img/cart.svg" />
          <span className="text-cyan-500 text-xl">{totalCart}</span>
        </li>

        <li className="cursor-pointer">
          <NavLink to="/favorites">
            <img  src="./img/like.svg" alt="" />
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <img src="./img/union.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}
