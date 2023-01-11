import React from "react";
import { useState } from "react";
import NavBar from './NavBar';
 
function home(props) {
    const [state, setState] = useState([]);
    return (
        <>
            <NavBar />
            <h1>home</h1>
        </>
    )
}

export default home;