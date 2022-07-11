import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  
  display: flex;
  gap: 1.6rem;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_LIGHT};

  border-radius: 10px;
  
  padding-left: 1.6rem;
  margin-bottom: 8px;

  & > input {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    
    background-color: transparent;
    border: none;
    width: 100%;
    
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  & > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
  
`