import { memo } from "react";
export const Input = memo(({type,value,onChange,id})=>{
    console.log('input ',id);

    return (
        <input onChange={onChange} type={type} value={value} />
    )


})