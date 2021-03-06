import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import styled from "styled-components";

const InlineCode = styled.code`
  background: ${theme.plain.backgroundColor};
  color: ${theme.plain.color};
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  margin: 0 0.2rem 0 0.2rem;
  border-radius: 3px;
`;

const CodeBlock = (props) => {
  console.log(props);
  const className = props.children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            overflowX: "auto",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;

export { InlineCode };
