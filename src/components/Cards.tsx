import React from "react";
import { IProduct } from "../models";

interface ProductProps {
  product : IProduct
}

export default function Cards({product}: ProductProps) {
  return (
    <div className="flex flex-col justify-between  border p-7 w-56 transition ease-in-out duration-300 rounded-3xl hover:shadow-lg hover:-translate-y-1 ">
      <div className="absolute cursor-pointer">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img className="self-center" width={133} height={112} src={product.image} alt="" />
      <h5 className="text-sm">{product.title}</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="uppercase text-xs opacity-50">Цена: </span>
          <b className="text-[14px]">{product.price} $</b>
        </div>
        <div className="cursor-pointer">
          <img src="/img/plus.svg" alt="Unliked" />
        </div>
      </div>
    </div>
  );
}
