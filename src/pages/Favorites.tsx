
export default function Favorites() {
  return (
    <div>
      <div className="px-14 py-11 justify-between flex items-center">
        <h1 className="font-bold text-4xl">Избранное</h1>
        <div className="flex gap-2 px-4 py-4 border-solid border rounded-xl">
          <img src="/img/search.svg" alt="Search" />
          <input className="outline-none" placeholder="Поиск..." />
        </div>
      </div>
    </div>
  );
}
