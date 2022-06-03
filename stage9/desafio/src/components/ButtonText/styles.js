import styled from "styled-components"

export const Container = styled.a`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.PINK };

  margin-top: 4.2rem;

  & > svg {
    margin-right: 8px;
  }
`

export const Link = styled.a`

`