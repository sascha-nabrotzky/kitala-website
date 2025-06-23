import styles from "../styles/hero-image.module.css";

type HeroImageProps = {
    srcBig: string;
    srcSmall: string;
    alt?: string;
    ariaLabel?: string;
};

const HeroImage = ({ srcBig, srcSmall, alt, ariaLabel }: HeroImageProps) => {
    return (
        <picture className={styles.heroImgWrapper}>
            <source
                media="(max-width: 30rem)"
                srcSet={srcSmall}
                type="image/webp"
                width="350"
                height="auto"
            />
            <source
                media="(min-width: 30rem)"
                srcSet={srcBig}
                type="image/webp"
                width="800"
                height="auto"
            />
            <img
                src={srcSmall}
                className={styles.heroImg}
                alt={alt ? alt : ""}
                decoding="async"
                width="350"
                height="auto"
                aria-label={ariaLabel}
            />
        </picture>
    );
};

export default HeroImage;
