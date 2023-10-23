import { useMemo } from "react";
import { useUserContext } from "./share/hooks/useUserContext";
export const List = ()=>{
  const {add} = useUserContext();
  console.log('List start');
   const res= add();
  
  

  
  return(
    <p>List {res}</p>
  )



}
