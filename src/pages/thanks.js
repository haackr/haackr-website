import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ThanksStyles = styled.div`
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

const ThanksPage = () => {
  return (
    <Layout>
      <SEO title="Thanks for contacting me!" />
      <ThanksStyles>
        <h1>
          Thanks for contacting me!{" "}
          <span role="img" aria-label="smiling face with similing eyes">
            😊
          </span>
        </h1>
        <h2>I'll be in touch soon!</h2>
      </ThanksStyles>
    </Layout>
  );
};

export default ThanksPage;
