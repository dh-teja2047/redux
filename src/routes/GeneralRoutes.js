import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { userRoles as ur } from "../data/userRole";

export const generalRoutes = [
    {
        path:'/login',
        ele: <Login/>,
        availability:[ur.admin, ur.guest]
    }
]