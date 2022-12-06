import React from 'react';
import NavbarTitle from "./components/NavbarTitle";
import NavbarLink from "./components/NavbarLink";
import NavbarLinks from "./components/NavbarLinks";

function Navbar() {

    return (
        <div className="navbar">
            <NavbarTitle titleText="Vocab Virtuoso" subtext="Welcome, User"/>
            <NavbarLinks>
                <NavbarLink text="Home" route="/"/>
                <NavbarLink text="My Classes" route="/my-classes"/>
                <NavbarLink text="My Students" route="/my-students"/>
                <NavbarLink text="Logout" route="/my-classes"/>
            </NavbarLinks>
        </div>
    );
}

export default Navbar;