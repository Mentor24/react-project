import styled from 'styled-components'

import wallpaper from '../images/wallpaper.jpg'
import { StyledButton, StyledTextField } from '../components'

const S = {
  
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    background-image: url(${wallpaper});
    background-size: cover;
    min-width: 768px;
    `,

  Title: styled.h1`
    font-size: 27px; 
    letter-spacing: 5px; 
    `,
  Description: styled.h2`
    font-size: 19px;
    font-weight: 500;
    font-style: italic;
  `
}

const Content = () => {
    return (
        <S.Content>
          <S.Title>Przykładowy tytuł strony internetowej</S.Title>
          <S.Description>Przykładowy opis strony internetowej</S.Description>
          <StyledTextField label = 'Szukaj...'/>
          <StyledButton buttonText = 'Szukaj'/>
        </S.Content>
    )
}

export default Content