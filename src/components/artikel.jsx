import React from 'react';
import artikelStyles from './artikel.module.scss';


function Artikel(props) {
  return (
      <article className={artikelStyles.article}>
        <h3>{props.titel2}</h3>
        <h2>{props.titel1}</h2>
        <p>{props.autor} <date>{props.date}</date></p>
        <p><strong>{props.vorspann}</strong></p>
        <p className={artikelStyles.maintext}>{props.text}</p>
        <img src={props.imgSrc} alt={props.imgSrc}/>
      </article>
  )
}

export default Artikel;