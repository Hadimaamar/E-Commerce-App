import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  console.log(error);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        background: `linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url("/assets/login.jpg") no-repeat center center fixed`,
      }}
      className="w-screen h-screen flex items-center justify-center bg-cover   "
    >
      <div className="w-3/4 md:w-[25%] bg-white  p-5 ">
        <h1 className="text-2xl font-light ">SIGN IN </h1>
        <form className="flex flex-col ">
          <input
            className="flex-1 min-w-[40%] my-3 p-3 border border-solid border-[darkgray]  "
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 min-w-[40%] my-3 p-3 border border-solid border-[darkgray]  "
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleClick}
            disabled={isFetching}
            className={`w-[40%] border-none py-4 px-5 mb-3 bg-[teal] text-white cursor-pointer ${
              isFetching && "text-[green] cursor-not-allowed"
            }`}
          >
            LOGIN
          </button>
          {error && <span className="text-[red]">Something Went Wrong...</span>}
          <a href="/" className="mt-1 text-xs underline cursor-pointer">
            FORGOT PASSWORD?
          </a>
          <a href="/" className="mt-1 text-xs underline cursor-pointer">
            CREATE NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
