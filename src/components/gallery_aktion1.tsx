import React, { useLayoutEffect } from "react";
import { tns } from "tiny-slider";
import "../../node_modules/tiny-slider/src/tiny-slider.scss";
import Aktion1JSON from "../text/aktion1.json";

const Gallery = () => {
  useLayoutEffect(() => {
    tns({
      container: `.sliderImages`,
      items: 1,
      slideBy: "page",
      nav: false,
      prevButton: ".prevBtn",
      nextButton: ".nextBtn",
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
      <div className="tnscontrols">
        <div className="prevBtn">
          <svg viewBox="-90 0 487 487" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m 280.5,89.3 c 20.4,-20.4 20.4,-53.6 0,-74 -20.4,-20.4 -53.6,-20.4 -74,0 L 15.3,206.5 c -20.4,20.4 -20.4,53.6 0,74 l 191.2,191.2 c 20.4,20.4 53.6,20.4 74,0 20.4,-20.4 20.4,-53.6 0,-74 L 126.3,243.5 Z"
              id="path214"
            />
          </svg>
        </div>
        <div className="nextBtn">
          <svg viewBox="-90 0 487 487" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m 15.3,397.7 c -20.4,20.4 -20.4,53.6 0,74 20.4,20.4 53.6,20.4 74,0 L 280.5,280.5 c 20.4,-20.4 20.4,-53.6 0,-74 L 89.3,15.3 c -20.4,-20.4 -53.6,-20.4 -74,0 -20.4,20.4 -20.4,53.6 0,74 l 154.2,154.2 z"
              id="path366"
            />
          </svg>
        </div>
      </div>
      <div className="sliderImages">
        {Aktion1JSON.aktion1.map((item) => {
          return <img key={item.imgAlt} src={item.imgSrc} alt={item.imgAlt} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
