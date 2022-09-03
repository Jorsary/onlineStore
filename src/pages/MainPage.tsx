import { useEffect } from "react";
import Cards from "../components/Cards";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/reducers/ActionCreators";
import { filterProducts } from "../store/reducers/FilterSlice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  const { category } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch]);

  const handelSetCategory = (id: number) => {
    dispatch(filterProducts(id));
    dispatch(fetchProducts(category));
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
        <div className="flex justify-between max-w-xl">
          <button
            onClick={() => handelSetCategory(1)}
            className="border-2 rounded-3xl py-2 px-4 hover:scale-105 transition-all"
          >
            Men's clothing
          </button>
          <button
            onClick={() => handelSetCategory(2)}
            className="border-2 rounded-3xl py-2 px-4 hover:scale-105 transition-all"
          >
            Women's clothing
          </button>
          <button
            onClick={() => handelSetCategory(3)}
            className="border-2 rounded-3xl py-2 px-4 hover:scale-105 transition-all"
          >
            Electronics
          </button>
          <button
            onClick={() => handelSetCategory(4)}
            className="border-2 rounded-3xl py-2 px-4 hover:scale-105 transition-all"
          >
            Jewelery
          </button>
        </div>
      </div>

      <div className="px-14  flex-wrap py-11 gap-10  flex">
        {isLoading && (
          <div className="flex m-auto ">
            <div className="animate-bounce">
              <div className="border-cyan-300 border-4 border-dashed  p-14 animate-spin rounded-full"></div>
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
