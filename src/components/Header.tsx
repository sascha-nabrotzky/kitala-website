import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "./HeroImage";
import styles from "../styles/header.module.css";
import Logo from "../assets/icons/kitala_logo.svg";

type HeaderProps = {
    heroSrc?: string;
    heroAlt?: string;
};

function Header({ heroSrc, heroAlt }: HeaderProps) {
    const [navOpen, setNavOpen] = React.useState(false);
    const [useStyles, setUseStyles] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setUseStyles(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navStyle = useStyles
        ? { transform: navOpen ? "translateX(0)" : "translateX(-100%)" }
        : undefined;

    return (
        <header className={styles.header}>
            <nav className={styles.navigation} style={navStyle}>
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

            <button
                className={styles.hamburger}
                onClick={() => setNavOpen(!navOpen)}
                aria-label={`Menü ${navOpen ? "offen" : "geschlossen"}`}
                aria-expanded={navOpen}
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            <div className={styles.logoMobile}>
                <img src={Logo} alt="Logo KiTaLa e.V. Ladbergen" />
            </div>

            <HeroImage src={heroSrc ?? ""} alt={heroAlt} />
        </header>
    );
}

export default Header;
