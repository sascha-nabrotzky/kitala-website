import styles from "../styles/member-card.module.css";

type MemberProps = {
    imgSrc: string;
    imgAlt: string;
    position?: string;
    name: string;
    organisation: string;
    address: string;
    phone: string;
    phone2?: string;
    website?: string;
};

const MemberCard = ({
    imgSrc,
    imgAlt,
    name,
    organisation,
    address,
    phone,
    phone2,
    position,
    website,
}: MemberProps) => {
    return (
        <div className={styles.memberContainer}>
            <img className={styles.profileImage} src={imgSrc} alt={imgAlt} />
            <address className={styles.addressContainer}>
                {position && <p className={styles.position}>{position}</p>}
                <h3 className={styles.name}>
                    <strong>{name}</strong>
                </h3>
                <p className={styles.organisation}>
                    <strong>{organisation}</strong>
                </p>
                <p>{address}</p>
                <a href={`tel: ${phone}`}>{phone}</a>
                {phone2 && <a href={`tel: ${phone2}`}>{phone2}</a>}
                {website && (
                    <a
                        href={`https://www.${website}`}
                        className={styles.btnWebsite}
                        target="__blank"
                        rel="noreferrer"
                        aria-label={`Zur Website von ${name}`}
                    >
                        Zur Website
                    </a>
                )}
            </address>
        </div>
    );
};

export default MemberCard;
