import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import style from "../styles/interviewQA.module.css";

type InterviewProps = {
  question: string;
  person: string;
  answer: string;
};

const InterviewQA = ({ question, person, answer }: InterviewProps) => {
  const [currentClass, setClass] = useState(`${style.textHidden}`);
  const [setHeight, setHeightState] = useState("");
  const [setColor, setColorState] = useState("");
  const [setRotate, setRotateState] = useState(`${style.chevronIcon}`);

  const content = useRef<HTMLDivElement>(null);

  function changeClass() {
    setClass(
      currentClass === `${style.textHidden}`
        ? `${style.textVisible}`
        : `${style.textHidden}`
    );
    // Typescript braucht die Condition für useRef
    if (content.current) {
      setHeightState(
        currentClass === `${style.textHidden}`
          ? `${content.current.scrollHeight}px`
          : "0px"
      );
    }
    setColorState(
      currentClass === `${style.textHidden}` ? `${style.interviewVisible}` : ""
    );
    setRotateState(
      currentClass === `${style.textHidden}`
        ? `${style.rotate}`
        : `${style.chevronIcon}`
    );
  }

  return (
    <section className={style.question} onClick={changeClass}>
      <h3 className={setColor}>{question}</h3>
      <div
        className={currentClass}
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <p>
          <strong>{person}: </strong>
          {answer}
        </p>
      </div>
      <div className={style.chevronWrapper}>
        <Chevron className={`${setRotate}`} width={"30"} fill={"#999"} />
      </div>
    </section>
  );
};

export default InterviewQA;
