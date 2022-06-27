import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  
  font-weight: 500;
  font-size: 1.6rem;

  padding: 0 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;  

  border: none;
  border-radius: 10px;
  
  color: ${({ theme }) => theme.COLORS.BG};

  background-color: ${({ theme }) => theme.COLORS.PINK};

  & > svg {
    margin-right: 8px;
  }

`