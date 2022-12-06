import React from 'react';

interface Props {
    titleText: string,
    subtext: string,
}

function NavbarTitle({titleText, subtext}: Props) {
    return (
        <div className="navbar__title">
            <div className="navbar__title--title-text">
                {titleText}
            </div>
            <div className="navbar__title--subtext">
                {subtext}
            </div>
        </div>
    );
}

export default NavbarTitle;