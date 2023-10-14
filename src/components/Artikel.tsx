import artikelStyles from "../styles/artikel.module.css";

type ArtikelProps = {
  titel1: string;
  titel2: string;
  autor: string;
  date: string;
  vorspann: string;
  text: string;
  imgSrc: string;
};

const Artikel = ({
  titel1,
  titel2,
  autor,
  date,
  vorspann,
  text,
  imgSrc,
}: ArtikelProps) => {
  return (
    <article className={artikelStyles.article}>
      <h3>{titel2}</h3>
      <h2>{titel1}</h2>
      <p>
        {autor} <span>{date}</span>
      </p>
      <p>
        <strong>{vorspann}</strong>
      </p>
      <p className={artikelStyles.maintext}>{text}</p>
      <img src={imgSrc} alt={imgSrc} />
    </article>
  );
};

export default Artikel;
