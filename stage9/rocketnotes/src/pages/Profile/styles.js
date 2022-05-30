import styled from "styled-components"

export const Container = styled.div`
  
  > header {
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }

    padding: 0 144px;

    display: flex;
    align-items: center;

  }

  `

export const Avatar = styled.div`
  position: relative;
  margin: -123px auto 32px;
  
  width: 186px;
  height: 186px;
  
  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  
  > label {
    width: 48px;
    height: 48px;
    
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    
    cursor: pointer;
    
    input {
      display: none;
    }
    
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`

  export const Form = styled.form`
    max-width: 340px;  
    margin: 30px auto 0;
    
    > *:nth-child(4) {
      margin-top: 16px;
    }
`