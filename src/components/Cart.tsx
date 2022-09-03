import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { cartHide } from "../store/reducers/CartSlice";
import CartItem from "./CartItem";

const overlayStyles =
  "bg-slate-900/50 absolute left-0 top-0 z-[1] w-full h-full transition-all overflow-hidden ";
const cartStyles =
  "absolute w-[420px] right-0 h-full bg-white p-8 flex flex-col transition-transform ";

export default function Cart() {
  const { cartItems, cartOpened } = useAppSelector(
    (state) => state.cart
  );

  const totalPrice= cartItems.reduce((sum,item) => sum + (item.price*item.cartQuantity),0 )
  const dispatch=useAppDispatch()
  return (
    <div
      className={classNames(overlayStyles, {
        "visible opacity-100": cartOpened,
        "invisible opacity-0": !cartOpened,
      })}
    >
      <div
        className={classNames(cartStyles, {
          "translate-x-0 ": cartOpened,
          "translate-x-full": !cartOpened,
        })}
      >
        <div className="flex items-center justify-between mb-7">
          <h2 className=" text-2xl font-bold">Корзина</h2>
          <img
            onClick={() => dispatch(cartHide())}
            className="removeBtn cursor-pointer"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {cartItems.map((item) => (
            <CartItem cartItem={item} />
          ))}
        </div>

        <ul className="flex flex-col gap-5 mt-auto ">
          <li className="flex items-end">
            <span>Итого: </span>
            <div className="flex-grow border-b border-dashed"></div>
            <b>{totalPrice.toFixed(2)} $</b>
          </li>
          <li className="flex items-end">
            <span>Налог 5%:</span>
            <div className="flex-grow border-b border-dashed"></div>
            <b>{(totalPrice*0.05).toFixed(2)}$</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
