import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Donate from './pages/Donate/Donate.jsx';
import Donation from './pages/Donation/Donation.jsx';
import Statistics from './pages/Statistics/Statistics.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => fetch('/fakeData.json'),
        element: <Home />,
      },
      {
        path: "/donate/:id",
        // loader: ()=> fetch('fakeData.json'),
        element: <Donate />,
      },
      {
        path: "/donation",
        loader: () => fetch('/fakeData.json'),
        element: <Donation />,
      },
      {
        path: "/statistics",
        // loader: ()=> fetch('/fakeData.json'),
        element: <Statistics />,
      },

    ],
  },
]);

// const SearchContext = createContext();

// const [search, setSearch] = useState("hi Iam jhumon");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <SearchContext.Provider value={{search, setSearch}}> */}
      <RouterProvider router={router} />
    {/* </SearchContext.Provider> */}

  </React.StrictMode>,
)
