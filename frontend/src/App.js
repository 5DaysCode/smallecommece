import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

import HomeUI from "./UI/HomeUI/HomeUI.js";
import ProductsInCategoryUI from "./UI/ProductsInCategoryUI.js";
import ProductUI from "./UI/ProductUI.js";

import "../src/sass/main.scss";
import Video from "./components/Video/Video.js";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Video />

        <main className="py-3">
          <Container fluid>
            <Route path="/" component={HomeUI} exact />
            <Route path="/search/:keyword" component={HomeUI} />
            <Route path="/product/:id" component={ProductUI} />
            <Route
              path="/category/:categoryKeyword"
              component={ProductsInCategoryUI}
            ></Route>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
