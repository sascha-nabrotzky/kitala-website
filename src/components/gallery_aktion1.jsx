import React from "react";
import galleryStyle from "../styling/gallery.module.scss";
import GalleryImage from "./galleryImage";
import Aktion1JSON from "./json/aktion1.json";

function Gallery() {
  return (
    <>
      <section className={galleryStyle.imagesWrapper}>
        {Aktion1JSON.aktion1.map((item) => {
          return (
            <GalleryImage
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
