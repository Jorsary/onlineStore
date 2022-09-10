import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartHide, PlaceOrder } from "../../store/reducers/CartSlice";
import Buttons from "../Buttons";
import CartItem from "../CartItem";
import styles from "./Cart.module.scss";

export default function Cart() {
  const { cartItems, cartOpened, cartTotal } = useAppSelector(
    (state) => state.cart
  );
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле email не может быть пустым"
  );
  const [formValid, setformValid] = useState(false);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError) {
      setformValid(false);
    } else {
      setformValid(true);
    }
  }, [emailError]);

  return (
    <div
      className={`${styles.overlay} ${cartOpened ? styles.overlayVisible : ""}`}
    >
      {cartTotal > 0 ? (
        <div
          className={`${styles.cart} ${cartOpened ? styles.cartVisible : ""}`}
        >
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
              <span>Total: </span>
              <div className={styles.dash}></div>
              <b>{totalPrice.toFixed(2)} $</b>
            </li>
            <li className={styles.line}>
              <span>Tax 5%:</span>
              <div className={styles.dash}></div>
              <b>{(totalPrice * 0.05).toFixed(2)}$</b>
            </li>
            <form>
              {emailDirty && emailError && (
                <p className={styles.emailError}>{emailError}</p>
              )}
              <input
                onChange={(e) => emailHandler(e)}
                value={email}
                onBlur={(e) => blurHandler(e)}
                className={styles.formInput}
                name="email"
                type="text"
                placeholder="Enter your email..."
              />
              <Buttons
                disabled={!formValid}
                type="submit"
                onClickHand={() => dispatch(PlaceOrder(""))}
                text="Proceed to Checkout &#9997;"
              />
            </form>
          </ul>
        </div>
      ) : (
        <div
          className={`${styles.cart} ${cartOpened ? styles.cartVisible : ""}`}
        >
          <div className={styles.head}>
            <h2 className={styles.title}>Cart</h2>
            <button
              onClick={() => dispatch(cartHide())}
              className={styles.btnclose}
            />
          </div>
          <div className={styles.emptyCart}>
            <img width={200} src="./img/emptyCart.png" alt="" />
            <h3 className={styles.title}>Cart is empty</h3>
            <p className={styles.text}>To place an order, add the product to the cart</p>
            <Buttons onClickHand={() => dispatch(cartHide())} text="Come back"/>
          </div>
        </div>
      )}
    </div>
  );
}
