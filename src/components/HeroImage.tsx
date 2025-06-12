import styles from "../styles/hero-image.module.css";

type HeroImageProps = {
    src: string;
    alt?: string;
};

const HeroImage = ({ src, alt }: HeroImageProps) => {
    return (
        <div className={styles.heroImg}>
            <img src={src} alt={alt ? alt : ""} />
        </div>
    );
};

export default HeroImage;
