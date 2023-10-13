import React from "react";
import Artikel from "./Artikel";
import Artikel_Gemeinsam_JSON from "../text/artikel_gemeinsam.json";

function Artikel_Gemeinsam() {
  return (
    <>
      {Artikel_Gemeinsam_JSON.artikel_gemeinsam.map(
        (item: {
          date: string;
          titel2: string;
          titel1: string;
          autor: string;
          vorspann: string;
          text: string;
          imgSrc: string;
        }) => {
          return (
            <Artikel
              key={item.date.toString()}
              titel2={item.titel2}
              titel1={item.titel1}
              autor={item.autor}
              date={item.date}
              vorspann={item.vorspann}
              text={item.text}
              imgSrc={item.imgSrc}
            />
          );
        }
      )}
    </>
  );
}

export default Artikel_Gemeinsam;
