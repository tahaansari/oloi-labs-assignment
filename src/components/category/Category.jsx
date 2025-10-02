import { GrAttachment } from "react-icons/gr";
import CategoryMore from "../category-more/CategoryMore";
import { useState } from "react";
import s from "./Category.module.css"

import { motion, AnimatePresence } from "framer-motion";


const Category = ({category,handleToggle}) => {
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const showActiveCategory = () => category.filter(item => item.isVisible);

  return (
    <div className={s.category}>
      <div className={s.categoryList}>
        <button
              className={`${s.categoryItem} ${selectedIndex === 0 && s.categoryItemActive }`}
              onClick={() => setSelectedIndex(0)}
            >
              <span>All</span>
              <span className={s.categoryItemCount}>8</span>
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
              onClick={() => setSelectedIndex(item.id)}
            >
              <GrAttachment className="icon" />
              <span>{item.name}</span>
              <span className={s.categoryItemCount}>8</span>
            </motion.button>
          );
        })}
        </AnimatePresence>
      </div>
      <CategoryMore selectedIndex={selectedIndex} category={category} handleToggle={handleToggle} />
    </div>
  );
};
export default Category;
