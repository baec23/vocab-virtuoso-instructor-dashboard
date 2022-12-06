import React from 'react';
import {User} from "../../model/User";
import {Navigate} from "react-router-dom";

interface Props {
    user?: User,
    children: JSX.Element | JSX.Element[]
}

const ProtectedRoute = ({user, children}: Props) => {
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return <>{children}</>;
}

export default ProtectedRoute;