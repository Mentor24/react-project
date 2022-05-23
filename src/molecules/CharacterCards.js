import styled from 'styled-components'
import React, { useState } from "react";

import {InputSelect, SwitchComponent, CharacterBox} from '../atoms'


const S = {
  
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #9fa9a3;
    align-items: center;
  `,

  Array: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,

  FunctionBoxes: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 300px;
  `,
  }

const CharacterCards = ({character}) => {

  const [data, setData] = useState('All');
  const [shift, setShift] = useState(true);

  const sortData = (a,b) => {
    if (shift) return a.name.localeCompare(b.name)
    else if (!shift) return b.name.localeCompare(a.name)
  }

  const filterData = item => {
    if (data === 'All') return item
    else if (item.status === 'Alive' && data === 'Alive') return item
    else if (item.status === 'Dead' && data === 'Dead') return item
    else if (item.status === 'unknown' && data === 'unknown') return item
  }

    return (
      <S.Wrapper>
        <S.FunctionBoxes>
          <InputSelect setData={setData}/>
          <SwitchComponent setShift={setShift}/>
        </S.FunctionBoxes>
        <S.Array>
        {character
        .sort(sortData)
        .filter(filterData)
        .map(({image, name, status, species, id}) => {
          return (
            <CharacterBox image = {image} name = {name} status = {status} species = {species} id = {id}/>
          )
        })}
        </S.Array>
      </S.Wrapper>
    )
}
export default CharacterCards
