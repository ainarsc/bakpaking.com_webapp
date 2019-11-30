import styled from "styled-components"

const Article = styled.article`
  width: 90%;
  max-width: 750px;
  margin: 2rem auto 0;
  text-align: left;
  line-height: 1.5rem;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    width: 100%;
    line-height: 1.8rem;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    text-align: justify;
  }
`

export default Article
