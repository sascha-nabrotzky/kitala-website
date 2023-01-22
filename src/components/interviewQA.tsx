import React, { useState, useRef } from "react";
import Chevron from "./chevron";
import style from "../styling/interviewQA.module.scss";

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

  const content = useRef("0");

  function changeClass() {
    setClass(
      currentClass === `${style.textHidden}`
        ? `${style.textVisible}`
        : `${style.textHidden}`
    );
    setHeightState(
      currentClass === `${style.textHidden}`
        ? `${content.current.scrollHeight}px`
        : "0px"
    );
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
      <h3 className={setColor} itemProp="name">
        {question}
      </h3>
      <div
        className={currentClass}
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <p itemProp="text">
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
