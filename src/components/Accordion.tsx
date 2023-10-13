import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import faqStyles from "../styles/accordion.module.css";

interface AccordionProps {
  image: string;
  title: string;
  text: string;
}

const Accordion = ({ image, title, text }: AccordionProps) => {
  const [currentClass, setClass] = useState(`${faqStyles.texthidden}`);
  const [setHeight, setHeightState] = useState("");
  const [setRotate, setRotateState] = useState(`${faqStyles.accordionIcon}`);

  const content = useRef<HTMLDivElement>(null);

  function changeClass() {
    setClass(
      currentClass === `${faqStyles.texthidden}`
        ? `${faqStyles.active}`
        : `${faqStyles.texthidden}`
    );
    // Typescript braucht die Condition für useRef
    if (content.current) {
      setHeightState(
        currentClass === `${faqStyles.texthidden}`
          ? `${content.current.scrollHeight}px`
          : "0px"
      );
    }
    setRotateState(
      currentClass === `${faqStyles.texthidden}`
        ? `${faqStyles.rotate}`
        : `${faqStyles.accordionIcon}`
    );
  }

  return (
    <section>
      <div className={faqStyles.question} onClick={changeClass}>
        <img
          src={`${image}`}
          className={`${faqStyles.faqImage}`}
          alt="Illustration Sascha Nabrotzky"
        />
        <div className={faqStyles.titleChevronWrapper}>
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
