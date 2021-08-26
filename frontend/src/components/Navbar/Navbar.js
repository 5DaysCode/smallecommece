import React from "react";
import "./navbar.scss";
import { Route } from "react-router-dom";
import EcommerceLogo from "../common/svgicons/svgnavbaricons/ecommercelogo";
import Close from "../common/svgicons/svgnavbaricons/close";
import Menu from "../common/svgicons/svgnavbaricons/menu";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
            <NavLink to="/" activeStyle={{ color: "white" }}>
              <EcommerceLogo />
              <span className="span__position">SmallEcommerce</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/" activeStyle={{ color: "white" }}>
              Start
            </NavLink>
          </li>

          <li href="/">
            <a> About</a>
          </li>
          <li href="/">
            <a> Contact</a>
          </li>
          <li>
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart">
                {cartItems.length ? (
                  <span className="dot">{cartItems.length}</span>
                ) : null}
              </i>
            </NavLink>
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
