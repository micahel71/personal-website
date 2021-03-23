import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built and Deployed at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/micahel71" className="has-text-white">
            <strong>Michael Chalvatzis and the oss community</strong>
          </a>
        </p>
        <p>
          <a href="https://bulma.io">
          <img
            width="128"
            height="24"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt="Made with Bulma"
          />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
