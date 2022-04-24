import React, { useState, useRef } from "react";
import Chevron from "../components/chevron";
import style from "../styling/interviewQA.module.scss";

export default function InterviewQA(props) {
  const [currentClass, setClass] = useState(`${style.textHidden}`);
  const [setHeight, setHeightState] = useState("");
  const [setColor, setColorState] = useState("");
  const [setRotate, setRotateState] = useState(`${style.chevronIcon}`);

  const content = useRef(null);

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
    <section className={style.clickable} onClick={changeClass}>
      <h3 className={setColor}>{props.question}</h3>
      <p
        className={currentClass}
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <strong>{props.person}: </strong>
        {props.answer}
      </p>
      <div className={style.chevronWrapper}>
        <Chevron className={`${setRotate}`} width={30} fill={"#999"} />
      </div>
    </section>
  );
}
