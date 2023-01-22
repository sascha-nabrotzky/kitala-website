import React, { useEffect } from "react";
import { tns } from "tiny-slider";
import "../../node_modules/tiny-slider/src/tiny-slider.scss";
import Aktion1JSON from "../text/aktion1.json";

const Gallery = () => {
  useEffect(() => {
    tns({
      container: `.sliderImages`,
      items: 1,
      slideBy: "page",
      nav: false,
      controlsPosition: "bottom",
      controlsText: ["Zurück", "Vor"],
      autoplay: true,
      autoplayButtonOutput: false,
      gutter: 10,
      responsive: {
        640: {
          items: 1,
        },
        900: {
          items: 2,
        },
      },
    });
  });

  return (
    <section className="sliderWrapper">
      <h3>Aktion &quot;Gut betreut in der Kindertagespflege&quot;</h3>
      <div className="sliderImages">
        {Aktion1JSON.aktion1.map((item) => {
          return <img key={item.imgAlt} src={item.imgSrc} alt={item.imgAlt} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
