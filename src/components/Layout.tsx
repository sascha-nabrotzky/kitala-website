import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";
import HeroImage from "./HeroImage";

import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
    heroSrcBig?: string;
    heroSrcSmall?: string;
    heroAlt?: string;
}>;

const Layout = ({
    children,
    heroSrcBig,
    heroSrcSmall,
    heroAlt,
}: LayoutProps) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <HeroImage
                srcBig={heroSrcBig ?? ""}
                srcSmall={heroSrcSmall ?? ""}
                alt={heroAlt}
            />
            <main>{children}</main>
            <ToTopButton />
            <Footer />
        </>
    );
};

export default Layout;
