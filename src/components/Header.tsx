import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-14 py-10 border-b border-b-slate-200">
      <div className="flex items-center">
        <img width={40} height={40} className="mr-4" src="img/logo.png" />
        <div>
          <h3 className="uppercase font-bold text-xl leading-6 min-w-max">
            React Sneakers
          </h3>
          <p className="text-sm opacity-50 min-w-max">
            Магазин лучших кроссовок
          </p>
        </div>
      </div>
      <ul className="flex flex-shrink basis-48 justify-between items-center">
        <li className="cursor-pointer flex">
          <img className="mr-2" src="img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="cursor-pointer">
          <img src="img/like.svg" alt="" />
        </li>
        <li className="cursor-pointer">
          <img src="img/union.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}
