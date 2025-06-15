import styles from "../styles/mitgliedCard.module.css";

type MitgliedProps = {
    imgSrc: string;
    imgAlt: string;
    title?: string;
    name: string;
    kita: string;
    address: string;
    tel: string;
    tel2?: string;
    website?: string;
};

const Mitglied = ({
    imgSrc,
    imgAlt,
    name,
    kita,
    address,
    tel,
    tel2,
    title,
    website,
}: MitgliedProps) => {
    return (
        <div className={styles.mitgliedwrapper}>
            <img className={styles.profilbild} src={imgSrc} alt={imgAlt} />
            <address className={styles.textWrapper}>
                {title && (
                    <p
                        className={styles.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></p>
                )}
                <h3 className={styles.name}>
                    <strong dangerouslySetInnerHTML={{ __html: name }}></strong>
                </h3>
                <p className={styles.kita}>
                    <strong dangerouslySetInnerHTML={{ __html: kita }}></strong>
                </p>
                <p dangerouslySetInnerHTML={{ __html: address }}></p>
                <a
                    href={`tel: ${tel}`}
                    dangerouslySetInnerHTML={{ __html: tel }}
                ></a>
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
                        Zur Website
                    </a>
                )}
            </address>
        </div>
    );
};

export default Mitglied;
