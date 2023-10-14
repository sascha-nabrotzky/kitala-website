import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";
import Navigation from "./Navigation";

function Layout({ children }: React.PropsWithChildren<object>) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <ToTopButton />
      <Footer />
    </>
  );
}

export default Layout;
