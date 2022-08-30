import React from "react";
import { useAppSelector } from "../hooks/redux";
import { CartProps } from "../models/IProduct";
import CartItem from "./CartItem";


export default function Cart({onCloseCart}:CartProps) {
  const {cartItems} = useAppSelector(
    (state) => state.cart
  );

  return (
    (
        <div className=" bg-slate-900/50  absolute left-0 top-0 z-[1] w-full h-full">
          <div className="absolute w-[420px] right-0 h-full bg-white p-8 flex flex-col">
            <div className="flex items-center justify-between mb-7">
              <h2 className=" text-2xl font-bold">Корзина</h2>
              <img
                className="removeBtn cursor-pointer"
                src="/img/btn-remove.svg"
                alt="Remove"
                onClick={onCloseCart}
              />
            </div>
            {cartItems.map((item) => (
            <CartItem cartItem={item} />
        ))}
            
            <ul className="flex flex-col gap-5">
              <li className="flex items-end">
                <span>Итого: </span>
                <div className="flex-grow border-b border-dashed"></div>
                <b>25998 руб.</b>
              </li>
              <li className="flex items-end">
                <span>Налог 5%:</span>
                <div className="flex-grow border-b border-dashed"></div>
                <b>1500 руб.</b>
              </li>
            </ul>
          </div>
        </div>

    )
  );
}
