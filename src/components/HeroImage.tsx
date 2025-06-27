import React from "react";
import styles from "../styles/hero-image.module.css";

type HeroImageProps = {
    srcBig: string;
    srcSmall: string;
    alt?: string;
    heroTitle?: string;
};

const HeroImage = ({ srcBig, srcSmall, alt, heroTitle }: HeroImageProps) => {
    const [scale, setScale] = React.useState(0);
    const [opacity, setOpacity] = React.useState(0);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setScale(1);
        }, 500);
        setTimeout(() => {
            setOpacity(1);
        }, 1200);
    }, []);

    return (
        <div className={styles.heroContainer}>
            <picture className={styles.imageContainer} aria-hidden="true">
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
            {heroTitle && (
                <div
                    className={styles.title}
                    style={{
                        transform: `scaleX(${scale}) translate(-50%, -50%)`,
                        transition: "transform 0.5s ease-in-out",
                        transformOrigin: "left center",
                    }}
                >
                    <span
                        style={{
                            opacity: `${opacity}`,
                            transition: "opacity 0.5s ease-in-out",
                        }}
                    >
                        {heroTitle}
                    </span>
                </div>
            )}
        </div>
    );
};

export default HeroImage;
