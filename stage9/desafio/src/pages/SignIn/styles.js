import styled from "styled-components"

import backgroundImg from "../../assets/background.png"


export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.7;
`

export const Form = styled.form`
  max-width: 340px;

  margin: 0 13.4rem;
  
  & > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-top: 235px;
  }

  & > p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.85rem;
    color: ${({ theme }) => theme.COLORS.GRAY};

    margin-bottom: 4.8rem;
  }

  & > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin-bottom: 4.8rem;
  }

  & > Button {
    margin-top: 2.4rem;
  }

`