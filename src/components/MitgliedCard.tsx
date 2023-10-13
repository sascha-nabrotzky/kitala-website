import styles from "../styles/mitglied.module.css";

type MitgliedProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  name: string;
  kita: string;
  adress: string;
  tel: string;
  tel2?: string;
  website?: string;
};

const Mitglied = ({
  imgSrc,
  imgAlt,
  name,
  kita,
  adress,
  tel,
  tel2,
  title,
  website,
}: MitgliedProps) => {
  return (
    <div className={styles.mitgliedwrapper}>
      <img className={styles.profilbild} src={imgSrc} alt={imgAlt} />
      <address className={styles.textWrapper}>
        <p dangerouslySetInnerHTML={{ __html: title }}></p>
        <p>
          <strong dangerouslySetInnerHTML={{ __html: name }}></strong>
        </p>
        <p className={styles.kita}>
          <strong dangerouslySetInnerHTML={{ __html: kita }}></strong>
        </p>
        <p dangerouslySetInnerHTML={{ __html: adress }}></p>
        <a href={`tel: ${tel}`} dangerouslySetInnerHTML={{ __html: tel }}></a>
        {tel2 && (
          <a
            href={`tel: ${tel2}`}
            dangerouslySetInnerHTML={{ __html: tel2 }}
          ></a>
        )}
        {website && (
          <a
            href={`https://www.${website}`}
            className={styles.btnWebsite}
            target="__blank"
            rel="noreferrer"
          >
            Website
          </a>
        )}
      </address>
    </div>
  );
};

export default Mitglied;
