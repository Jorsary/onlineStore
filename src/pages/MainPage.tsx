import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import Cards from "../components/Cards";
import MyLoader from "../components/SkeletonCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IOption } from "../models/IProduct";
import { fetchProducts } from "../store/reducers/ActionCreators";
import { filterProducts, sortProducts } from "../store/reducers/ProductSlice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error, category, sortBy ,order} = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts({ category, sortBy, order }));
  }, [dispatch, category, order]);

  const categories = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Electronics",
    "Jewelery",
  ];

  const options : IOption[] = [
    { value: "asc", label: "Price: Low to High" },
    { value: "desc", label: "Price: High to low" },
  ];


  const onChange = (newValue: SingleValue<string | IOption>) => {
    dispatch(sortProducts((newValue as IOption).value));
  };

  return (
    <div>
      <div className="px-14 py-11">
        <div className="justify-between flex items-center">
          <h1 className="font-bold text-4xl">Все товары</h1>
          <div className="flex gap-2 px-4 py-4 border-solid border rounded-xl">
            <img src="/img/search.svg" alt="Search" />
            <input className="outline-none" placeholder="Поиск..." />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex flex-wrap justify-between max-w-2xl list-none">
            {categories.map((categoryName, key) => (
              <li
                className="border-2 rounded-3xl py-2 px-4 hover:scale-105 transition-all cursor-pointer"
                key={key}
                onClick={() => dispatch(filterProducts(key))}
              >
                {categoryName}
              </li>
            ))}
          </ul>
          <Select onChange={onChange} defaultValue={options[0]} options={options} />
        </div>
      </div>

      <div className="px-14  flex-wrap py-11 gap-10  flex">
        {isLoading && [...new Array(8)].map(() => <MyLoader />)}
        {error && <h1>{error}</h1>}
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}


