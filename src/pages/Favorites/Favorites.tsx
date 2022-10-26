import Cards from "../../components/Card";
import { useAppSelector } from "../../hooks/redux";
import s from "./Favorites.module.scss";

export default function Favorites() {
  const { favoritesItems } = useAppSelector((state) => state.favorites);
  return (
    <div>
      <div className={s.head}>
        <h1 className={s.title}>Избранное</h1>
      </div>
      <div className={s.wrapper}>
        {favoritesItems.length > 0 ? (
          <div>
            {favoritesItems.map((item) => (
              <Cards product={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className={s.empty}>Favorites is empty :(</div>
        )}
      </div>
    </div>
  );
}
