import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaStrava,
  FaInstagram,
} from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";

const SOCIAL_LINKS = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/haackrl",
    icon: <FaFacebookF />,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/rhaack",
    icon: <FaTwitter />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ryguynm/",
    icon: <FaInstagram />,
  },
  {
    title: "Github",
    link: "https://github.com/haackr",
    icon: <FaGithub />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/haackr/",
    icon: <FaLinkedin />,
  },
  {
    title: "Strava",
    link: "https://www.strava.com/athletes/ryan_haack",
    icon: <FaStrava />,
  },
];

const FooterStyles = styled.footer`
  --primary-color: #eee;
  background: #333;
  min-height: 5rem;
  padding: 2rem;
  text-align: center;
  color: var(--primary-color);
  .inline-icon {
    font-size: 1.5rem;
    vertical-align: middle;
    line-height: 1;
    margin: 0 0.2rem 0 0.2rem;
  }
  .footer-content {
    max-width: 900px;
    margin: auto;
  }
  .social-links {
    text-align: center;
    font-size: 1.8rem;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
    }
    li {
      margin: 0.5rem;
    }
  }
  .subtle {
    color: #aaa;
    font-size: 0.7rem;
    text-align: left;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-content">
        <div className="social-links">
          <ul>
            {SOCIAL_LINKS.map(({ title, link, icon }) => (
              <li key={title}>
                <a href={link} title={title}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Made with ❤ by Ryan Haack using{" "}
          <span className="inline-icon">
            <a href="https://www.gatsbyjs.com/" title="Gatsby">
              <GrGatsbyjs />
            </a>
          </span>
        </p>
        <p>
          See the code on{" "}
          <a href="https://github.com/haackr/haackr-website">
            <span className="inline-icon">
              <FaGithub />
            </span>
          </a>
        </p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
