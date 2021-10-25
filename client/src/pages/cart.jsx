import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../request";
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const ontoken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });

        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, history, cart?.total]);

  return (
    <div>
      <NavBar />
      <Announcement />
      <div className=" p-3 md:p-5 ">
        <h1 className="font-light text-center text-3xl ">YOUR BAG</h1>
        <div className="flex items-center justify-between py-5">
          <button className="p-3 font-semibold cursor-pointer border-[3px] border-solid border-black">
            CONTINUE SHOPPING
          </button>
          <div className="hidden md:inline-block">
            <span className="underline cursor-pointer mx-3 ">
              Shopping Bag({cart.products.length})
            </span>
            <span className="underline cursor-pointer mx-3">
              Your Wishlist (0)
            </span>
          </div>
          <button className="p-3 font-semibold cursor-pointer bg-black text-white">
            CHECKOUT NOW
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-[3]">
            {cart.products.map((product) => (
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="flex-[2] flex ">
                  <img
                    className="w-[200px] md:w-[250px] object-fill  "
                    src={product.img}
                    alt=""
                  />
                  <div className="p-5 flex flex-col justify-around ">
                    <span>
                      <b>PRODUCT:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-black cursor-pointer"></div>
                    <span>
                      <b>SIZE:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="flex-[1] flex flex-col items-center justify-center   ">
                  <div className="flex items-center mb-5 ">
                    <Remove />
                    <span className="text-2xl m-2 md:m-1  ">
                      {product.quantity}
                    </span>
                    <Add />
                  </div>
                  <span className="text-3xl font-extralight ">
                    $ {product.price * product.quantity}
                  </span>
                </div>
              </div>
            ))}
            <hr className="bg-[#eee]  border-none h-[1px]" />
          </div>
          <div className="flex-1 ">
            <div className="flex-1 border-[0.5px] border-solid border-[lightgray] rounded-xl p-5 h-[50vh]">
              <h1 className="font-extralight text-3xl ">ORDER SUMMARY</h1>
              <div className="item">
                <span>Subtotal</span>
                <span>$ {cart.total}</span>
              </div>
              <div className="item">
                <span>Estimated Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className="item">
                <span>Shipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className="item font-medium text-2xl ">
                <span>Total</span>
                <span>$ {cart.total}</span>
              </div>
              <StripeCheckout
                name="Asmo Shop"
                image="/assets/logo.png"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={ontoken}
                stripeKey={KEY}
              >
                <button className="w-full border-2 border-solid border-black p-3 bg-black text-white font-semibold ">
                  CHECKOUT NOW
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
