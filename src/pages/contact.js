import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import StickyBackButton from "../components/elements/StickyBackButton"

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
const Guides = () => {
  return (
    <Layout>
      <SEO title="Contact Page" />
      <Form name="contact" netlify>
        <p>
          <label>
            Name <Input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <Input type="email" name="email" />
          </label>
        </p>
        <label>Your Message</label>
        <Textarea />
        <p>
          <Button type="submit">Send</Button>
        </p>
      </Form>
      <StickyBackButton fn={() => window.history.go(-1)}>
        Go back
      </StickyBackButton>
    </Layout>
  )
}

export default Guides
