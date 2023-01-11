import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <ul>
            <li>
                {<Link
                    to="/"
                >
                    Home
                </Link>}
            </li>
            <li>
                {<Link
                    to="com1"
                >
                    Component 1
                </Link>}
            </li>
            <li>
                {<Link
                    to="com2"
                >
                    Component 2
                </Link>}
            </li>
        </ul>
    );
}

export default NavBar;