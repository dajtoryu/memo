import { useState,useCallback} from "react";
import {useUserContext} from "@/share/hooks/useUserContext";
import { useForm } from "react-hook-form";
import { Input } from "@/share/ui/Input/Input";
import { Button } from "@/share/ui/Button/Button";
import {BsEyeSlash,BsEye} from 'react-icons/bs';
export const Form = ()=>{
    const {createUser} = useUserContext();
    const [passVisibility,setPassVisibility]=useState(false);
    const [login,setLogin] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');


    const onPassButtonClick = useCallback((e) =>{
        e.preventDefault();
        setPassVisibility((pr)=>!pr)
    },[passVisibility])


    const onLoginInputChange = useCallback((e)=>{
        setLogin(e.target.value);
    },[login])

    const onEmailInputChange = useCallback((e)=>{
        setEmail(e.target.value);
    },[email])

    const onPasswordInputChange = useCallback((e)=>{
        setPass(e.target.value);
    },[pass])

    const onRecordButtonClick = (e)=>{
        e.preventDefault();
        const user={login:login,email:email};
        createUser(user);
    }

    return (
        <form>
            <div>
                <span>Login: </span><Input id="1" onChange={onLoginInputChange} value={login} type="text" />
            </div>
            <div>
                <span>Email: </span><Input id="2" onChange={onEmailInputChange} type="email" value={email}/>
            </div>
            <div>
                <span>Passs: </span><Input id="3" onChange={onPasswordInputChange} type = {passVisibility ? "text" :"password"} value={pass}/> <Button onClick={onPassButtonClick} children={passVisibility ? <BsEye /> : <BsEyeSlash />}/> 

            </div>
            <div>
                <Button onClick={onRecordButtonClick} children="record"/>
            </div>
        </form>
    )

}