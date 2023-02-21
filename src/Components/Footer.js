import React from "react";
import "../Styles/footer.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
function Footer() {
  let data = new Date().getFullYear();
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer-container">
      <div className="footer-small-container">
        <div className="footer-logo-container">
          <div className="footer-logo"></div>
          <div className="footer-copy">Copyright &copy; {data}</div>
          <div className="footer-all">All rights rezerved.</div>
        </div>
        <div className="footer-links">
          <div className="footer-title">Links</div>
          <div className="footer-links-container">
            <Link to="/" className="dec footer-color">
              Terms{" "}
            </Link>
            <Link to="/" className="dec footer-color">
              Policy
            </Link>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-accounts">
            <Link to="/" className="footer-color">
              <div className="footer-circle">
                <Icon
                  icon="akar-icons:instagram-fill"
                  className="footer-size"
                />
              </div>
            </Link>
            <Link to="/" className="footer-color">
              <div className="footer-circle">
                <Icon icon="brandico:facebook" className="footer-size" />
              </div>
            </Link>
            <Link to="/" className="footer-color">
              <div className="footer-circle">
                <Icon icon="akar-icons:tiktok-fill" className="footer-size" />
              </div>
            </Link>
          </div>
          <div className="footer-email">everestcompanyofficial@gmail.com</div>
        </div>
      </div>
      <div className="footer-nav" onClick={topFunction}>
        <Icon icon="fa:arrow-up" className="footer-arrow" />
      </div>
    </div>
  );
}
export default Footer;