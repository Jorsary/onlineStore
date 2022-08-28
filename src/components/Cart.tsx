import React from "react";
import { CartProps } from "../models";


export default function Cart({onClose}:CartProps) {
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
                onClick={onClose}
              />
            </div>

            <div className="gap-5 flex flex-col flex-grow">
              <div className="border border-solid rounded-2xl overflow-hidden p-5 flex items-center">
                <img
                  className="mr-5"
                  width={70}
                  height={70}
                  src="/img/sneakers/1.jpg"
                  alt="Sneakers"
                />
                <div className="mr-5">
                  <p className="mb-1">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img src="/img/btn-remove.svg" alt="Remove" />
              </div>
            </div>
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
