import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        twitter
        description
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);

  return (
    <Helmet
      title={
        title
          ? `${site.siteMetadata.title} | ${title} `
          : site.siteMetadata.title
      }
      description={description ? description : site.siteMetadata.description}
    />
  );
};

export default SEO;
