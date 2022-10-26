import Cards from "../components/Card";
import { useAppSelector } from "../hooks/redux";

export default function Favorites() {
  const { favoritesItems } = useAppSelector((state) => state.favorites);
  return (
    <div>
      <div className="px-14 py-11 justify-between flex items-center">
        <h1 className="font-bold text-4xl">Избранное</h1>
      </div>
      <div className="px-14  flex-wrap py-11 gap-10  flex">
        {favoritesItems.length > 0 ? (
          <div>
            {favoritesItems.map((item) => (
              <Cards product={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="text-2xl m-auto">Favorites is empty :(</div>
        )}
      </div>
    </div>
  );
}
