import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/header.module.css";
import Logo from "../assets/icons/kitala_logo.svg";

const Header = () => {
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
                <NavLink to="/" className={styles.link}>
                    Home
                </NavLink>

                <NavLink to="/mitglieder" className={styles.link}>
                    Mitglieder
                </NavLink>

                <NavLink to="/inklusion" className={styles.link}>
                    Inklusion
                </NavLink>

                <div className={styles.logo}>
                    <img src={Logo} alt="Logo KiTaLa e.V. Ladbergen" />
                    <span className={styles.logoText}>
                        <strong>KiTaLa e.V.</strong>
                    </span>
                </div>

                <NavLink to="/faq" className={styles.link}>
                    FAQs
                </NavLink>

                <NavLink to="/blog" className={styles.link}>
                    Aktionen
                </NavLink>

                <NavLink to="/download" className={styles.link}>
                    Downloads
                </NavLink>
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
                <span className={styles.logoText}>
                    <strong>KiTaLa e.V. &ndash;</strong>
                    <br />
                    Kindertagespflege Ladbergen
                </span>
            </div>
        </header>
    );
};

export default Header;
