import styled from 'styled-components'
import React, { useState } from "react";
import {InputSelect, SwitchComponent} from '../components'

const S = {
  
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #9fa9a3;
  `,

  Array: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,

  FunctionBoxes: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 120px;
    width: 300px;
    `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin: 2%;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 6px 8px 24px black;

    &:hover {
      box-shadow: 6px 8px 24px 5px black;
    }
  
    &:active {
      box-shadow: 6px 8px 24px 10px black;
    }
  `,

  Image: styled.img`
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 15px;
  `,

  Name: styled.span`
    font-size: 23px;
    margin-bottom: 8px;
  `,

  Status: styled.span`
    font-size: 15px;
  `,

  Text: styled.span`
    font-weight: bold;
  `,
  }

const CharacterCards = ({character}) => {

  const [data, setData] = useState('All');
  const [shift, setShift] = useState(true);

  const characterArray = character
  
  .sort((a,b) => {
    if (shift) return a.name.localeCompare(b.name)
    else if (!shift) return b.name.localeCompare(a.name)
  })

  .filter(item => {
    if (data === 'All') return item
    else if (item.status === 'Alive' && data === 'Alive') return item
    else if (item.status === 'Dead' && data === 'Dead') return item
    else if (item.status === 'unknown' && data === 'unknown') return item
  })
   
  .map(item => {
    return (
      <S.Box>
        <S.Image src = {item.image}/>
        <S.Name>{item.name}</S.Name>
        <S.Status>
          <S.Text>Status: </S.Text> 
          {item.status}
        </S.Status>
        <S.Status>
          <S.Text>Species: </S.Text> 
          {item.species}
        </S.Status>
      </S.Box>
    )
  })
  
    return (
      <S.Wrapper>
        <S.FunctionBoxes>
          <InputSelect setData={setData}/>
          <SwitchComponent setShift={setShift}/>
        </S.FunctionBoxes>
        <S.Array>
         {characterArray}
        </S.Array>
      </S.Wrapper>
    )
}
export default CharacterCards
