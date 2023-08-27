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

const SEO = ({ title, description, isArticle, meta = [] }) => {
  const { site } = useStaticQuery(query);

  const metaTitle = title
    ? `${site.siteMetadata.title} | ${title}`
    : site.siteMetadata.title;

  return (
    <Helmet
      title={metaTitle}
      htmlAttributes={{ lang: `en` }}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: description || site.siteMetadata.description,
        },
        {
          property: "og:type",
          content: isArticle ? "article" : "website",
        },
        {
          property: "twitter:title",
          content: metaTitle,
        },
        {
          property: "twitter:creator",
          content: site.siteMetadata.twitter,
        },
        {
          property: "twitter:description",
          content: description || site.siteMetadata.description,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
