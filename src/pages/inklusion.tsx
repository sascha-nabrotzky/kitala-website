import React from "react";
import InklusionJSON from "../text/inklusion.json";
import InterviewQA from "../components/InterviewQA";
import inklusionStyles from "../styles/inklusion.module.css";
import Layout from "../components/Layout";

function Inklusion() {
  return (
    <Layout>
      <main>
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
    </Layout>
  );
}

export default Inklusion;
