import { useMemo, useState } from "react";
// import { LuUser } from "react-icons/lu";
import "./App.css";
import Category from "./components/category/Category";
import List from "./components/list";
import Search from "./components/search/Search";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  console.log("app component re-rendered");
  
  const [loader, setLoader] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
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
  const [filterCount, setFilterCount] = useState(null)

  // TOGGLE ISVISIBLE WHERE CATEGORY ID = trueD
  const handleToggle = (id, isChecked) => {
    // console.log(id,isChecked)
    setData((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isVisible: isChecked } : true;
      })
    );
  };



  // HANDLE SEARCH WILL ACCEPT 2 PARAMETER 1 FOR SEARCH TEXT AND OTHER FOR CATEGORY
  const handleSearch = (searchText, selectedCategory) => {
    console.log('handleSearch called')
    console.log(searchText, selectedCategory);
    // setSelectedCategory('all');
    setLoader(true);
    if (searchText === "") {
      setTimeout(() => (setFilterData(null), setLoader(false)), 1000);
    } else if (selectedCategory === "all") {
      console.log("all category");
      setTimeout(
        () =>
          setFilterData(data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))),
          setLoader(false)
            ,
        1000
      );
      
    } else {
      console.log("filter category");
      setTimeout(
        () =>
          setFilterData(
            data.filter(
              (item) => item.name.toLowerCase().includes(searchText.toLowerCase()) && item.type === selectedCategory
            ),
            setLoader(false)
          ),
        1000
      );
    }
  };

  // make a dataset for category count which will just update on search change

  const uniqueCategory = useMemo(() => {
    return Array.from(new Map(data.map((item) => [item.name, item])).values());
  }, [data]);

  return (
    <>
      <div className="app">
        <div className="search-box">
          <Search
            loader={loader}
            selectedCategory={selectedCategory}
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}
          />
          {filterData != null && (
            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Category
                  data={data}
                  searchText={searchText}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  uniqueCategory={uniqueCategory}
                  handleSearch={handleSearch}
                  handleToggle={handleToggle}
                  filterData={filterData}
                />
                <List filterData={filterData} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
