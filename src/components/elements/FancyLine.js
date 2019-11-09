import styled from "styled-components"

const FancyLine = styled.hr`
  border: 0;
  height: 1px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(169, 245, 237, 0),
    rgba(169, 245, 237, 0.75),
    rgba(169, 245, 237, 0)
  );
`

export default FancyLine
