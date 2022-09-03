import { useAppDispatch } from "../hooks/redux";
import { CartItemProps } from "../models/IProduct";
import {
  addItem, decreaseCart,
  removeItem
} from "../store/reducers/CartSlice";

export default function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="gap-5 flex flex-col flex-grow">
      <div className="border border-solid rounded-2xl overflow-hidden p-5 flex items-center justify-between">
        <img
          className="mr-5"
          width={70}
          height={70}
          src={cartItem.image}
          alt="Sneakers"
        />
        <div className="mr-5">
          <p className="mb-1">{cartItem.title}</p>
          <b>{cartItem.price} $</b>{" "}
          <div className="flex items-center gap-1">
            <button onClick={() => dispatch(decreaseCart(cartItem))}>
              <img src="./img/minus.svg" alt="" />
            </button>
            <p className="border rounded-md px-2 py-1">
              {cartItem.cartQuantity}
            </p>
            <button onClick={() => dispatch(addItem(cartItem))}>
              <img src="./img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <img
          className="cursor-pointer"
          onClick={() => dispatch(removeItem(cartItem))}
          src="/img/btn-remove.svg"
          alt="Remove"
        />
      </div>
    </div>
  );
}
