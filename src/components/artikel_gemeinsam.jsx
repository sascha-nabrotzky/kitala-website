import React from "react";
import Artikel from "./artikel";
import Artikel_Gemeinsam_JSON from "./json/artikel_gemeinsam.json";

function Artikel_Gemeinsam() {
  return (
    <>
      {Artikel_Gemeinsam_JSON.artikel_gemeinsam.map((item) => {
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
      })}
    </>
  );
}

export default Artikel_Gemeinsam;
