import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/Layout.js";
import SEO from "../../components/SEO.js";

export const pageQuery = graphql`
  query PostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 80
            )
          }
        }
        imageAlt
      }
      body
      timeToRead
    }
  }
`;

const BlogPost = styled.article`
  max-width: 700px;
  margin: auto;
  margin-top: 5vh;
  padding: 1rem;
  line-height: 1.6;
  h1 {
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 2rem;
  }
  p,
  pre {
    margin-bottom: 2rem;
  }
  .post_info {
    font-style: italic;
    font-size: 0.8rem;
    color: #999;
    padding-bottom: 1rem;
  }
`;

const BannerImage = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Post = ({ data }) => {
  const post = data.mdx;
  const bannerImage = getImage(post.frontmatter.image);
  console.log(bannerImage);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BannerImage>
        {bannerImage && (
          <GatsbyImage
            image={bannerImage}
            alt={post.frontmatter.imageAlt}
            loading="eager"
          />
        )}
      </BannerImage>
      <BlogPost>
        <h1>{post.frontmatter.title}</h1>
        <div className="post_info">
          {post.frontmatter.date} | {post.timeToRead} min read
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
      </BlogPost>
    </Layout>
  );
};

export default Post;
