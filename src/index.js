import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Login from './Components/Login'; 
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';
import Auth from './Components/Auth';
import Settings from './Components/Settings';
import SupportTicket from './Components/SupportTicket';
import CreateTicket from './Components/CreateTicket';
import Faq from './Components/Faq';
const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login", // Modified: Relative path
        element: <Login />,
      },
      {
        path: "register", // Modified: Relative path
        element: <Register />,
      },
      {
        path: "dashboard", // Modified: Relative path
        element: <Dashboard />,
      },
      {
        path: "news", // Modified: Relative path
        element: <News />,
      },
      {
        path: "news/:id", // Modified: Relative path
        element: <NewsDetail />,
      },
      {
        path: "settings", // Modified: Relative path
        element: <Settings />,
        children: [
          {
            path: "support-tickets", // Modified: Relative path
            element: <SupportTicket />,
          },
          {
            path: "create-ticket", // Modified: Relative path
            element: <CreateTicket />,
          },
          {
            path: "faq", // Modified: Relative path
            element: <Faq />,
          },

        ],
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Auth>
    <RouterProvider router={router} />
    </Auth>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
