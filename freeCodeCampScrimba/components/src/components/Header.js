import React from "react";
import index from "./styles/index.css";

function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src="/logo192.png" className="nav-logo"></img>

          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
