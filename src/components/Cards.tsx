import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IProduct } from "../models/IProduct";
import { addItem, decreaseCart, removeItem } from "../store/reducers/CartSlice";

export interface ProductProps {
  product: IProduct;
}

export default function Cards({ product }: ProductProps) {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-between  border p-7 w-56 transition ease-in-out duration-300 rounded-3xl hover:shadow-lg hover:-translate-y-1 ">
      <div className="absolute cursor-pointer">
        <img src="/img/heart-unliked.svg" alt="liked" />
      </div>
      <img className="self-center" width={100} src={product.image} alt="" />
      <h5 className="text-sm">{product.title}</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="uppercase text-xs opacity-50">Цена: </span>
          <b className="text-[14px]">{product.price} $</b>
        </div>
        <button 
          className="cursor-pointer"
        >
          <img src="/img/btn-plus.svg" alt="checked" />
        </button>
      </div>
    </div>
  );
}
