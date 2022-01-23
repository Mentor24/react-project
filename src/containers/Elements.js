import styled from 'styled-components'
import { ElementBox } from '../components'

const S = {
  Elements: styled.div`
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    `,

  InsideWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80%;
    `,
}

const Elements = () => {
    return (
        <S.Elements>
          <S.InsideWrapper>
            <ElementBox ElementBoxTitle='Tytuł' ElementBoxDescription='Opis'/>
            <ElementBox/>
            <ElementBox/>
            <ElementBox/>
            <ElementBox/>
            <ElementBox/>
          </S.InsideWrapper>
        </S.Elements>
    )
}

export default Elements