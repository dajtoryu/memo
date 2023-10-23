import { useUserContext } from "@/share/hooks/useUserContext";


export const ProfilePage = ()=>{


    const {user} = useUserContext();

    if(user === null) return (<p>Пусто</p>)
    

    
    return(
      <>
      <p> Login: {user.login}</p>
      <p>Mail: {user.email}</p>
      </>
    )
    
}