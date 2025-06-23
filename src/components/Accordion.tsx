import { useState, useRef } from "react";
import Chevron from "./Chevron";
import styles from "../styles/accordion.module.css";

interface AccordionProps {
    image: string;
    title: string;
    text: string;
    alt?: string;
}

const Accordion = ({ image, title, text, alt }: AccordionProps) => {
    const [currentClass, setClass] = useState(`${styles.texthidden}`);
    const [setHeight, setHeightState] = useState("");
    const [setRotate, setRotateState] = useState("");

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
            currentClass === `${styles.texthidden}` ? `${styles.rotate}` : ""
        );
    }

    return (
        <section>
            <div className={styles.question}>
                <div className={styles.imageWrapper}>
                    <img
                        src={`${image}`}
                        className={`${styles.faqImage}`}
                        alt={alt || ""}
                    />
                </div>
                <button
                    className={styles.titleWrapper}
                    onClick={changeClass}
                    aria-label="Öffne/Schließe Text"
                >
                    <h3 className={styles.title}>{title}</h3>
                    <Chevron
                        className={`${styles.accordionIcon} ${setRotate}`}
                        width={"20"}
                    />
                </button>
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
