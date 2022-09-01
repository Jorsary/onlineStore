import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { CartProps } from "../models/IProduct";
import CartItem from "./CartItem";
import classNames from "classnames";
import { cartHide } from "../store/reducers/CartSlice";

const overlayStyles =
  "bg-slate-900/50 absolute left-0 top-0 z-[1] w-full h-full transition-all overflow-hidden ";
const cartStyles =
  "absolute w-[420px] right-0 h-full bg-white p-8 flex flex-col transition-transform ";

export default function Cart() {
  const { cartItems, cartTotal, cartTax, cartOpened } = useAppSelector(
    (state) => state.cart
  );
  const totalCart = Number(cartTotal);
  const totalTax = Number(cartTax);
  const dispatch=useAppDispatch()
  return (
    <div
      className={classNames(overlayStyles, {
        "visible opacity-100": cartOpened,
        "invisible opacity-0": !cartOpened,
      })}
    >
      <div
        className={classNames(cartStyles, {
          "translate-x-0 ": cartOpened,
          "translate-x-full": !cartOpened,
        })}
      >
        <div className="flex items-center justify-between mb-7">
          <h2 className=" text-2xl font-bold">Корзина</h2>
          <img
            onClick={() => dispatch(cartHide())}
            className="removeBtn cursor-pointer"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {cartItems.map((item) => (
            <CartItem cartItem={item} />
          ))}
        </div>

        <ul className="flex flex-col gap-5 mt-auto ">
          <li className="flex items-end">
            <span>Итого: </span>
            <div className="flex-grow border-b border-dashed"></div>
            <b>$</b>
          </li>
          <li className="flex items-end">
            <span>Налог 5%:</span>
            <div className="flex-grow border-b border-dashed"></div>
            <b>$</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
