import styles from "../styles/hero-image.module.css";

type HeroImageProps = {
    src: string;
    alt?: string;
    ariaLabel?: string;
};

const HeroImage = ({ src, alt, ariaLabel }: HeroImageProps) => {
    return (
        <div className={styles.heroImg}>
            <img src={src} alt={alt ? alt : ""} aria-label={ariaLabel} />
        </div>
    );
};

export default HeroImage;
