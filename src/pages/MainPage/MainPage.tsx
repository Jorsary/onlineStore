import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import Select, { SingleValue } from "react-select";
import Cards from "../../components/Card";
import MyLoader from "../../components/Card/SkeletonCards";
import Category from "../../components/Category";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/reducers/ActionCreators";
import { setPages, sortProducts } from "../../store/reducers/ProductSlice";
import s from "./MainPage.module.scss";
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
      <div className={s.head}>
        <h1 className={s.title}>All goods</h1>
        <div className={s.selecter}>
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
        previousLinkClassName={s.prevnextLink}
        nextLinkClassName={s.prevnextLink}
        className={s.paggination}
        pageLinkClassName={s.pageLink}
        activeLinkClassName={s.activeLink}
      />
      <div className={s.products}>
        {isLoading && [...new Array(8)].map(() => <MyLoader />)}
        {error && <h1>{error}</h1>}
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
