import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/Faq/Faq";
import FullCourse from "../../Pages/FullCourse/FullCourse";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PremiumCheckout from "../../Pages/PremiumCheckout/PremiumCheckout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courseCategories')
            },
            {
                path: '/courses',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courseCategories')
               
            },
            {
                path: '/courseDetails/:id',
                element: <FullCourse></FullCourse>,
                loader: ({params}) => fetch(`http://localhost:5000/courseDetails/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><PremiumCheckout></PremiumCheckout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/courseDetails/${params.id}`)
            },
            {
                path:'/blog', 
                element:<Blog></Blog>
              },
              {
                path:'/faq', 
                element:<Faq></Faq>
              },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    {path:'/*', element:<div className='errorAll'>This route is not found</div> },
])