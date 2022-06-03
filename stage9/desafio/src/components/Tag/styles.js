import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem; 

  margin-right: 8px;

  padding: 5px 16px;
  background-color: ${({ theme }) => theme.COLORS.TAG};

  border-radius: 8px;
`