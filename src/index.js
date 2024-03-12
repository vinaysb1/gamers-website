import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Login from './Components/Login'; 
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import News from './Components/News';
const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
    children: [
      {
        path: "/login",
        element: <Login />,
      },
        {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/news",
        element: <News />,
      }
    ],
  },
])
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
