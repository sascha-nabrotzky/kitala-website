import styles from "../styles/download-card.module.css";
import iconPDF from "../assets/icons/pdf.svg";

type DownloadCardProps = {
    href: string;
    label: string;
    ariaLabel?: string;
};

const DownloadCard = ({ href, label, ariaLabel }: DownloadCardProps) => {
    return (
        <a
            className={styles.downloadCard}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel || `Download ${label}`}
        >
            <img className={styles.pdfIcon} src={iconPDF} alt="PDF Icon" />{" "}
            {label}
        </a>
    );
};

export default DownloadCard;
