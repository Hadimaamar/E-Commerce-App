import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value.toLowerCase();
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <div className="">
      <NavBar />
      <Announcement />
      <h1 className="text-4xl font-extrabold m-5">{cat.toUpperCase()}</h1>
      <div className="flex  justify-between">
        <div className="flex flex-col md:inline-block my-0 mx-5 md:m-5 ">
          <span className="text-xl font-semibold md:mr-5 ">
            Filter Products:
          </span>
          <select
            onChange={handleFilters}
            name="color"
            className="productListSelect"
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            name="size"
            onChange={handleFilters}
            className="productListSelect"
          >
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="m-5 ">
          <span className="text-xl font-semibold mr-5 ">Sort Products:</span>
          <select
            onChange={(e) => setSort(e.target.value.toLowerCase())}
            className="productListSelect"
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
