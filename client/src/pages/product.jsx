import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { publicRequest } from "../request";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="p-3 flex flex-col md:flex-row md:p-14 ">
        <div className="flex-1 ">
          <img
            className="w-full h-[40vh] md:h-[90vh] object-cover "
            src={product?.img}
            alt=""
          />
        </div>
        <div className="flex-1 p-3 md:py-0 md:px-14  ">
          <h1 className="font-extralight text-4xl ">{product?.title}</h1>
          <p className="my-5 ">{product?.desc}</p>
          <span className="font-thin text-[40px]">$ {product?.price}</span>
          <div className="w-full md:w-[50%] my-7 flex justify-between  ">
            <div className="flex items-center ">
              <span className="text-xl font-extralight mr-2 ">Color</span>

              {product.color?.map((c) => (
                <div
                  key={c}
                  className={`w-5 h-5 rounded-full ${
                    c === "black" && "bg-black "
                  } ${c === "brown" && "bg-[brown]"} ${
                    c === "blue" && "bg-[blue]"
                  } ${c === "red" && "bg-[red]"} cursor-pointer p-1`}
                  onClick={() => setColor(c)}
                ></div>
              ))}
            </div>
            <div className="flex items-center ">
              <span className="text-xl font-extralight ">Size</span>
              <select
                className="ml-3 p-1 border border-solid border-black"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between w-full md:w-[50%] ">
            <div className="flex items-center font-bold ">
              <Remove
                className="hover:animate-pulse cursor-pointer"
                onClick={() =>
                  setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)
                }
              />
              <span className="w-8 h-8 rounded-xl border border-solid border-[teal] flex items-center justify-center mx-5">
                {quantity}
              </span>
              <Add
                className="hover:animate-pulse cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              />
            </div>
            <button
              onClick={handleClick}
              className="p-1 border-2 border-solid border-[teal] bg-white cursor-pointer font-medium hover:bg-[#f8f4f4] hover:animate-pulse"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
