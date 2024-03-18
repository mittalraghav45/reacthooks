import React,{useState} from 'react'

export default function Register({setUser})
{
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [passwordRepeat,setpasswordRepeat]= useState('');

    function handleUsername(evt){
        setUsername(evt.target.value)
    }
    function handlePassword(evt){
        setPassword(evt.target.value)
    }
    function handlePasswordRepeat(evt){
        setPassword(evt.target.value)
    }


return(
    <form onSubmit={e=>{e.preventDefault(); setUser(username)}}>
<label htmlFor="register-username">Username:</label>
<input type="text" value={username} onChange={handleUsername} name="register-username" id="register-username"></input>

<label htmlFor="register-password">Password:</label>
<input type='password' name="register-password" id="register-password" value={password} onChange={handlePassword}></input>
<label htmlFor="register-password-repeat">Re-enter Pasword:</label>
<input type='password' value={passwordRepeat} onChange={setpasswordRepeat}name="register-password-repeat" id="register-password-repeat" />

<input type="submit" value="Register" disabled={username.length===0 || password.length===0|| password!==passwordRepeat} />
    </form>
)
}