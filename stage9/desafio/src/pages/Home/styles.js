import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto auto;
  grid-template-areas: 
  "header"
  "content";

  & > header:first-of-type {
    grid-area: content-header;

    padding: 5rem 11.5rem;
    
    display: flex;
    justify-content: space-between;

    & > h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
    }
    
    & > button {
      max-width: 207px;
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: 
  "content-header"
  "notes"
  ;

  overflow-y: auto;

  padding: 5rem 11.5rem;

  & > header:first-of-type {
    grid-area: content-header;

    margin-bottom: 4rem;
    
    display: flex;
    justify-content: space-between;

    & > h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
    }
    
    & > button {
      max-width: 207px;
    }
  }
  
`

export const Notes = styled.div`
  grid-area: notes;
  
  display: grid;
  gap: 2.4rem;

  overflow-y: auto;
`