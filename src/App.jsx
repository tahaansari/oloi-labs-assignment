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

  const [data, setData] = useState([
    {
      id: 1,
      type: "people",
      name: "Randall Johnsson",
      status: "Active now",
      icon: "🧑‍💼", // you can replace with actual image/icon path
      isVisible: true
    },
    {
      id: 2,
      type: "files",
      name: "Random Michal Folder",
      details: "12 Files",
      location: "in Photos",
      updated: "Edited 12m ago",
      icon: "📁",
      isVisible: false
    },
    {
      id: 3,
      type: "files",
      name: "crative_file_frandkies.jpg",
      location: "in Photos/Assets",
      updated: "Edited 12m ago",
      icon: "🖼️",
      isVisible: false
    },
    {
      id: 4,
      type: "people",
      name: "Kristinge Karand",
      status: "Active 2d ago",
      icon: "🧑‍💼",
      isVisible: true
    },
    {
      id: 5,
      type: "files",
      name: "files_krande_michelle.avi",
      location: "in Videos",
      updated: "Added 12m ago",
      icon: "🎬",
      isVisible: false
    },
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
          <Category category={Array.from(new Map(data.map(item => [item.name, item])).values())} handleToggle={handleToggle}/>
          <List data={data}/>
        </div>
      </div>
    </>
  );
}

export default App;
