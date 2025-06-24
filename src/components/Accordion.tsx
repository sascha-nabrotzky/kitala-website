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
    const [setHeight, setHeightState] = useState(0);
    const [showText, setShowText] = useState(false);

    const content = useRef<HTMLDivElement>(null);

    const handleTextVisibility = () => {
        setShowText((prev) => {
            const willShow = !prev;
            if (content.current) {
                setHeightState(willShow ? content.current.scrollHeight : 0);
            }
            return willShow;
        });
    };

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
                    onClick={handleTextVisibility}
                    aria-label="Öffne/Schließe Text"
                    aria-expanded={showText ? true : false}
                >
                    <h3 className={styles.title}>{title}</h3>
                    <Chevron
                        className={styles.accordionIcon}
                        width={"20"}
                        rotate={showText ? 180 : 0}
                    />
                </button>
                <div
                    className={styles.textContainer}
                    ref={content}
                    style={{ height: `${setHeight}px` }}
                >
                    <div dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
