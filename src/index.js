import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
createBrowserRouter
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
// import my pages
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SignUpPage from './pages/SignUp'
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import Protected from "./components/Protected"

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [
      {
        path: "/",
        element:<HomePage/> ,
      },
      {
        path: "/about",
        element:<AboutPage/> ,
      },

      {
        path: "/contact",
        element:<Protected> 
                  <ContactPage/> 
                </Protected> ,
      }

      , {
        path: "/sign-up",
        element:<SignUpPage/> ,
      },

      {
        path: "*",
        element:<ErrorPage/> ,
      }

    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
