import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "./HeroImage";
import styles from "../styles/header.module.css";
import Logo from "../assets/icons/kitala_logo.svg";

type HeaderProps = {
    heroSrc?: string;
    heroAlt?: string;
    ariaLabel?: string;
};

function Header({ heroSrc, heroAlt, ariaLabel }: HeaderProps) {
    const [navOpen, setNavOpen] = React.useState(false);
    const [useStyles, setUseStyles] = React.useState(window.innerWidth <= 768);
    const [navActive, setNavActive] = React.useState(false);

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
            </div>

            <HeroImage
                src={heroSrc ?? ""}
                alt={heroAlt}
                ariaLabel={ariaLabel}
            />
        </header>
    );
}

export default Header;
