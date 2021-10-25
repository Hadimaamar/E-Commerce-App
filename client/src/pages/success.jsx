import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();

  return (
    <div className=" w-screen h-screen flex  justify-center items-center  ">
      success
    </div>
  );
};

export default Success;
