import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";
import WaveBottom from "../assets/images/wave-bottom.svg";

const Footer = () => {
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
                        href="https://sascha-nabrotzky.de"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Webdesign & Entwicklung - Sascha Nabrotzky
                    </a>
                </li>
            </ul>
            <div className={styles.waveBottom}>
                <img src={WaveBottom} alt="" />
            </div>
        </footer>
    );
};

export default Footer;
