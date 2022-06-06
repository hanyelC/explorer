import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.BG};

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;

  & > a > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  & > div:first-of-type {
    margin-bottom: 0;
  }

  & > div:last-child {
    display: flex;
    gap: 9px;
    justify-content: flex-end;

    align-items: center;
  }
  
  & > div:last-child > div {
    display: flex;
    flex-direction: column;
  }

  & p {
    width: max-content;

    font-size: 1.4rem;
    font-weight: 700;
  } 

  & span {
    align-self: end;

    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  & img {
    width: 6.4rem;
    border-radius: 60%;
  }
`