import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ProductProps } from "../models/IProduct";
import {
  addItem, removeItem
} from "../store/reducers/CartSlice";



export default function Cards({ product }: ProductProps) {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartAdded = cartItems.findIndex((item) => item.id === product.id) >= 0;

  return (
    <div className="flex flex-col justify-between  border p-7 w-56 transition ease-in-out duration-300 rounded-3xl hover:shadow-lg hover:-translate-y-1">
      <div className="absolute cursor-pointer">
        <img src="/img/heart-unliked.svg" alt="liked" />
      </div>
      <img className="self-center" width={100} src={product.image} alt="" />
      <h5 className="text-sm">{product.title}</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="uppercase text-xs opacity-50">Цена: </span>
          <b className="text-[14px]">{product.price} $</b>
        </div>
        <button
          onClick={
            cartAdded
              ? () => dispatch(removeItem(product))
              : () => dispatch(addItem(product))
          }
          className="cursor-pointer"
        >
          <img src={cartAdded ? './img/btn-checked.svg' : './img/plus.svg' } alt="checked" />
        </button>
      </div>
    </div>
  );
}

