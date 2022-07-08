import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content" ;

  overflow-y: hidden;
`

export const Content = styled.div`
  grid-area: content;

  display: grid;
  gap: 4rem;
  margin: 4rem 11.5rem;

  padding-right: 2.4rem;
  
  text-align: justify;

  overflow-y: auto;
  
  & > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;

    & > a {
      margin-top: 0;
    }
  }
  
  & > header > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & h2 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.8rem;
  }
`

export const Rating = styled.div`
  display: flex;
  gap: 1rem;

  & > svg {
    font-size: 2rem;
    color: ${({ theme}) => theme.COLORS.PINK}
  }
`

export const Info = styled.div`
  display: flex;
  gap: 0.8rem;

  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;

  & > img {
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
  }

  & > svg {
    color: ${({ theme}) => theme.COLORS.PINK}
  }
`

export const Tags = styled.div``

export const Description = styled.div`
`