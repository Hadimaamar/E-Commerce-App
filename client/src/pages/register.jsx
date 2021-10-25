const Register = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover "
      style={{
        background: `linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url("/assets/home.jpg") center`,
      }}
    >
      <div className="w-3/4 md:w-[40%] bg-white  p-5 ">
        <h1 className="text-2xl font-light ">CREATE AN ACCOUNT </h1>
        <form className="flex flex-wrap ">
          <input
            className="flex-1 min-w-[40%] mt-5 mr-3 p-3 border border-solid border-[darkgray]  "
            type="text"
            placeholder="name"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-3 p-3 border border-solid border-[darkgray]  "
            type="text"
            placeholder="last name"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-3 p-3 border border-solid border-[darkgray]  "
            type="text"
            placeholder="username"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-3 p-3 border border-solid border-[darkgray]  "
            type="email"
            placeholder="email"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-3 p-3 border border-solid border-[darkgray]  "
            type="password"
            placeholder="password"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-3 p-3 border border-solid border-[darkgray]  "
            type="password"
            placeholder="confirm password"
          />
          <span className="text-xs my-5">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>{" "}
          </span>
          <button className="w-[40%] border-none py-4 px-5 bg-[teal] text-white cursor-pointer">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
