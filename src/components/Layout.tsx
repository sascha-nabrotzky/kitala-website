import Header from "./Header";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";

import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
    heroSrcBig?: string;
    heroSrcSmall?: string;
    heroAlt?: string;
    ariaLabel?: string;
}>;

const Layout = ({
    children,
    heroSrcBig,
    heroSrcSmall,
    heroAlt,
    ariaLabel,
}: LayoutProps) => {
    return (
        <>
            <Header
                heroSrcBig={heroSrcBig}
                heroSrcSmall={heroSrcSmall}
                heroAlt={heroAlt}
                ariaLabel={ariaLabel}
            />
            <main>{children}</main>
            <ToTopButton />
            <Footer />
        </>
    );
};

export default Layout;
