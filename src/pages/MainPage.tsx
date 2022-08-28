import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { IProduct } from "../models";
import axios from "axios";


export default function MainPage() {
  const [products, setProducts] = useState<IProduct[]>([]); 

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="px-14 py-11 justify-between flex items-center">
        <h1 className="font-bold text-4xl">Все кроссовки</h1>
        <div className="flex gap-2 px-4 py-4 border-solid border rounded-xl">
          <img src="/img/search.svg" alt="Search" />
          <input className="outline-none" placeholder="Поиск..." />
        </div>
      </div>
      <div className="px-14  flex-wrap py-11 gap-10  flex">
        { products.map(product => <Cards product={product} />)}
      </div>
    </div>
  );
}
