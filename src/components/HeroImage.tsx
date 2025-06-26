import styles from "../styles/hero-image.module.css";

type HeroImageProps = {
    srcBig: string;
    srcSmall: string;
    alt?: string;
    heroTitle?: string;
};

const HeroImage = ({ srcBig, srcSmall, alt, heroTitle }: HeroImageProps) => {
    return (
        <div className={styles.heroContainer}>
            <picture className={styles.imageContainer} aria-hidden="true" inert>
                <source
                    media="(max-width: 30rem)"
                    srcSet={srcSmall}
                    type="image/webp"
                />
                <source
                    media="(min-width: 30rem)"
                    srcSet={srcBig}
                    type="image/webp"
                />
                <img
                    src={srcSmall}
                    className={styles.image}
                    alt={alt ? alt : ""}
                    decoding="async"
                />
            </picture>
            {heroTitle && <div className={styles.title}>{heroTitle}</div>}
        </div>
    );
};

export default HeroImage;
