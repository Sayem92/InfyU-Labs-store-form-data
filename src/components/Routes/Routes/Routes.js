import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import AddInformation from "../../Pages/AddInformation/AddInformation";
import AllInformation from "../../Pages/AllInformation/AllInformation";
import Login from "../../Pages/Form/Login";
import Register from "../../Pages/Form/Register";
import UpdateInformation from "../../Pages/UpdateInformation/UpdateInformation";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addInformation',
                element: <AddInformation></AddInformation>
            },
            {
                path: '/allInformation',
                element: <AllInformation></AllInformation>
            },
            {
                path: '/updateInformation/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/updateInfor/${params.id}`),
                element: <UpdateInformation></UpdateInformation>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
            
            
           
            
            
            
        ]
    }
])