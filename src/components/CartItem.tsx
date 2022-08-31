import React from "react";
import { useAppDispatch } from "../hooks/redux";
import { IProduct } from "../models/IProduct";
import { cartHide, removeItem } from "../store/reducers/CartSlice";
interface CartItemProps {
  cartItem: IProduct
}


export default function CartItem({cartItem}: CartItemProps) {
  const dispatch=useAppDispatch()
  return (
    <div className="gap-5 flex flex-col flex-grow">
      <div className="border border-solid rounded-2xl overflow-hidden p-5 flex items-center">
        <img
          className="mr-5"
          width={70}
          height={70}
          src={cartItem.image}
          alt="Sneakers"
        />
        <div className="mr-5">
          <p className="mb-1">{cartItem.title}</p>
          <b>{cartItem.price} $</b>
        </div>
        <img className="cursor-pointer" onClick={() => dispatch(removeItem(cartItem))} src="/img/btn-remove.svg" alt="Remove" />
      </div>
    </div>
  );
}
