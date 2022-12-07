import React from 'react';
import {LoggedInUser} from "../../model/LoggedInUser";
import {Navigate} from "react-router-dom";

interface Props {
    user?: LoggedInUser,
    children: JSX.Element | JSX.Element[]
}

const ProtectedRoute = ({user, children}: Props) => {
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return <>{children}</>;
}

export default ProtectedRoute;