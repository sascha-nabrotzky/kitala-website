import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";

const Layout = ({ children }: React.PropsWithChildren<object>) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <ToTopButton />
            <Footer />
        </>
    );
};

export default Layout;
