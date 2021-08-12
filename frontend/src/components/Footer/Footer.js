import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Customer Service</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#">Payment Center</a>
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
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>About us</h4>
                  <ul class="list-unstyled">
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
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Account</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>

                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h4>Follow Us</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a href="#" class="icoFacebook" title="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoLinkedin" title="Linkedin">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 copy">
                <p class="text-center">
                  &copy; Copyright 2021 - SmallEcommerce. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
