import styled from "styled-components"

const Article = styled.article`
  width: 100%;
  margin: 2rem auto 0;
  text-align: justify;
  line-height: 1.8rem;
  @media only screen and (${({ theme }) => theme.laptopS}) {
    width: 80%;
  }
`

export default Article
