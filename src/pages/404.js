import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Page Not Found" description="This page was not found" />
      <h1>
        Sorry, this page doesn't exist.{" "}
        <span role="img" aria-label="crying face">
          😢
        </span>
      </h1>
    </Layout>
  );
};

export default NotFoundPage;
