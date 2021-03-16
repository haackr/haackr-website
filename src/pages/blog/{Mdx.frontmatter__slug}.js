import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  GatsbyImage,
  getImage,
  StaticImage,
  getSrc,
} from "gatsby-plugin-image";
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
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 80
            )
          }
        }
        imageAlt
        description
      }
      body
      timeToRead
    }
  }
`;

const BlogPost = styled.article`
  max-width: 750px;
  margin: auto;
  margin-top: 5vh;
  padding: 1rem;
  line-height: 1.6;
  h1 {
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.1;
    @media (min-width: 600px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    font-size: 1.8rem;
    line-height: 1.2;
  }
  h3 {
    font-size: 1.4rem;
    line-height: 1.3;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.5rem;
  }
  p,
  pre {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  .post_info {
    font-size: 0.8rem;
    color: #999;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    line-height: 1;
    .by-image {
      border-radius: 50%;
      margin-right: 1rem;
      /* border: 0.15rem solid var(--primary-color); */
    }
    .by-name {
      margin-right: 0.5rem;
      a {
        text-decoration: none;
      }
    }
    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }
  table {
    border-collapse: collapse;
    margin: 25px 0;
    min-width: 400px;
    margin: 2rem auto;
    border: 2px solid var(--primary-color);
    @media (max-width: 450px) {
      min-width: 0;
    }
  }
  thead tr {
    background-color: var(--primary-color);
    color: #fff;
    text-align: left;
    th {
      font-weight: normal;
    }
  }
  th,
  td {
    padding: 0.5rem 0.7rem;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
    :nth-of-type(even) {
      background-color: #f3f3f3;
    }
  }
`;

const BannerImage = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Post = ({ data }) => {
  const post = data.mdx;
  const bannerImage = getImage(post.frontmatter.image);
  const seoImg = getSrc(post.frontmatter.image);
  console.log(bannerImage);
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        isArticle={true}
        image={seoImg}
        imageAlt={post.frontmatter.imageAlt}
      />
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
          <Link to="/" title="Ryan Haack">
            <StaticImage
              src="../../images/me.jpg"
              width={40}
              quality={100}
              layout="constrained"
              alt="Ryan Haack"
              className="by-image"
            />
          </Link>{" "}
          <span className="by-name">
            <Link to="/">Ryan Haack</Link>
          </span>{" "}
          {post.frontmatter.date} • {post.timeToRead} min read
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
      </BlogPost>
    </Layout>
  );
};

export default Post;
