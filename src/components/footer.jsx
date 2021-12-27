import React from "react";
import { Link } from "react-router-dom";
import footerStyles from "../components/footer.module.scss";

function Footer() {
  return (
    <>
      <footer>
        <ul className={footerStyles.footerListItems}>
          <li className={footerStyles.footerLink}>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li className={footerStyles.footerLink}>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
          <li className={footerStyles.footerLink}>
            <a
              href="https://sascha-nabrotzky.github.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              Web-Entwicklung | Sascha Nabrotzky
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
