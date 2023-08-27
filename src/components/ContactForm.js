import React, { useState } from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-family: "Poppins", sans-serif;
    resize: none;
  }
  #submit {
    background: var(--primary-color);
    border: none;
    color: #fff;
    padding: 0.6rem;
    font-size: 1.3rem;
    max-width: 200px;
    margin-top: 1rem;
    cursor: pointer;
    :hover {
      background: var(--primary-alt);
    }
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Form action="https://submit-form.com/HRaGkdV5">
      <input type="hidden" name="_redirect" value="https://haackr.com/thanks" />
      <input type="hidden" name="_append" value="false" />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="10"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <ReCAPTCHA sitekey="6LejpXgaAAAAAHv_RPLyIUpyNiVwHzIAJfskokbI" />
      <button type="submit" id="submit">
        Send
      </button>
    </Form>
  );
};

export default ContactForm;
