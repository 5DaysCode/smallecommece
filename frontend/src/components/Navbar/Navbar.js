import React from "react";
import "./navbar.scss";
import EcommerceLogo from "../common/svgicons/svgnavbaricons/ecommercelogo";

const Navbar = () => {
  return (
    <>
      <nav className="navbarcomponent">
        <ul className="navbarcomponent__menu">
          <li>
            <a>
              <EcommerceLogo />
              <span className="span__position">SmallEcommerce</span>
            </a>
          </li>

          <li href="/">
            <a>Start</a>
          </li>
          <li href="/">
            <a> About</a>
          </li>
          <li href="/">
            <a> Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
