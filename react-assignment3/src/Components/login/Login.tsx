import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FormControl, TextField, Button } from '@material-ui/core';
import User from '../../model/User';
import {LoginService} from '../../service/LoginService';
import Register from '../register/Register';
import UserProfile from '../../model/UserProfile';

const useStyles = makeStyles(() => 
createStyles({
    root:{
        marginTop:'25vh',
        marginBottom:'46vh',
        textAlign:'center'
    }
}))


const Login = (props:any) =>{
    const classes = useStyles();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState('');
    localStorage.clear();
  
    const handleOnChange = (event:any) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if(name === "username")
            setUserName(value)
        else
            setPassword(value)
    }

    const handleLogin = () => {
        const user = new User(username,password);
        const auth = LoginService(user);
        auth.then((data) => {
            props.updateToken(data.token);
            props.updateUserName(username);
        })
    }

    return <div className = {classes.root}>
        <FormControl>
            <TextField placeholder = "User Name"
                        value = {username}
                        id="userId"
                        name = "username"
                        onChange = {handleOnChange}
                        required></TextField>
            <TextField placeholder = "Password"
                        type = "password"
                        value = {password}
                        id="usrPassword"
                        name = "password"
                        onChange = {handleOnChange}
                        required></TextField>
                        <br/>
            <Button size="small" variant="contained" color="primary" id="loginBtn" onClick = {handleLogin}>Login</Button>
            <br/>
           <Register/>
        </FormControl>
    </div>
}

export default Login;