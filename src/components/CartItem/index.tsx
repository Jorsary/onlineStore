import { useAppDispatch } from "../../hooks/redux";
import { CartItemProps } from "../../models/models";
import {
  addItem,
  decreaseCart,
  removeItem,
} from "../../store/reducers/CartSlice";
import s from "./CartItem.module.scss";

export default function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useAppDispatch();
  return (
    <div className={s.cartitem}>
      <div className={s.wrap}>
        <img
          width={70}
          height={70}
          src={cartItem.image}
          alt="products picture"
        />
        <div>
          <p className={s.title}>{cartItem.title}</p>
          <b>{cartItem.price} $</b>
          <div className={s.counter}>
            <button
              className={s.minus}
              onClick={() => dispatch(decreaseCart(cartItem))}
            ></button>
            <p className={s.count}>{cartItem.cartQuantity}</p>
            <button
              className={s.plus}
              onClick={() => dispatch(addItem(cartItem))}
            ></button>
          </div>
        </div>

        <button
          className={s.remove}
          onClick={() => dispatch(removeItem(cartItem))}
        ></button>
      </div>
    </div>
  );
}
