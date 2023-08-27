import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
  }
`;

const Layout = ({ children, data }) => {
  console.log(data);
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
