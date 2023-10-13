import Logo from "../assets/images/kitala_logo.svg";
import gradient from "../assets/images/gradient.svg";
import Navigation from "./Navigation";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gradient}>
        <img src={gradient} alt="Verlauf oben" />
      </div>
      <Navigation />
      <div className={styles.logo}>
        <img src={Logo} alt="Logo KiTaLa e.V. Ladbergen" />
      </div>
    </header>
  );
}

export default Header;
