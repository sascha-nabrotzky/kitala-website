import React from "react";
import galleryStyle from "../styling/gallery.module.scss";
import GalleryImage from "./galleryImage";
import Aktion1JSON from "./json/aktion1.json";

function Gallery() {
  return (
    <>
      <h3>Aktion "Gut betreut in der Kindertagespflege"</h3>
      <section className={galleryStyle.imagesWrapper}>
        {Aktion1JSON.aktion1.map((item) => {
          return (
            <GalleryImage
              key={item.imgAlt}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              imgFigCaption={item.imgFigCaption}
            />
          );
        })}
      </section>
    </>
  );
}

export default Gallery;
