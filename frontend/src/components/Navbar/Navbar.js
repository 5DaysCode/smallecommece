import React from "react";
import "./navbar.scss";
import { Route } from "react-router-dom";
import EcommerceLogo from "../common/svgicons/svgnavbaricons/ecommercelogo";
import Close from "../common/svgicons/svgnavbaricons/close";
import Menu from "../common/svgicons/svgnavbaricons/menu";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbarcomponent">
        <input
          type="checkbox"
          id="navbarcomponent__checkbox"
          className="navbarcomponent__checkbox"
        />
        <label
          htmlFor="navbarcomponent__checkbox"
          className="navbarcomponent__toggle"
        >
          <Menu />
          <Close />
        </label>

        <ul className="navbarcomponent__menu">
          <li>
            <a>
              <EcommerceLogo />
              <span className="span__position">SmallEcommerce</span>
            </a>
          </li>

          <li>
            <Link to="/" className="">
              Start
            </Link>
          </li>

          <li href="/">
            <a> About</a>
          </li>
          <li href="/">
            <a> Contact</a>
          </li>
          <div className="navbarcomponent__searchbox">
            <Route
              render={({ history }) => <Search history={history} />}
            ></Route>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
