import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: React.PropsWithChildren<object>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
