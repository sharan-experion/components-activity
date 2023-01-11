import React from 'react'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from './home';
import Component1 from './component1';
import Component2 from './component2';

export default createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/com1',
            element: <Component1 />
        },
        {
            path: '/com2',
            element: <Component2 />
        },
    ])
