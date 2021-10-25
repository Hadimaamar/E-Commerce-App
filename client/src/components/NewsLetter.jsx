import { Send } from "@mui/icons-material";

const NewsLetter = () => {
  return (
    <div className="h-[60vh] bg-#[fcf5f5] flex items-center justify-center flex-col ">
      <h1 className="text-7xl mb-5 font-bold ">Newsletter</h1>
      <div className="text-center md:text-left text-2xl font-light mb-5">
        Get timely updates from your favourite products.
      </div>
      <div className="w-[80%] md:w-[50%] h-10 bg-white flex  justify-between border border-solid border-[lightgray] ">
        <input
          type="text"
          placeholder="Your email"
          className="border-none flex-[8] outline-[2px,solid] pl-5  "
        />
        <button className="flex-[1] cursor-pointer border-none  bg-[teal] text-white">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
