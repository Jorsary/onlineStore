import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartShow, getTotals } from "../../store/reducers/CartSlice";
import s from "./Header.module.scss";

export default function Header() {
  const { cartTotal } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);
  return (
    <header className={s.header}>
      <NavLink className={s.logo} to="/">
        <div className={s.text}>
          <h3 className={s.title}>React store</h3>
          <p className={s.subTitle}>Discount store</p>
        </div>
      </NavLink>
      <ul className={s.navbar}>
        <li
          onClick={() => dispatch(cartShow())}
          className={s.cart}
        >
          <img  src="img/cart.svg" />
          <span className={s.totalCart}>{cartTotal}</span>
        </li>
        <li>
          <NavLink className={s.link} to="/favorites">
            <img src="./img/like.svg" alt="add" />
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
