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
`

export default Article
