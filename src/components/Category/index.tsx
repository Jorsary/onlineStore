import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterProducts } from "../../store/reducers/ProductSlice";
import s from "./Category.module.scss";

export default function Category() {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.products);
  const categories = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Electronics",
    "Jewelery",
  ];
  return (
    <ul className={s.wrap}>
      {categories.map((categoryName, key) => (
        <button 
          className={`${s.select} ${Number(category) === key ? s.selectActive : ""}`}
          
          key={key}
          onClick={() => dispatch(filterProducts(key))}
        >
          {categoryName}
        </button>
      ))}
    </ul>
  );
}
