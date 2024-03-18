import React ,{useState} from 'react'
 
export default function  Login({setUser})
{
    const [username,setUsername]= useState('');

    function handleUsername(evt)
    {
        setUsername(evt.target.value);
    }

    return(
        <form onSubmit={e=>{e.preventDefault();
         setUser(username)}}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={username}    onChange={handleUsername} name="login-username" id="login-username"></input>
            <label htmlFor="login-password">Pasword:</label>
            <input type="password" name="login-password" id="login-password"></input>
            <input type='submit' value="Login" disabled={username.length===0}></input>           
            </form>
    )
}