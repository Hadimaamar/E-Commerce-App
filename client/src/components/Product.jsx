import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../request";

const Product = ({ product }) => {
  return (
    <div className="flex-1 m-2 min-w-[280px] h-[350px] flex items-center justify-center bg-[#f5fbfd] relative ">
      <div className="w-[200px] h-[200px] rounded-full bg-white absolute "></div>
      <img src={product.img} className="h-[75%] z-50 " alt="" />
      <div className=" opacity-0 hover:opacity-100 transition-all duration-300 ease-linear  w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-50 flex items-center justify-center ">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#e9f5f5] transition-all duration-500 ease-linear hover:scale-110 cursor-pointer ">
          <ShoppingCartOutlined />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#e9f5f5] transition-all duration-500 ease-linear hover:scale-110 cursor-pointer ">
          <Link to={`/product/${product._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#e9f5f5] transition-all duration-500 ease-linear hover:scale-110 cursor-pointer ">
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default Product;
