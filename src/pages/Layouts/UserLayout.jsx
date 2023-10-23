import { Outlet, NavLink } from "react-router-dom";
import { UserNavbar } from "../../widgets/UserNavBar/UserNavbar";

export const UserLayout = ()=>{

    return(
        <>
        <UserNavbar />
        <Outlet />
        </>
    )
}