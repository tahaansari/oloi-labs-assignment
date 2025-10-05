import { GrAttachment } from "react-icons/gr";
import CategoryMore from "../category-more/CategoryMore";
import { useState } from "react";
import s from "./Category.module.css"

import { motion, AnimatePresence } from "framer-motion";

const Category = ({filterData, category,handleToggle, handleSearch}) => {

  function getCountByType(type) {
    return filterData.reduce((count, item) => {
      if (item.type === type) {
        return count + 1;
      }
      return count;
    }, 0);
  }
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const showActiveCategory = () => Array.from(new Map(category.map(item => [item.type, item])).values()).filter(item => item.isVisible);

  return (
    <div className={s.category}>
      <div className={s.categoryList}>
        <button
              className={`${s.categoryItem} ${selectedIndex === 0 && s.categoryItemActive }`}
              onClick={() => (handleSearch("all"), setSelectedIndex(0))}
            >
              <span>All</span>
              <span className={s.categoryItemCount}>{filterData.length}</span>
        </button>
        <AnimatePresence>
          {showActiveCategory().map((item, index) => {
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: .2 }}
                className={`${s.categoryItem} ${selectedIndex === item.id && s.categoryItemActive }`}
                onClick={() => (handleSearch(item.type), setSelectedIndex(item.id))}
              >
                <GrAttachment className="icon" />
                <span>{item.type}</span>
                <span className={s.categoryItemCount}>{getCountByType(item.type)}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
      <CategoryMore selectedIndex={selectedIndex} category={Array.from(new Map(category.map(item => [item.type, item])).values())} handleToggle={handleToggle} />
    </div>
  );
};
export default Category;
