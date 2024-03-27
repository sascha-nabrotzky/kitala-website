import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer>
      <ul className={styles.footerListItems}>
        <li className={styles.footerLink}>
          <Link to="/impressum">Impressum</Link>
        </li>
        <li className={styles.footerLink}>
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
        <li>|</li>
        <li className={styles.footerLinkSelfPromo}>
          <a
            href="https://sascha-nabrotzky.github.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Webdesign
          </a>{" "}
          &{" "}
          <a
            href="http://www.sascha-nabrotzky.de"
            target="_blank"
            rel="noreferrer noopener"
          >
            Illustration
          </a>
          : <span>Sascha Nabrotzky</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
