import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from "./routes/root";
import LoginOrg from './routes/login.jsx';
import SignUp from './routes/signup.jsx';
import LoginUser from './routes/loginuser';
import SignupUser from './routes/signupUser';
import Events from './routes/events.jsx';
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginOrg />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "loginUser",
    element: <LoginUser />,
  },
  {
    path: "signupUser",
    element: <SignupUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
