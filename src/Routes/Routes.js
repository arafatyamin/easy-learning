import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Courses from "../components/Shared/Courses/Courses";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/course',
                element:<Courses></Courses>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }

        ]
    }
])