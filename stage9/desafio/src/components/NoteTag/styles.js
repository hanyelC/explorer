import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_LIGHT};
  border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : "none"};

  border-radius: 10px;

  & input {
    background-color: transparent;
    border: none;
    color: ${({ theme, isNew }) =>isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE};
  }

  & button {
    background-color: transparent;
    border: none;
  }

  & svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
`