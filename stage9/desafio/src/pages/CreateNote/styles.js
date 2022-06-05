import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: 
  "header"
  "content";
 
 overflow: hidden;
 gap: 4rem;
`

export const Content = styled.form`
  grid-area: content;

  justify-self: center;

  width: 100%;
  max-width: 1140px;
  
  padding: 0 2.4rem 4rem 0;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  & > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    font-weight: 500;
    font-size: 3.6rem;
    
    & > a {
      margin-top: 0;
    }
    
  }
  
  & > span {
    display: flex;
    gap: 4rem;
  }

  & > footer {
    display: flex;
    gap:4rem;

    & > *:first-child {
      background-color: ${({ theme }) => theme.COLORS.BG_DARK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Tags = styled.section`
  & > p {
    margin-bottom: 2.4rem;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK}
 } 

 & > div {
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BG_DARK};
 }
`

export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_LIGHT};
  border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : "none"};

  border-radius: 10px;

  & > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  color: ${({ theme, isNew }) =>isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE};  
`