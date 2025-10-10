import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import RoundSpinner from "../round-spinner/RoundSpinner";

import s from "./Search.module.css";

const Search = ({ loader, handleSearch, selectedCategory, searchText, setSearchText }) => {
  return (
    <>
      <div className={s.search}>
        {!loader ? <FiSearch className="icon" /> : <RoundSpinner />}
        <input
          className={s.search__input}
          type="text"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            handleSearch(value, selectedCategory);
          }}
          placeholder="Searching is easier"
        />
        <span
          onClick={() => {
            setSearchText("");
            handleSearch("", "all");
          }}
          className={s.search__clear}
        >
          Clear
        </span>
        <div className={s.quickSearch}>
           <span className={s.quickSearch__icon}>s</span>
           Quick Access
        </div>
      </div>
    </>
  );
};
export default Search;
