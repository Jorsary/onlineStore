import React from "react";
import Cards from "../components/Cards";

export default function MainPage() {
  return (
    <div>
      <div className="px-14 py-11 justify-between flex items-center">
        <h1 className="font-bold text-4xl">Все кроссовки</h1>
        <div className="flex gap-2 px-4 py-4 border-solid border rounded-xl">
          <img src="/img/search.svg" alt="Search" />
          <input className="outline-none" placeholder="Поиск..." />
        </div>
      </div>
      <div className="px-14  flex-wrap py-11 gap-10  flex">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
