import styled from 'styled-components'
import Switch from '@mui/material/Switch';
import React, { useState, useEffect } from "react";

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

  const [checked, setChecked] = useState(false);
  const [currentArray, setCurrentArray] = useState([]);

  useEffect( () => {
    setCurrentArray(checked ? AliveCharacterArray : BasicCharacterArray)
    
}, [checked])

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const BasicCharacterArray = character.map(item => {
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

  const AliveCharacterArray = character.filter(item => item.status === 'Alive').map(item => {
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
          <Switch checked={checked} onChange={handleChange}/>
        </S.FunctionBoxes>
        <S.Array>
         {currentArray}
        </S.Array>
      </S.Wrapper>
    )
}
export default CharacterCards
