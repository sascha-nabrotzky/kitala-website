import React, { useState, useRef } from "react";
import Chevron from "./chevron";
import faqStyles from "../styling/faq.module.scss";

interface AccordionProps {
  image: string;
  title: string;
  text: string;
}

const Accordion = ({ image, title, text }: AccordionProps) => {
  const [currentClass, setClass] = useState(`${faqStyles.texthidden}`);
  const [setHeight, setHeightState] = useState("");
  const [setRotate, setRotateState] = useState(`${faqStyles.accordionIcon}`);

  const content = useRef("0");

  function changeClass() {
    setClass(
      currentClass === `${faqStyles.texthidden}`
        ? `${faqStyles.active}`
        : `${faqStyles.texthidden}`
    );
    setHeightState(
      currentClass === `${faqStyles.texthidden}`
        ? `${content.current.scrollHeight}px`
        : "0px"
    );
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
          <h3 itemProp="name">{title}</h3>
          <Chevron className={`${setRotate}`} width={"30"} fill={"#999"} />
        </div>
        <div
          className={currentClass}
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div dangerouslySetInnerHTML={{ __html: text }} itemProp="text"></div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
