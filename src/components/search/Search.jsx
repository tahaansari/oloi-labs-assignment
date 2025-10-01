import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import s from "./Search.module.css"

const Search = ()=>{

    const [search, setSearch] = useState("");

    return <>
        <div className={s.search}>
            <FiSearch className="icon"/>
            <input
                className={s.search__input}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Searching is easier"
            />
            <span className={s.search__clear}>Clear</span>
        </div>
    </>
}
export default Search;