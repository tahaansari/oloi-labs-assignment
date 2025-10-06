import { GrAttachment } from "react-icons/gr";
import CategoryMore from "../category-more/CategoryMore";
import { useState } from "react";
import s from "./Category.module.css";

import { motion, AnimatePresence } from "framer-motion";

const Category = ({ filterData, category, handleToggle, handleSearch, selectedCategory, handleSelectedCategory }) => {
  function getCountByType(type) {
    return filterData.reduce((count, item) => {
      if (item.type === type) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  const showActiveCategory = () =>
    Array.from(new Map(category.map((item) => [item.type, item])).values()).filter((item) => item.isVisible);

  return (
    <div className={s.category}>
      <div className={s.categoryList}>
        <button
          className={`${s.categoryItem} ${selectedCategory === "all" && s.categoryItemActive}`}
          onClick={() => (handleSelectedCategory("all"), handleSearch())}
        >
          <span>All</span>
          <span className={s.categoryItemCount}>{filterData.length}</span>
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
                className={`${s.categoryItem} ${item.type === selectedCategory  && s.categoryItemActive}`}
                onClick={() => {
                  handleSelectedCategory(item.type); 
                  handleSearch();
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
        category={Array.from(new Map(category.map((item) => [item.type, item])).values())}
        handleToggle={handleToggle}
      />
    </div>
  );
};
export default Category;
