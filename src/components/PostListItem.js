import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const PostItem = styled.li`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }

  h2 {
    color: var(--primary-color);
    font-weight: 400;
  }
  .date {
    color: #999;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const PostListItem = ({ post }) => {
  // console.log(post);
  const image = getImage(post.frontmatter.image);
  return (
    <PostItem>
      <div className="header">
        <Link to={`/blog/${post.frontmatter.slug}`}>
          <h2>{post.frontmatter.title}</h2>
        </Link>
        <div className="date">
          {post.frontmatter.date} • {post.timeToRead} min read
        </div>
      </div>
      <Link to={`/blog/${post.frontmatter.slug}`}>
        <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
      </Link>
    </PostItem>
  );
};

export default PostListItem;
