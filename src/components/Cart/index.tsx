import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartHide } from "../../store/reducers/CartSlice";
import CartItem from "../CartItem";
import styles from "./Cart.module.scss";


export default function Cart() {
  const { cartItems, cartOpened } = useAppSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${styles.overlay} ${cartOpened ? styles.overlayVisible : ""}`}
    >
      <div className={`${styles.cart} ${cartOpened ? styles.cartVisible : ""}`}>
        <div className={styles.head}>
          <h2 className={styles.title}>Корзина</h2>
          <button
            onClick={() => dispatch(cartHide())}
            className={styles.btnclose}
          />
        </div>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <CartItem cartItem={item} />
          ))}
        </div>

        <ul className={styles.total}>
          <li className={styles.line}>
            <span>Итого: </span>
            <div className={styles.dash}></div>
            <b>{totalPrice.toFixed(2)} $</b>
          </li>
          <li className={styles.line}>
            <span>Налог 5%:</span>
            <div className={styles.dash}></div>
            <b>{(totalPrice * 0.05).toFixed(2)}$</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
