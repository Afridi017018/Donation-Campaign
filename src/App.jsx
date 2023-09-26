import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom'

import Nav from './components/Nav/Nav'

export const SearchContext = createContext();

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Nav />
        <Outlet />
      </SearchContext.Provider>
    </div>
  )
}

export default App
