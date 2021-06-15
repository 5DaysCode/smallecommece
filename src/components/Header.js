import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import Search from "./Search/Search.js";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <LinkContainer to="">
            <Navbar.Brand>SmallEcommerce</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user px-2"></i>Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Route
              render={({ history }) => <Search history={history} />}
            ></Route>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
