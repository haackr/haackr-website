import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Hero = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
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
    font-size: 1.5rem;
  }

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 2rem;
    }
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
      </main>
    </Layout>
  );
};

export default IndexPage;
