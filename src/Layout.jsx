import React, { use, useState } from "react";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import { Outlet } from "react-router";

function Layout() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <Header isLoggedin={isLogged}></Header>
      <hr></hr>
      <p>Hello</p>
      <Outlet></Outlet>
      <hr></hr>
      <h1>Home Sweet Home</h1>
      <button
        onClick={() => {
          setIsLogged(true);
        }}
      >
        Log In
      </button>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
