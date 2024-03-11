import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/Home",
    element: <Home></Home>,
  },
]);
function RouterPage() {
  return (
    <div className="App" >
        
      <RouterProvider router={router} />

  

    
    
    </div>
  );
}

export default RouterPage;
