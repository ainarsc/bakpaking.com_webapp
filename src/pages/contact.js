import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  margin: 3px 0 10px;
  padding: 5px;
  background-color: ${({ theme }) => theme.secondaryDark};
  border-radius: 3px;
  :focus {
    outline: none;
    border: 1px solid rgba(169, 245, 237, 0.4);
  }
`

const Button = styled.button`
  padding: 3px;
  width: 100%;
  height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.secondaryDark};
  :hover {
    color: #14a76c;
  }
`
const Textarea = styled.textarea`
  width: 100%;
  padding: 5px;
  min-height: 220px;
  margin: 3px 0 10px;
  background-color: ${({ theme }) => theme.secondaryDark};
  border: none;
  vertical-align: text-top;
  border-radius: 3px;
  :focus {
    outline: none;
    border: 1px solid rgba(169, 245, 237, 0.4);
  }
`
const Contact = ({ navigate }) => {
  return (
    <Layout>
      <SEO title="Contact Page" />
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={event => {
          event.preventDefault()
          navigate("/success", { replace: false })
        }}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">
            Name <Input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email <Input type="email" name="email" required />
          </label>
        </p>
        <label htmlFor="message">Your Message</label>
        <Textarea name="message" required />
        <p>
          <Button type="submit">Send</Button>
        </p>
      </Form>
    </Layout>
  )
}

export default Contact
