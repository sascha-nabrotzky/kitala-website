import { useState, useRef } from "react";
import style from "../styles/accordion-interview.module.css";

type AccordionInterviewProps = {
    question: string;
    person: string;
    answer: string;
};

const AccordionInterview = ({
    question,
    person,
    answer,
}: AccordionInterviewProps) => {
    const [setHeight, setHeightState] = useState(96);
    const [showText, setShowText] = useState(false);

    const content = useRef<HTMLDivElement>(null);

    const handleTextVisibility = () => {
        setShowText((prev) => {
            const willShow = !prev;
            if (content.current) {
                setHeightState(willShow ? content.current.scrollHeight : 96);
            }
            return willShow;
        });
    };

    return (
        <div className={style.question}>
            <h3 className={style.title}>{question}</h3>
            <div
                id={question.split(" ").join("-").toLowerCase()}
                className={style.textContainer}
                ref={content}
                style={{ height: `${setHeight}px` }}
            >
                <p>
                    <strong>{person}: </strong>
                    {answer}
                </p>
            </div>
            <button
                className={style.showButton}
                onClick={handleTextVisibility}
                aria-expanded={showText ? true : false}
                aria-controls={question.split(" ").join("-").toLowerCase()}
            >
                {showText ? "Weniger anzeigen" : "Mehr anzeigen"}
            </button>
        </div>
    );
};

export default AccordionInterview;
