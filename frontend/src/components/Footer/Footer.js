import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="mainfooter">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>Customer Service</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Shipping and delivery</a>
                    </li>
                    <li>
                      <a href="#">Replacement and Return</a>
                    </li>
                    <li>
                      <a href="#">Payment</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>About us </h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About SmallEcommerce</a>
                    </li>
                    <li>
                      <a href="#">Jobb</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Webmaster</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>Account</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">
              &copy; Copyright 2021 - SmallEcommerce - Ecommerce , All rights
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
