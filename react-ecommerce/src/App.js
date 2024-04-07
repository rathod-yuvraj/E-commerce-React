import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
//import CartPage  from './pages/CartPage';
import Cart from './features/cart/Cart';
import Checkout from './pages/Checkout';
import CartPage from './pages/CartPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";



const router = createBrowserRouter([

 
  {
    path: "/cart",
    element: <Checkout></Checkout>,
    
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
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <Cart></Cart>,
   
  },
]);
function App() {
  return (
    <div className="App" >
    
      <RouterProvider router={router} />

  {/* <CartPage></CartPage> */}

    
    
    </div>
  );
}

export default App;
