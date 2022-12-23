import React from "react";
import InklusionJSON from "../text/inklusion.json";
import inklusionStyles from "../styling/inklusion.module.scss";
import { Helmet } from "react-helmet";
import InterviewQA from "../components/interviewQA";

function Inklusion() {
  return (
    <>
      <Helmet>
        <title>Inklusion | KiTaLa e.V.</title>
        <meta name="description" content="Was Inklusion dem Verein bedeutet" />
      </Helmet>

      <main itemScope="" itemType="https://schema.org/FAQPage">
        <h1>Inklusion</h1>
        <h2>Interview des SKF mit unseren Tagesmüttern</h2>
        <div className={inklusionStyles.imgInklusion}>
          <img
            src="https://images.unsplash.com/photo-1591106149650-bf01704f9106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIxMDA1NTAz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            alt="Inklusion"
          />
          <figcaption>Foto: Unsplash</figcaption>
        </div>

        {InklusionJSON.inkulsionInterview.map((item) => {
          return (
            <InterviewQA
              key={item.index}
              question={item.inklusionFrage}
              person={item.inklusionTagesmutter}
              answer={item.inklusionAntwort}
            />
          );
        })}
      </main>
    </>
  );
}

export default Inklusion;
