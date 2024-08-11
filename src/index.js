import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './routes/Root';
import Signup from './routes/Signup';
import Index from './routes/Index';
import Login from './routes/Login';
import Course from './routes/Course'
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "Signup",
        element: <Signup />
      },
      {
        path: "Login",
        element: <Login />
      },
      {
        path: "Course",
        element: <Course />
      }

    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={routes} />
  
);


