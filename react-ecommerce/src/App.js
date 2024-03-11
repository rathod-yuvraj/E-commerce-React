import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cart from './features/Cart/Cart';


const router = createBrowserRouter([
  {
    path: "/Cart",
    element: <Cart></Cart>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
]);
function App() {
  return (
    <div className="App" >
    
      <RouterProvider router={router} />

  

    
    
    </div>
  );
}

export default App;
