import React from "react";
import Header from "./header";
import Footer from "./footer";

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
