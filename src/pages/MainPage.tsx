import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/reducers/ActionCreators";
import { Audio } from "react-loader-spinner";
import Cards from "../components/Cards";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="px-14 py-11 justify-between flex items-center">
        <h1 className="font-bold text-4xl">Все товары</h1>
        <div className="flex gap-2 px-4 py-4 border-solid border rounded-xl">
          <img src="/img/search.svg" alt="Search" />
          <input className="outline-none" placeholder="Поиск..." />
        </div>
      </div>
      <div className="px-14  flex-wrap py-11 gap-10  flex">
        {isLoading && (
          <div className="flex m-auto ">
            <div className="animate-bounce">
              <div className="border border-cyan-300 border-4 border-dashed  p-14 animate-spin rounded-full"></div>
            </div>
          </div>
        )}
        {error && <h1>{error}</h1>}
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
