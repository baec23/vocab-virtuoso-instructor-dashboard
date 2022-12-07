import React from 'react';
import "../Login.css"
import "../../../App.css";
import {LoginState} from "../Login";

interface Props {
    username: string
    password: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    onSubmit: any
    loginState: LoginState
}

function LoginForm({username, setUsername, password, setPassword, onSubmit, loginState}: Props) {
    return (
        <form className="login-form" onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
        }
        }>
            <label htmlFor="username">Username:</label>
            <input type="text" className="login-form__username" id="username" value={username}
                   onChange={(event => setUsername(event.target.value))}/>
            <label htmlFor="password">Password:</label>
            <input type="password" className="login-form__password" id="password" value={password}
                   onChange={event => setPassword(event.target.value)}/>
            {loginState === LoginState.pending
                ?
                <span className="loading__progress-spinner"/>
                :
                <input type="submit" value="Login"/>
            }
            {loginState === LoginState.error
                ?
                <span>Error Logging In</span>
                :
                <span></span>
            }
        </form>
    );
}

export default LoginForm;