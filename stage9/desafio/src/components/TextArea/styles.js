import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  padding: 1.9rem 1.6rem;
  
  border: none;
  border-radius: 1rem;
  resize: none;
  
  background-color: ${({ theme }) => theme.COLORS.BG_LIGHT};
  color: ${({ theme }) => theme.COLORS.GRAY};
  
  &::placeholder {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`