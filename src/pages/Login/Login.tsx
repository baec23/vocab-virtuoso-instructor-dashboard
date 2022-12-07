import React, {useState} from 'react';
import {LoggedInUser} from "../../model/LoggedInUser";
import {AuthApi} from "../../apis/AuthApi";
import LoginForm from "./components/LoginForm";
import {useMutation} from "react-query";

export enum LoginState {
    "base",
    "loggedIn",
    "pending",
    "error"
}

interface Props {
    setCurrUser: React.Dispatch<React.SetStateAction<LoggedInUser | undefined>>;
}

function Login({setCurrUser}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(LoginState.base);

    const loginMutation = useMutation(AuthApi.login, {
        onSuccess: (data) => {
            setCurrUser(data);
            setLoginState(LoginState.loggedIn);
        },
        onError: (error) => {
            setLoginState(LoginState.error);
        }
    });

    function handleLogin() {
        if (loginState !== LoginState.pending) {
            setLoginState(LoginState.pending)
            loginMutation.mutate({username: username, password: password});
        }
    }

    return (
        <div className="login-page">
            <LoginForm username={username} setUsername={setUsername}
                       password={password} setPassword={setPassword}
                       onSubmit={handleLogin}
                       loginState={loginState}/>
        </div>
    );
}

export default Login;