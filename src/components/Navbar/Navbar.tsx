import React from 'react';
import "./Navbar.css";
import NavbarTitle from "./components/NavbarTitle";
import NavbarLink from "./components/NavbarLink";
import NavbarLinks from "./components/NavbarLinks";
import {LoggedInUser} from "../../model/LoggedInUser";

interface Props {
    setCurrUser:  React.Dispatch<React.SetStateAction<LoggedInUser | undefined>>;
}
function Navbar({setCurrUser}: Props) {
    return (
        <div className="navbar">
            <NavbarTitle titleText="Vocab Virtuoso" subtext="Welcome, User"/>
            <NavbarLinks>
                <NavbarLink text="Home" route="/"/>
                <NavbarLink text="My Classes" route="/my-classes"/>
                <NavbarLink text="My Students" route="/my-students"/>
                <span onClick={() => {setCurrUser(undefined)}}><NavbarLink text="Logout"/></span>
            </NavbarLinks>
        </div>
    );
}

export default Navbar;