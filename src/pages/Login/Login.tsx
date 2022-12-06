import React from 'react';
import {User} from "../../model/User";
import {AuthApi} from "../../apis/AuthApi";

interface Props {
    setCurrUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

function Login({setCurrUser}: Props) {
    function handleLogin(username: string, password: string) {
        AuthApi.login(username, password).then(loggedInUser => setCurrUser(loggedInUser));
    }

    return (
        <div>
            <h1>LOGIN!</h1>
            <button onClick={() => {handleLogin("a","b")}}>click</button>
        </div>
    );
}

export default Login;