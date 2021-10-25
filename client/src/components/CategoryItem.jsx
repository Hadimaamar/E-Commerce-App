import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 m-1 h-[70vh] relative ">
      <Link to={`/products/${item.cat}`}>
        <img
          src={item.img}
          className="w-full h-[30vh] md:h-full object-cover "
          alt=""
        />
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-5 ">{item.title}</h1>
          <button className="border-none p-3 bg-white text-[gray] ">
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
