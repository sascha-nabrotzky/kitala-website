import React from 'react';
import './galleryImage.module.scss';

function GalleryImage(props)  {

  return (
  <>
      <figure>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <figcaption>{props.imgFigCaption}</figcaption>
      </figure>
  </>
  )

}

export default GalleryImage;