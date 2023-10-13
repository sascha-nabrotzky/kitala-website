import { Link } from "react-router-dom";
import iconHome from "../assets/images/home_neg.svg";
import iconCalendarGallery from "../assets/images/calendar_gallery.svg";
import iconBook from "../assets/images/book_neg.svg";
import iconUsers from "../assets/images/users_neg.svg";
import iconDownload from "../assets/images/download_neg.svg";
import iconInklusion from "../assets/images/inklusion.svg";
import styles from "../styles/navigation.module.css";

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
        Downloads
      </Link>
    </nav>
  );
}

export default Navigation;
