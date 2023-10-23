import { useState } from "react";
import { UserContext } from "./UserContext";


export const   UserContextProvider =({children})=>{

    const [user, setUser] = useState(null);
    
    const createUser = (newUser)=>{
            setUser(newUser);
    }

   return(
    <UserContext.Provider value={{createUser,user}}>
        {children}
    </UserContext.Provider>

   )


}