import { NavLink } from "react-router-dom";
import styles from "../styles/footer.module.css";
import WaveBottom from "../assets/images/wave-bottom.svg";

const Footer = () => {
    return (
        <footer>
            <ul className={styles.footerListItems}>
                <li className={styles.footerLink}>
                    <NavLink to="/impressum">Impressum</NavLink>
                </li>
                <li className={styles.footerLink}>
                    <NavLink to="/datenschutz">Datenschutz</NavLink>
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
                <img src={WaveBottom} alt="" loading="lazy" />
            </div>
        </footer>
    );
};

export default Footer;
