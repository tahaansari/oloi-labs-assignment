import { GrAttachment } from "react-icons/gr";
import CategoryMore from "../category-more/CategoryMore";
import s from "./Category.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

const Category = ({
  data,
  uniqueCategory,
  handleToggle,
  handleSearch,
  searchText,
  selectedCategory,
  setSelectedCategory,
}) => {

  function getCountByType(type) {
    return type === "all" ? data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())).length : data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) && item.type === type).length;
  }

  const showActiveCategory = () => Array.from(new Map(uniqueCategory.map((item) => [item.type, item])).values()).filter((item) => item.isVisible);

  return (
    <div className={s.category}>
      <div className={s.categoryList}>
        <button
          className={`${s.categoryItem} ${selectedCategory === "all" && s.categoryItemActive}`}
          onClick={() => {
              setSelectedCategory("all");
              handleSearch(searchText, "all");
            }
          }
        >
          <span>All</span>
          <span className={s.categoryItemCount}>{getCountByType("all")}</span>
        </button>
        <AnimatePresence>
          {showActiveCategory().map((item, index) => {
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`${s.categoryItem} ${item.type === selectedCategory && s.categoryItemActive}`}
                onClick={() => {
                  setSelectedCategory(item.type);
                  handleSearch(searchText, item.type);
                }}
              >
                <GrAttachment className="icon" />
                <span>{item.type}</span>
                <span className={s.categoryItemCount}>{getCountByType(item.type)}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
      <CategoryMore
        selectedCategory={selectedCategory}
        handleToggle={handleToggle}
        uniqueCategory={uniqueCategory}
      />
    </div>
  );
};
export default Category;