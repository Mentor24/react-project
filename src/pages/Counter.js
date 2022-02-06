import styled from "styled-components";
import React, { useState } from "react";
import { Button } from '@mui/material'

const S = {
  Wrapper: styled.div`
    background-color: #9fa9a3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  `,

  InsideWrapper: styled.div`
    display: flex;
  `,
  
  Number: styled.span`
    font-size: 150px;
    color: ${({ num }) => (num % 5 === 0 ? "green" : "black")};
  `,

  StyledButton: styled(Button)`
    && {
      margin: 1%;
      color: black;
      border: solid black 1px;
    `,
};

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <S.Wrapper>
      <S.Number num = {number}>{number}</S.Number>
      <S.InsideWrapper>
        <S.StyledButton onClick={() => setNumber(number + 1)}>Add</S.StyledButton>
        <S.StyledButton onClick={() => setNumber(number - 1)}>Subtract</S.StyledButton>
        {number !== 0 && (
        <S.StyledButton onClick={() => setNumber(0)}>Reset</S.StyledButton>
        )}
      </S.InsideWrapper>

    </S.Wrapper>
  );
};

export default Counter