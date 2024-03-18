import React,{useState} from "react";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register";


export default function UserBar({user,setUser}){
    // 'Raghav Mittal';
    // const user='Raghav Mittal';
    if(user){
        return (<Logout user={user} setUser={setUser}/>)
    }
    else{
        return(
            <>
            <Login setUser={setUser}/>
            <Register setUser={setUser}/>
            </>
        )
    }
}