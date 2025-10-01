import { useState } from "react";
// import { LuUser } from "react-icons/lu";
import "./App.css";
import Category from "./components/category/Category";
import List from "./components/list";
import Search from "./components/search/Search";

function App() {

  const [category, setCategory] = useState([
    { id: 1, name: "files", isVisible: false },
    { id: 2, name: "people", isVisible: true },
    { id: 3, name: "chats", isVisible: false },
    { id: 4, name: "lists", isVisible: true },
  ]);

  // TOGGLE ISVISIBLE WHERE CATEGORY ID = ID
  const handleToggle = (id, isChecked) => {
    // console.log(id,isChecked)
    setCategory((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isVisible: isChecked } : item;
      })
    );
  };

  return (
    <>
      <div className="app">
        <div className="search-box">
          <Search />
          <Category category={category} handleToggle={handleToggle}/>
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
