import { useState, useEffect } from "react";
import styles from "../styles/totopbutton.module.css";

const ToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <button
            className={`${styles.totopbutton} ${
                !showButton && styles.buttonHidden
            }`}
            onClick={toTop}
            aria-label="Zurück nach oben"
            title="Zurück nach oben"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487">
                <path d="M397.7 376.1c20.4 20.4 53.6 20.4 74 0s20.4-53.6 0-74L280.5 110.9c-20.4-20.4-53.6-20.4-74 0L15.3 302.1c-20.4 20.4-20.4 53.6 0 74s53.6 20.4 74 0l154.2-154.2 154.2 154.2z" />
            </svg>
        </button>
    );
};

export default ToTopButton;
