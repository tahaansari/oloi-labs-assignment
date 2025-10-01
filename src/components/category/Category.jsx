import { GrAttachment } from "react-icons/gr";
import CategoryMore from "../category-more/CategoryMore";
import { useState } from "react";
import s from "./Category.module.css"

const Category = ({category,handleToggle}) => {
  
  const [selectedIndex, setSelectedIndex] = useState(null);

  const showActiveCategory = () => category.filter(item => item.isVisible);

  return (
    <div className={s.category}>
      <div className={s.categoryList}>
        {showActiveCategory().map((item, index) => {
          return (
            <button
              key={index}
              className={`${s.categoryItem} ${selectedIndex === item.id && s.categoryItemActive }`}
              onClick={() => setSelectedIndex(item.id)}
            >
              <GrAttachment className="icon" />
              <span>{item.name}</span>
              <span className={s.categoryItemCount}>8</span>
            </button>
          );
        })}
      </div>
      <CategoryMore category={category} handleToggle={handleToggle} />
    </div>
  );
};
export default Category;
