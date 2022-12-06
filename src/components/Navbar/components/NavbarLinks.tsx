import React from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

function NavbarLinks({children}: Props) {
    return (
        <nav className="navbar__links">
            {children}
        </nav>
    );
}

export default NavbarLinks;