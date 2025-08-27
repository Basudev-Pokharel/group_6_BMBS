import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Explore from "./Pages/Explore";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import User from "./Pages/User";
import Fallback from "./Pages/Fallback";

function App() {
  const [count, setCount] = useState(0);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/explore", element: <Explore /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/user", element: <User /> },
        { path: "/*", element: <Fallback /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
