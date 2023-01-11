import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './router'


import Home from './home';
import Component1 from './component1';
import Component2 from './component2';

const router = createBrowserRouter([
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
