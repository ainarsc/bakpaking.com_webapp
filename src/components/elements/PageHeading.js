import styled from "styled-components"

export const PageHeading = styled.h1`
  font-size: 1.6rem;
  padding: 5px 15px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.secondaryDark};
  /* border-bottom: 1px solid ${({ theme }) => theme.secondaryLight}; */`
