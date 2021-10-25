import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-5 justify-between cursor-pointer font-semibold ">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
