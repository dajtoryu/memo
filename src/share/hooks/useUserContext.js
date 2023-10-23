import { useContext } from "react";
import { UserContext } from "../context/User/UserContext";

export  const useUserContext = ()=>{

    return useContext(UserContext);
}