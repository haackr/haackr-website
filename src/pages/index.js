import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const Hero = styled.div`
  height: 75vh;
  display: flex;
  max-width: 900px;
  margin: auto;
  line-height: 1.5;
  padding: 2rem;

  .name {
    font-weight: 600;
    text-decoration: underline;
    color: var(--primary-color);
  }

  h1 {
    margin-top: 25vh;
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const HomeSection = styled.div`
  max-width: 900px;
  padding: 2rem;
  margin: auto;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.6;
    color: #333;
    max-width: 600px;
    margin: auto;
    text-align: left;
  }

  .profile-image {
    border-radius: 100%;
    margin: 1rem;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      flex-direction: row-reverse;
      .profile-image {
        margin-left: 1.5rem;
        flex-shrink: 0;
      }
    }
  }

  @media (min-width: 600px) {
    p {
      font-size: 1.1rem;
    }
    h2 {
      font-size: 1.7rem;
    }
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Full Stack Web Developer" />
      <main>
        <header>
          <Hero>
            <div>
              <h1>
                Hi, I'm <span className="name">Ryan Haack</span>. <br />
                I'm a full stack developer & PMIS consultant.
              </h1>
            </div>
          </Hero>
        </header>
        <article>
          <HomeSection>
            <h2>About Me</h2>
            <div className="about-content">
              <StaticImage
                src="../images/me.jpg"
                width={200}
                layout="constrained"
                aspectRatio="1"
                className="profile-image"
                alt="Ryan Haack"
                loading="eager"
                quality={100}
              />
              <p>
                I'm a full stack developer and PMIS consultant from Albuquerque, New Mexico. I've
                been programming since I was a kid messing around with BASIC.
                I'm currently employed at Avicado Construction Technology Services as a Senior Consultant. 
                In my free time I enjoy hiking, climbing, backpacking, playing guitar, and cooking.
              </p>
            </div>
          </HomeSection>
        </article>
        <HomeSection>
          <h2>Contact Me</h2>
          <ContactForm />
        </HomeSection>
      </main>
    </Layout>
  );
};

export default IndexPage;
