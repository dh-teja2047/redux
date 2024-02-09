import { userRoles as ur } from "../data/userRole";
import UserProfile from "../pages/UserProfile";
export const admin_routes = [
    { 
        path: "/userprofile", 
        ele: <UserProfile/>,
        availability:[ur.admin]
    }
]