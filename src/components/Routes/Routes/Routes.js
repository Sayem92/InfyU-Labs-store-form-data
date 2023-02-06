import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import AddInformation from "../../Pages/AddInformation/AddInformation";
import AllInformation from "../../Pages/AllInformation/AllInformation";
import Confirm from "../../Pages/Confirm/Confirm";
import Login from "../../Pages/Form/Login";
import Register from "../../Pages/Form/Register";
import UpdateInformation from "../../Pages/UpdateInformation/UpdateInformation";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoutes><AddInformation></AddInformation></PrivateRoutes>
            },
            {
                path: '/allInformation',
                element: <PrivateRoutes><AllInformation></AllInformation></PrivateRoutes>
            },
            {
                path: '/updateInformation/:id',
                loader: ({ params }) => fetch(`https://infy-u-labs-store-form-data-server.vercel.app/updateInfor/${params.id}`),
                element: <UpdateInformation></UpdateInformation>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/confirmation',
                element: <Confirm></Confirm>
            }






        ]
    }
])