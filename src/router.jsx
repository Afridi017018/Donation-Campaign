import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home/Home.jsx';
import Donate from './pages/Donate/Donate.jsx';
import Donation from './pages/Donation/Donation.jsx';
import Statistics from './pages/Statistics/Statistics.jsx';
import Error from "./pages/Error/Error";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                loader: () => fetch('/fakeData.json'),
                element: <Home />,
            },
            {
                path: "/donate/:id",
                loader: () => fetch('/fakeData.json'),
                element: <Donate />,
                
            },
            {
                path: "/donation",
                loader: () => fetch('/fakeData.json'),
                element: <Donation />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },

        ],
    },
]);