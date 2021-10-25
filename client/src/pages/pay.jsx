import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router";

const KEY =
  "pk_test_51JklSYKtjkw207HvpagQTEIN5YpFKjO8cn4PLcfxousqZnnCltCnVEgbjiQwyAP4He3PrLi79eQu2t7qFgeXcQFG00XocHpvBl";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const ontoken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        // console.log(res.data);
        history.push("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);
  return (
    <div className=" w-screen h-screen flex  justify-center items-center  ">
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Asmo Shop"
          image="/assets/logo.png"
          billingAddress
          shippingAddress
          description=" Your total is $20"
          amount={2000}
          token={ontoken}
          stripeKey={KEY}
        >
          <button className="h-16 w-28 rounded-xl border bg-black text-white p-5 font-semibold">
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
