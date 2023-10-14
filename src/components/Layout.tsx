import React from "react";
import Header from "./header";
import Footer from "./footer";
import ToTopButton from "./ToTopButton";

function Layout({ children }: React.PropsWithChildren<object>) {
  return (
    <>
      <Header />
      {children}
      <ToTopButton />
      <Footer />
    </>
  );
}

export default Layout;
