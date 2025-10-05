import { useMemo, useState } from "react";
// import { LuUser } from "react-icons/lu";
import "./App.css";
import Category from "./components/category/Category";
import List from "./components/list";
import Search from "./components/search/Search";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  console.log("app component re-rendered");
  const [loader,setLoader] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      type: "people",
      name: "Randall Johnsson",
      status: "Active now",
      icon: "🧑‍💼", // you can replace with actual image/icon path
      isVisible: true,
    },
    {
      id: 2,
      type: "files",
      name: "Random Michal Folder",
      details: "12 Files",
      location: "in Photos",
      updated: "Edited 12m ago",
      icon: "📁",
      isVisible: true,
    },
    {
      id: 3,
      type: "files",
      name: "crative_file_frandkies.jpg",
      location: "in Photos/Assets",
      updated: "Edited 12m ago",
      icon: "🖼️",
      isVisible: true,
    },
    {
      id: 4,
      type: "people",
      name: "Kristinge Karand",
      status: "Active 2d ago",
      icon: "🧑‍💼",
      isVisible: true,
    },
    {
      id: 5,
      type: "files",
      name: "files_krande_michelle.avi",
      location: "in Videos",
      updated: "Added 12m ago",
      icon: "🎬",
      isVisible: true,
    },
  ]);

  const [filterData, setFilterData] = useState(null);

  // TOGGLE ISVISIBLE WHERE CATEGORY ID = trueD
  const handleToggle = (id, isChecked) => {
    // console.log(id,isChecked)
    setData((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isVisible: isChecked } : true;
      })
    );
  };

  // const handleFilter = (type) => {
  //   setLoader(true);
  //   setFilterData(type === "all" ? (setLoader(false), filterData) : (setLoader(false), filterData.filter((item) => item.type === type)))
  // }

  // SEARCH VALUE + CATEGORY TYPE EXAMPLE "K" "ALL", "K" "PEOPLE"
  
  // INITIALLY DON'T PRINT ANYTHING
  const handleSearch = (value) => {
    setLoader(true);
    // value === "" ? : setTimeout(()=> setFilterData( data.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase())), setLoader(false)),1000) ;
    if(value === ""){
      
       setTimeout(()=>(setFilterData(null), setLoader(false)),1000)
    }else if(value === "all"){

    }
  }
  

  const uniqueCategory = useMemo(() => {
    return Array.from(new Map(data.map((item) => [item.name, item])).values());
  }, [data]);

  return (
    <>
      <div className="app">
        <div className="search-box">
          <Search loader={loader} handleSearch={handleSearch} />
          {filterData != null && <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Category filterData={filterData} category={uniqueCategory} handleToggle={handleToggle} handleSearch={handleSearch} />
                <List filterData={filterData} />
              </motion.div>
          </AnimatePresence>}
        </div>
      </div>
    </>
  );
}

export default App;
