import React from "react";
import { createGlobalStyle } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import "fontsource-work-sans";
import "fontsource-work-sans/600.css";
import "fontsource-poppins";
import Nav from "./Nav";
import CodeBlock from "../components/CodeBlock";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
  }

  a {
    color: #3297ae;
  }
`;

const Layout = ({ children, data }) => {
  console.log(data);

  const components = {
    pre: CodeBlock,
  };
  return (
    <>
      <MDXProvider components={components}>
        <GlobalStyle />
        <Nav />
        {children}
      </MDXProvider>
    </>
  );
};

export default Layout;
