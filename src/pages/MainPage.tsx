import { useEffect } from "react";
import Cards from "../components/Cards";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/reducers/ActionCreators";
import { filterProducts } from "../store/reducers/ProductSlice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error, category } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category]);

  const categories = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Electronics",
    "Jewelery",
  ];

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
      </div>

      <div className="px-14  flex-wrap py-11 gap-10  flex">
        {isLoading && <div></div>}
        {error && <h1>{error}</h1>}
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
