import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
// import Appointment from "../../pages/Appointment/Appointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
          path:"/signup",
          element: <Signup></Signup>
        },
        {
          path:"/appointment",
          element: <Appointment></Appointment>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard></Dashboard>
    }
  ]);