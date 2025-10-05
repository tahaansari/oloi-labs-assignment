import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import RoundSpinner from "../round-spinner/RoundSpinner";

import s from "./Search.module.css"

const Search = ({loader, handleSearch})=>{

    const [search, setSearch] = useState("");

    return <>
        <div className={s.search}>
            {!loader ? <FiSearch className="icon"/> : <RoundSpinner/>}
            <input
                className={s.search__input}
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearch(e.target.value);
                }}
                placeholder="Searching is easier"
            />
            {/* onClick={()=>(handleEnableSearch(""), setSearch(""))} */}
            <span  className={s.search__clear}>Clear</span>
        </div>
    </>
}
export default Search;