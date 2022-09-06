import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ProductProps } from "../../models/models";
import { addItem, removeItem } from "../../store/reducers/CartSlice";
import styles from "./Card.module.scss";

export default function Cards({ product }: ProductProps) {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartAdded = cartItems.findIndex((item) => item.id === product.id) >= 0;

  return (
    <div className={styles.card}>
      <button className={styles.like}>
      </button>
      <img
        className={styles.img}
        width={100}
        src={product.image}
        alt="product picture"
      />
      <h5 className={styles.title}>{product.title}</h5>
      <div className={styles.info}>
        <p className={styles.price}>
          <span className={styles.priceOpacity}> Цена: </span> {product.price} $
        </p>
        <button
          onClick={
            cartAdded
              ? () => dispatch(removeItem(product))
              : () => dispatch(addItem(product))
          }
          className={cartAdded ? styles.plusActive : styles.plus}
        >
        </button>
      </div>
    </div>
  );
}
