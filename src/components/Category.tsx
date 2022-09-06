import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { filterProducts } from "../store/reducers/ProductSlice";

export default function Category() {
  const dispatch = useAppDispatch();
  const { category} =
    useAppSelector((state) => state.products);
  const categories = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Electronics",
    "Jewelery",
  ];
  return (
    <ul className="flex gap-2 flex-wrap justify-between max-w-2xl list-none">
      {categories.map((categoryName, key) => (
        <button
          // "border-2 rounded-3xl py-2 px-4 hover:scale-105 transition-all cursor-pointer "
          className={
            Number(category) === key
              ? "bg-blue-400 text-cyan-50 rounded-3xl py-2 px-4 transition-all cursor-pointer font-medium"
              : "rounded-3xl py-2 px-4  transition-all cursor-pointer font-medium "
          }
          key={key}
          onClick={() => dispatch(filterProducts(key))}
        >
          {categoryName}
        </button>
      ))}
    </ul>
  );
}
