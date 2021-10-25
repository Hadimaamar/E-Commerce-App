import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="h-[50px] md:h-[60px]">
      <div className="py-2 px-0 md:py-3 md:px-5 flex justify-between items-center ">
        <div className="flex-1 flex items-center">
          <span className=" hidden md:inline-block text-sm cursor-pointer ">
            EN
          </span>
          <div className="flex items-center  border-[0.5px] border-solid border-[lightgray] ml-6 p-1  ">
            <input
              className="w-[50px] md:w-auto  border-none "
              placeholder="Search"
              type="text"
            />
            <Search className="!text-[gray] text-base" />
          </div>
        </div>
        <div className="flex-1 text-center ">
          <h1 className="text-2xl font-bold md:text-3xl">Asmo.</h1>
        </div>
        {/* right */}
        <div className="flex-[2] md:flex-1 flex items-center justify-center md:justify-end ">
          {/* menuItem */}
          <div className="text-xs md:text-sm cursor-pointer ml-2 md:ml-6   ">
            REGISTER
          </div>
          <div className="text-xs md:text-sm cursor-pointer ml-2 md:ml-6  ">
            SIGN IN
          </div>
          <Link to="/cart">
            <div className="text-xs md:text-sm cursor-pointer ml-2 md:ml-6  ">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
