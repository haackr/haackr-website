import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundStyles = styled.div`
  margin-top: 20vh;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }
`;

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Page Not Found" description="This page was not found" />
      <NotFoundStyles>
        <h1>
          Sorry, this page doesn't exist.{" "}
          <span role="img" aria-label="crying face">
            😢
          </span>
        </h1>
      </NotFoundStyles>
    </Layout>
  );
};

export default NotFoundPage;
