import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import Select, { SingleValue } from "react-select";
import Cards from "../components/Cards";
import MyLoader from "../components/Cards/SkeletonCards";
import Category from "../components/Category";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/reducers/ActionCreators";
import { setPages, sortProducts } from "../store/reducers/ProductSlice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const {
    products,
    isLoading,
    error,
    category,
    sortBy,
    order,
    page,
    limit,
    count,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ category, sortBy, order, page, limit }));
  }, [dispatch, category, order, page]);

  interface IOption {
    value: string;
    label: string;
  }

  const options: IOption[] = [
    { value: "asc", label: "Price: Low to High" },
    { value: "desc", label: "Price: High to low" },
  ];

  const onChange = (newValue: SingleValue<string | IOption>) => {
    dispatch(sortProducts((newValue as IOption).value));
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    dispatch(setPages(selected + 1));
  };

  return (
    <div>
      <div className="px-14 py-11">
        <div className="justify-between flex items-center pb-2">
          <h1 className="font-bold text-4xl">All goods</h1>
          <div className="flex gap-2 px-4 py-4 border-solid border rounded-xl">
            <img src="/img/search.svg" alt="Search" />
            <input className="outline-none" placeholder="Search..." />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Category />
          <Select
          
            onChange={onChange}
            defaultValue={options[0]}
            options={options}
          />
        </div>
      </div>
      <ReactPaginate
        nextLabel=">"
        forcePage={page - 1}
        onPageChange={handlePageChange}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(count / limit)}
        previousLabel="<"
        previousLinkClassName="rounded-xl px-4 py-3 bg-blue-400 text-center text-white "
        nextLinkClassName="rounded-xl px-4 py-3 bg-blue-400 text-center text-white "
        className="flex justify-between max-w-max gap-2 pl-14 font-bold"
        pageLinkClassName="p-4 bg-white text-center "
        activeLinkClassName="border-2 rounded  text-center "
      />
      <div className="px-14  flex-wrap py-11 gap-10  flex">
        {isLoading && [...new Array(8)].map(() => <MyLoader />)}
        {error && <h1>{error}</h1>}
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
