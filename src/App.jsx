import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import './App.css'
import List from './components/list';
import CategoryMore from './components/category-more/CategoryMore';

function App() {
  const [search,setSearch] = useState();
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
      <div className='app'>
          <div className='search-box'>
            <div className='search-input-wrap'>
              <FiSearch />
              <input className='search-input' type="text" value={search} placeholder='Searching is easier' />
              <span className='clear'>Clear</span>
            </div>
            <div className='category'>
                <ul className='category-list'>
                  <li className='category-item category-item-active'>
                    All
                    <span className='category-item-count'>8</span>
                  </li>
                  <li className='category-item'>
                    <GrAttachment />
                    Files
                    <span className='category-item-count'>6</span>
                  </li>
                  <li className='category-item'>
                    <GrAttachment />
                    People
                    <span className='category-item-count'>2</span>
                  </li>
                </ul>
                <CategoryMore/>
            </div>
            <List/>
          </div>
      </div>
    </>
  )
}

export default App
