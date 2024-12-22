import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
        ]
    }
])