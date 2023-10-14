import { useState, useRef } from "react";
import Chevron from "./Chevron";
import styles from "../styles/accordion.module.css";

interface AccordionProps {
  image: string;
  title: string;
  text: string;
}

const Accordion = ({ image, title, text }: AccordionProps) => {
  const [currentClass, setClass] = useState(`${styles.texthidden}`);
  const [setHeight, setHeightState] = useState("");
  const [setRotate, setRotateState] = useState(`${styles.accordionIcon}`);

  const content = useRef<HTMLDivElement>(null);

  function changeClass() {
    setClass(
      currentClass === `${styles.texthidden}`
        ? `${styles.active}`
        : `${styles.texthidden}`
    );
    // Typescript braucht die Condition für useRef
    if (content.current) {
      setHeightState(
        currentClass === `${styles.texthidden}`
          ? `${content.current.scrollHeight}px`
          : "0px"
      );
    }
    setRotateState(
      currentClass === `${styles.texthidden}`
        ? `${styles.rotate}`
        : `${styles.accordionIcon}`
    );
  }

  return (
    <section>
      <div className={styles.question} onClick={changeClass}>
        <img
          src={`${image}`}
          className={`${styles.faqImage}`}
          alt="Illustration Sascha Nabrotzky"
        />
        <div className={styles.titleChevronWrapper}>
          <h3>{title}</h3>
          <Chevron className={`${setRotate}`} width={"30"} fill={"#999"} />
        </div>
        <div
          className={currentClass}
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
