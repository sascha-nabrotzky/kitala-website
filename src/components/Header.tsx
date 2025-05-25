import Logo from "../assets/icons/kitala_logo.svg";
import gradient from "../assets/icons/gradient.svg";
import styles from "../styles/header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.gradient}>
                <img src={gradient} alt="Verlauf oben" />
            </div>
            <div className={styles.logo}>
                <img
                    src={Logo}
                    alt="Logo KiTaLa e.V. Ladbergen"
                    width="200px"
                    height="auto"
                />
            </div>
        </header>
    );
}

export default Header;
