import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyle = styled.nav`
  max-width: 900px;
  margin: auto;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  ul {
    list-style: none;
    display: flex;
  }

  li,
  .logo {
    padding: 2rem 0 2rem 2rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: bolder;
    color: var(--primary-color);
  }

  .logo .company {
    font-size: 0.7rem;
    font-weight: lighter;
    color: #777;
    display: block;
  }

  @media (min-width: 600px) {
    .logo .company {
      display: inline;
    }
  }
`;

const Nav = ({ location }) => {
  console.log(location);
  return (
    <NavStyle>
      <Link to="/" className="logo">
        Ryan Haack <span className="company">| HAACKR LLC</span>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
