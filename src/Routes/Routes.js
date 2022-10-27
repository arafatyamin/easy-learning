import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import CourseDetails from "../components/Shared/CourseDetails/CourseDetails";
import Courses from "../components/Shared/Courses/Courses";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('https://education-assignment-server.vercel.app/course')
            },
            {
                path: '/course',
                element:<Courses/>,
                loader: () => fetch('https://education-assignment-server.vercel.app/course')
            },

            {
                path: '/course/:id',
                element:<PrivateRoute><CourseDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://education-assignment-server.vercel.app/course/${params.id}`)
            },

            {
                path: '/category/:id',
                element: <Courses/>,
                loader: ({params}) => fetch(`https://education-assignment-server.vercel.app/category/${params.id}`)
            },

            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    }
])