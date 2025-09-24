import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import "./App.css";
import List from "./components/list";
import CategoryMore from "./components/category-more/CategoryMore";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([
    { id: 1, name: "files", isVisible: false },
    { id: 2, name: "people", isVisible: true },
    { id: 3, name: "chats", isVisible: false },
    { id: 4, name: "lists", isVisible: true },
  ]);

  // TOGGLE ISVISIBLE WHERE CATEGORY ID = ID
  const handleToggle = (id, isChecked) => {
    // console.log(id,isChecked)
    setCategory((prev)=>prev.map((item)=>{
      return item.id === id ? {...item, isVisible:isChecked} : item;
    }))
  };

  const showActiveCategory = () => category.filter(item => item.isVisible);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="app">
        <div className="search-box">
          <div className="search-input-wrap">
            <FiSearch className="color-muted" size={25} />
            <input
              className="search-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Searching is easier"
            />
            <span className="clear">Clear</span>
          </div>
          <div className="category">
            <ul className="category-list">
              <li className="category-item category-item-active">
                All
                <span className="category-item-count">8</span>
              </li>
              {showActiveCategory().map((item,index)=>{
                return (
                  <li className="category-item">
                    <GrAttachment/>
                    {item.name}
                    <span className="category-item-count">8</span>
                  </li>
                )
              })}
            </ul>
            <CategoryMore category={category} handleToggle={handleToggle} />
          </div>
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
