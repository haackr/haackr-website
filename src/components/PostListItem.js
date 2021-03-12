import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PostItem = styled.li`
  margin-bottom: 3rem;
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
  }
`;

const PostListItem = ({ post }) => {
  console.log(post);
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
    </PostItem>
  );
};

export default PostListItem;
