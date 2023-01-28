import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/kitala_logo.svg";
import headerStyles from "../styles/header.module.scss";
import iconHome from "../images/home_neg.svg";
import iconCalendarGallery from "../images/calendar_gallery.svg";
import iconBook from "../images/book_neg.svg";
import iconUsers from "../images/users_neg.svg";
import iconDownload from "../images/download_neg.svg";
import iconInklusion from "../images/inklusion.svg";
import gradient from "../images/gradient.svg";

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.gradient}>
        <img src={gradient} alt="Verlauf oben" />
      </div>
      <nav className={headerStyles.navigation}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.liItem}>
            <Link to="/">
              <img src={iconHome} alt="Icon Home" />
            </Link>
          </li>
          <li className={headerStyles.liItem}>
            <Link to="/blog">
              <img src={iconCalendarGallery} alt="Icon Home" />
            </Link>
          </li>
          <li className={headerStyles.liItem}>
            <Link to="/mitglieder">
              <img src={iconUsers} alt="Icon Users" />
            </Link>
          </li>
          <li className={headerStyles.liItem}>
            <Link to="/inklusion">
              <img src={iconInklusion} alt="Icon Inklusion" />{" "}
            </Link>
          </li>
          <li className={headerStyles.liItem}>
            <Link to="/faq">
              <img src={iconBook} alt="Icon Book" />
            </Link>
          </li>
          <li className={headerStyles.liItem}>
            <Link to="/download">
              <img src={iconDownload} alt="Icon Download" />
            </Link>
          </li>
        </ul>
      </nav>

      <div className={headerStyles.logo}>
        <img src={Logo} alt="Logo KiTaLa e.V. Ladbergen"></img>
      </div>
    </header>
  );
}

export default Header;
