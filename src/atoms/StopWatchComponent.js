import styled from "styled-components";
import React, {useState, useEffect} from "react";

import {Button} from "@mui/material";

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

     Time: styled.span`
          font-size: 150px;
     `,

     StyledButton: styled(Button)`
    && {
      margin: 1%;
      color: #000000;
      border: solid #000000 1px;
    `,
};

const StopWatchComponent = ({timeLeap, startFrom}) => {
     const [time, setTime] = useState(startFrom * 1000);
     const [timerOn, setTimerOn] = useState(false);

     useEffect(() => {
          let interval = null;

          if (timerOn) {
               interval = setInterval(() => {
                    setTime((prevTime) => prevTime + 10);
               }, 10);
          } else {
               clearInterval(interval);
          }

          return () => clearInterval(interval);
     }, [timerOn]);

     const hours = ("0" + (Math.floor((timeLeap * time) / 60000) % 60)).slice(
          -2
     );
     const minutes = ("0" + ((timeLeap * Math.floor(time / 1000)) % 60)).slice(
          -2
     );
     const seconds = ("0" + ((timeLeap * Math.floor(time / 10)) % 100)).slice(
          -2
     );

     return (
          <S.Wrapper>
               <S.InsideWrapper>
                    <S.Time>{hours}:</S.Time>
                    <S.Time>{minutes}:</S.Time>
                    <S.Time>{seconds}</S.Time>
               </S.InsideWrapper>

               <S.InsideWrapper>
                    {!timerOn && time === 0 && (
                         <S.StyledButton onClick={() => setTimerOn(true)}>
                              Start
                         </S.StyledButton>
                    )}

                    {timerOn && (
                         <S.StyledButton onClick={() => setTimerOn(false)}>
                              Stop
                         </S.StyledButton>
                    )}

                    {!timerOn && time > 0 && (
                         <>
                              <S.StyledButton onClick={() => setTimerOn(true)}>
                                   Resume
                              </S.StyledButton>
                              <S.StyledButton onClick={() => setTime(0)}>
                                   Reset
                              </S.StyledButton>
                         </>
                    )}
               </S.InsideWrapper>
          </S.Wrapper>
     );
};

export default StopWatchComponent;
