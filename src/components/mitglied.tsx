import React from "react";
import mitgliedStyles from "../styles/mitglied.module.scss";

type MitgliedProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  name: string;
  kita: string;
  adress: string;
  tel: string;
};

const Mitglied = ({
  imgSrc,
  imgAlt,
  name,
  kita,
  adress,
  tel,
  title,
}: MitgliedProps) => {
  return (
    <div className={mitgliedStyles.mitgliedwrapper}>
      <img className={mitgliedStyles.profilbild} src={imgSrc} alt={imgAlt} />
      <strong dangerouslySetInnerHTML={{ __html: title }}></strong>
      <p dangerouslySetInnerHTML={{ __html: name }}></p>
      <p dangerouslySetInnerHTML={{ __html: kita }}></p>
      <address>
        <p dangerouslySetInnerHTML={{ __html: adress }}></p>
        <a href={`tel: ${tel}`} dangerouslySetInnerHTML={{ __html: tel }}></a>
      </address>
    </div>
  );
};

export default Mitglied;
