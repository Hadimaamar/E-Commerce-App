import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  console.log(filters);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/api/products?category=${cat}` : `/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);
  console.log(filteredProducts);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="p-5 flex flex-wrap justify-between">
      {cat
        ? filteredProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product key={product._id} product={product} />)}
    </div>
  );
};

export default Products;
