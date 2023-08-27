import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Hero = styled.div`
  height: 100vh;
  display: flex;
  max-width: 800px;
  margin: auto;
  line-height: 1.5;
  padding: 2rem;

  .name {
    font-weight: bolder;
    text-decoration: underline;
    color: #3297ae;
  }

  h1 {
    margin-top: 25vh;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const HomeSection = styled.div`
  max-width: 800px;
  padding: 2rem;
  margin: auto;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.6;
    color: #333;
    max-width: 400px;
    margin: auto;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <header>
          <Hero>
            <div>
              <h1>
                Hi, I'm <span className="name">Ryan Haack</span>. <br />
                I'm a full stack developer.
              </h1>
            </div>
          </Hero>
        </header>
        <article>
          <HomeSection>
            <h2>About Me</h2>
            <p>
              I'm a full stack developer from Albuquerque, New Mexico. I've been
              programming since I was a kid messing around with BASIC. I'm
              currently employed at Albuquerque Public Schools doing some custom
              software development and administration of our capital project
              management software e-Builder. In my free time I enjoy hiking,
              climbing, backpacking, playing guitar, and cooking.
            </p>
          </HomeSection>
        </article>
        <HomeSection>
          <h2>Contact Me</h2>
          <p>
            I'd love to help you build your project! Shoot me an email at{" "}
            <a href="mailto:ryan@haackr.com">ryan@haackr.com</a>.
          </p>
        </HomeSection>
      </main>
    </Layout>
  );
};

export default IndexPage;
