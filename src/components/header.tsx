import React from "react";
import Logo from "../images/kitala_logo.svg";
import gradient from "../images/gradient.svg";
import styles from "../styles/header.module.scss";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gradient}>
        <img src={gradient} alt="Verlauf oben" />
      </div>
      <Navigation />
      <div className={styles.logo}>
        <img src={Logo} alt="Logo KiTaLa e.V. Ladbergen"></img>
      </div>
    </header>
  );
}

export default Header;
