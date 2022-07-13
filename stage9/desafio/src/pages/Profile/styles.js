import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  & > header {
    width: 100%;
    height: 14.4rem;

    padding-left: clamp(1rem, 10vw, 14.4rem);
    
    background-color: ${({ theme }) => theme.COLORS.PINK_DARK};
    display: flex;
    align-items: center;

    & > *:first-child {
      margin: 0;
    }
  }

  padding-bottom: 4rem;
`

export const Form = styled.form`
  max-width: 34rem;

  margin: 6.4rem auto 0;

  & div:nth-child(2),
  & div:nth-last-child(2) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -93px auto 0;
  width: 18.6rem;

  & > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    object-fit: cover;
  }

  & > input {
    display: none;
  }

  & > label {
    position: absolute;
    bottom: 4px;
    right: 10px;
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > label > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BG};
  }

  @media (max-width: 425px) {
    & {
      left: 50px;
    }
  }
`