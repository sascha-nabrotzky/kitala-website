import { Link } from "react-router-dom";
import HeroImage from "./HeroImage";
import styles from "../styles/header.module.css";
import Logo from "../assets/icons/kitala_logo.svg";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>

                <Link to="/mitglieder" className={styles.link}>
                    Mitglieder
                </Link>

                <Link to="/inklusion" className={styles.link}>
                    Inklusion
                </Link>

                <div className={styles.logo}>
                    <img src={Logo} alt="Logo KiTaLa e.V. Ladbergen" />
                </div>

                <Link to="/faq" className={styles.link}>
                    FAQs
                </Link>

                <Link to="/blog" className={styles.link}>
                    Aktionen
                </Link>

                <Link to="/download" className={styles.link}>
                    Downloads
                </Link>
            </nav>
            <HeroImage />
        </header>
    );
}

export default Header;
