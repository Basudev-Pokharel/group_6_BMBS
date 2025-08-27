import React from "react";
import User from "./User";
import { Link } from "react-router";

function Header({ isLoggedin }) {
  return (
    <div>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">Hpme</Link> <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> |<Link to="/explore">Explore</Link>
          ||
          {/* <a href="/">Home</a> |<a href="/about">About</a> | */}
          {/* <a href="/contact">Contact</a> |<a href="/explore">Explore</a> | */}
          {/* <a href="/login">Login</a> */}
          {isLoggedin ? (
            <a href="/user">Profile</a>
          ) : (
            <a href="/login">Login</a>
          )}
        </nav>
        <br />
      </header>
    </div>
  );
}

export default Header;
