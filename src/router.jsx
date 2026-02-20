import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            }
        ]
    }
])
export default router;