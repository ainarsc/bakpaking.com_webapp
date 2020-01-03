import styled from "styled-components"

const Article = styled.article`
  width: 90%;
  max-width: 750px;
  margin: 2rem auto 0;
  text-align: left;
  line-height: 1.5rem;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    line-height: 1.8rem;
  }
  p {
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`

export default Article
