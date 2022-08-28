import React from "react";

export default function Cards() {
  return (
    <div className="flex flex-col gap-3 border p-7 w-56 transition ease-in-out duration-300 rounded-3xl hover:shadow-lg hover:-translate-y-1 ">
      <div className="absolute cursor-pointer">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
      <h5 className="text-sm">Мужские Кроссовки Nike Air Max 270</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="uppercase text-xs opacity-50">Цена: </span>
          <b className="text-[14px]">12 999 руб.</b>
        </div>
        <div className="cursor-pointer">
          <img src="/img/plus.svg" alt="Unliked" />
        </div>
      </div>
    </div>
  );
}
