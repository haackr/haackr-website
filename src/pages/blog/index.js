import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout";
import PostListItem from "../../components/PostListItem";

export const PageQuery = graphql`
  query BlogPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
        }
        timeToRead
        id
      }
    }
  }
`;

const BlogPostSection = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 5vh;
  padding: 2rem;

  h1 {
    font-weight: 400;
    text-align: center;
  }
`;

const PostList = styled.ul`
  margin-top: 3rem;

  li {
    list-style: none;
  }
`;

const BlogPosts = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogPostSection>
        <h1>Blog Posts</h1>
        <PostList>
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </PostList>
      </BlogPostSection>
    </Layout>
  );
};

export default BlogPosts;
