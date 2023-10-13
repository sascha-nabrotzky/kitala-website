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
      <Link to="/" className={styles.link}>
        <div className={styles.icon}>
          <img src={iconHome} alt="Icon Home" />
        </div>
        Home
      </Link>

      <Link to="/blog" className={styles.link}>
        <div className={styles.icon}>
          <img src={iconCalendarGallery} alt="Icon Image gallery" />
        </div>
        Aktionen
      </Link>

      <Link to="/mitglieder" className={styles.link}>
        <div className={styles.icon}>
          <img src={iconUsers} alt="Icon Users" />
        </div>
        Mitglieder
      </Link>

      <Link to="/inklusion" className={styles.link}>
        <div className={styles.icon}>
          <img src={iconInklusion} alt="Icon Inklusion" />
        </div>
        Inklusion
      </Link>

      <Link to="/faq" className={styles.link}>
        <div className={styles.icon}>
          <img src={iconBook} alt="Icon Book" />
        </div>
        FAQs
      </Link>

      <Link to="/download" className={styles.link}>
        <div className={styles.icon}>
          <img src={iconDownload} alt="Icon Download" />
        </div>
        <span>Downloads</span>
      </Link>
    </nav>
  );
}

export default Navigation;