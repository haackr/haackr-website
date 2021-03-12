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
        siteUrl
      }
    }
  }
`;

const SEO = ({ title, description, isArticle, image, imageAlt, meta = [] }) => {
  const { site } = useStaticQuery(query);

  const metaTitle = title
    ? `${site.siteMetadata.title} | ${title}`
    : site.siteMetadata.title;

  const imageUrl = `${site.siteMetadata.siteUrl}${image}`;

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
      ]
        .concat(
          image
            ? [
                {
                  name: "og:image",
                  content: imageUrl,
                },
                {
                  name: "og:image:alt",
                  content: imageAlt || title,
                },
                {
                  name: "twitter:image",
                  content: imageUrl,
                },
                {
                  name: "twitter:image:alt",
                  content: imageAlt || title,
                },
                {
                  name: "twitter:card",
                  content: `summary_large_image`,
                },
              ]
            : [
                {
                  property: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  );
};

export default SEO;
