import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 1.6rem;
  padding: 5px 40px;
  font-weight: lighter;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryDark};
  /* border-bottom: 1px solid ${({ theme }) => theme.secondaryLight}; */
`
