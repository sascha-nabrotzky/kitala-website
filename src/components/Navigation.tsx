import React from "react";
import { Link } from "react-router-dom";
import iconHome from "../images/home_neg.svg";
import iconCalendarGallery from "../images/calendar_gallery.svg";
import iconBook from "../images/book_neg.svg";
import iconUsers from "../images/users_neg.svg";
import iconDownload from "../images/download_neg.svg";
import iconInklusion from "../images/inklusion.svg";
import styles from "../styles/navigation.module.scss";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.liItem}>
          <Link to="/">
            <img src={iconHome} alt="Icon Home" />
          </Link>
        </li>
        <li className={styles.liItem}>
          <Link to="/blog">
            <img src={iconCalendarGallery} alt="Icon Home" />
          </Link>
        </li>
        <li className={styles.liItem}>
          <Link to="/mitglieder">
            <img src={iconUsers} alt="Icon Users" />
          </Link>
        </li>
        <li className={styles.liItem}>
          <Link to="/inklusion">
            <img src={iconInklusion} alt="Icon Inklusion" />{" "}
          </Link>
        </li>
        <li className={styles.liItem}>
          <Link to="/faq">
            <img src={iconBook} alt="Icon Book" />
          </Link>
        </li>
        <li className={styles.liItem}>
          <Link to="/download">
            <img src={iconDownload} alt="Icon Download" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
