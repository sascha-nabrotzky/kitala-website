import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
