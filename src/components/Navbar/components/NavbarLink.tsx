import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    text: string,
    route: string
}

function NavbarLink({text, route}: Props) {
    return (
        <Link className="navbar__link" to={route}>{text}</Link>
    );
}

export default NavbarLink;
