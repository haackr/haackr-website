import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

const Container = styled.main`
  max-width: 900px;
  margin: auto;
  margin-top: 3rem;
  padding: 2rem;
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
  }
  p,
  h1 {
    margin-bottom: 2rem;
  }
`;

const JTTPrivacyPolicyPage = () => {
  return (
    <Layout>
      <SEO
        title="Just The Temperature Privacy Policy"
        description="The privacy policy for the Alexa skill Just the Temperature."
      />
      <Container>
        <h1>Just The Temperature Privacy Policy</h1>
        <h2>Introduction</h2>
        <p>
          This document will describe the kind of information we collect and how
          it is used.
        </p>
        <h2>What information we collect</h2>
        <p>
          We collect either your postal code and ISO 3166-1 alpha-2 country code
          or your lattitude and longitude as provided by your device in order to
          get information about your local weather. This information is only
          gathered if you have granted the skill permissions to use your
          location in the alexa app.{" "}
          <strong>
            We do not intentionally retain any of the information gathered about
            your location or local weather
          </strong>
          .
        </p>
        <h2>Third Party Providers</h2>
        <p>
          We use the openweathermap.org API to get your local weather. Your
          location is sent to them in the clear. Please refer to{" "}
          <a href="https://openweather.co.uk/privacy-policy">
            openweathermap.org's privacy policy
          </a>{" "}
          for more information about how they might use the information we send
          to them.
        </p>
        <p>Policy Effective 07/07/2020</p>
      </Container>
    </Layout>
  );
};

export default JTTPrivacyPolicyPage;
