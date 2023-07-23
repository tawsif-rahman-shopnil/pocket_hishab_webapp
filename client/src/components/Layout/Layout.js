import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../styles/LayoutStyles.css";  // Importing the CSS file here

const Layout = ({ children }) => {
  return (
    <>
      <Header className="header" />
      <div className="content container mt-4">{children}</div>
      <Footer className="footer" />
    </>
  );
};

export default Layout;
