import { NavLink } from "react-router-dom";

export const UserNavbar = ()=>{
    return (
        <ul>
           <li><NavLink to="/">Enter</NavLink></li>
           <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>

    )
}
