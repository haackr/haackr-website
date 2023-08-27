import React from "react";
import { createGlobalStyle } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import "fontsource-work-sans";
import "fontsource-work-sans/600.css";
import "fontsource-poppins";
import Nav from "./Nav";
import CodeBlock, { InlineCode } from "../components/CodeBlock";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3297ae;
    --primary-alt: #256e7e;
  }
  
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
    color: var(--primary-color);
  }

  .top-content {
    min-height: 100vh;
  }
`;

const Layout = ({ children, data }) => {
  // console.log(data);

  const components = {
    pre: CodeBlock,
    inlineCode: InlineCode,
  };
  return (
    <>
      <MDXProvider components={components}>
        <GlobalStyle />
        <div className="top-content">
          <Nav />
          {children}
        </div>
        <Footer />
      </MDXProvider>
    </>
  );
};

export default Layout;
