import UserProfile from "../pages/UserProfile";
import { userRoles as ur } from "../data/userRole";


export const userProfileRoutes = [
    {
        path:'/userprofile',
        ele:<UserProfile/>,
        availability:[ur.admin]
    }
]