import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'menu',
                element:<Menu/>
            },
            {
                path:'order/:category',
                element:<Order/>
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'register',
                element:<SignUp />
            },
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard />,
        children:[
            {
                path:'cart',
                element:<Cart />
            }
        ]
    }
])