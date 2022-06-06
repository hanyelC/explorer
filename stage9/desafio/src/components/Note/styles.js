import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
  width: 100%;

  padding: 3.2rem;
  
  border-radius: 16px;
  
  background-color: ${({ theme }) => theme.COLORS.PINK_DARK};
  
  & > h3 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 0.8rem;
  }

  & > p {
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  max-height: 3.6rem;
  line-height: 1.8rem;
  margin-bottom: 1.5rem;
  
 }

`

export const Rating = styled.div`

  display: flex;
  gap: 0.6px;

  margin-bottom: 1.5rem;
  & > svg {
    font-size: 1.2rem;
    
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`