import { useRef, useState } from "react";
import styles from "../styles/totopbutton.module.css";

function ToTopButton() {
  const [currentClass, setClass] = useState(`${styles.buttonHidden}`);

  const button = useRef(null);

  window.addEventListener("scroll", () => {
    setClass(
      window.scrollY > 200 ? `${styles.totopbutton}` : `${styles.buttonHidden}`
    );
  });

  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={currentClass}
      ref={button}
      onClick={toTop}
      aria-label="Back to top Button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487">
        <path d="M397.7 376.1c20.4 20.4 53.6 20.4 74 0s20.4-53.6 0-74L280.5 110.9c-20.4-20.4-53.6-20.4-74 0L15.3 302.1c-20.4 20.4-20.4 53.6 0 74s53.6 20.4 74 0l154.2-154.2 154.2 154.2z" />
      </svg>
    </button>
  );
}

export default ToTopButton;
