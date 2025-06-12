import Header from "./Header";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";

import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
    heroSrc?: string;
    heroAlt?: string;
    ariaLabel?: string;
}>;

const Layout = ({ children, heroSrc, heroAlt, ariaLabel }: LayoutProps) => {
    return (
        <>
            <Header heroSrc={heroSrc} heroAlt={heroAlt} ariaLabel={ariaLabel} />
            <main>{children}</main>
            <ToTopButton />
            <Footer />
        </>
    );
};

export default Layout;
