import React from "react";
import "./Footer.css";
const Footer = (props) => {
  const children = props.children;
  return (
    <footer>
      {children}
      <h5>VerdeMercado&copy; Diseñado por Martin</h5>
    </footer>
  );
};

export default Footer;
