import styled, { css } from 'styled-components'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PinIcon from '@mui/icons-material/Pin';
import TimerIcon from '@mui/icons-material/Timer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';

const values = css`
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.7;
  }
    
  &:active {
    opacity: 0.5;
  }
`;

const S = {
  Elements: styled.div`
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    min-width: 1024px;
  `,

  InsideWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 75%;
  `,

  ElementBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin: 2%;
  `,
  
  AccessibilityNewIcon: styled(AccessibilityNewIcon)`
    && {${values}}
  `,
  
  PinIcon: styled(PinIcon)`
    && {${values}}
  `,

  TimerIcon: styled(TimerIcon)`
    && {${values}}
  `,

  FormatListBulletedIcon: styled(FormatListBulletedIcon)`
    && {${values}}
  `,

  AppRegistrationIcon: styled(AppRegistrationIcon)`
    && {${values}}
  `,

  LoginIcon: styled(LoginIcon)`
    && {${values}}
  `,

 
  Title: styled.span`
    font-size: 19px; 
    font-weight: 700;
  `,

  Description: styled.span`
    font-size: 13px; 
    font-weight: bold;
    width: 50%;
    text-align: center;
    margin-top: 4%;
  `,

  Link: styled.a`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  `
}

const Elements = () => {

  const ElementsArray = [
    {
      Icon: <S.AccessibilityNewIcon/>,
      Title: 'O mnie',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Link: '../AboutMe',
    },
    {
      Icon: <S.TimerIcon/>,
      Title: 'Stoper',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Link: '../Stopwatch',
    },
    {
      Icon: <S.PinIcon/>,
      Title: 'Licznik',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Link: '../Counter',
    },    
    {
      Icon: <S.FormatListBulletedIcon/>,
      Title: 'Lista Postaci',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Link: '../CharacterList',
    },    
    {
      Icon: <S.AppRegistrationIcon/>,
      Title: 'Rejestracja',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Link: '../Registration',
    },    
    {
      Icon: <S.LoginIcon/>,
      Title: 'Logowanie',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Link: '../Login',
    }, 
]

const newElementsArray = ElementsArray.map((item) => {
  
  return (
  <S.ElementBox>
    <S.Link href = {item.Link}>{item.Icon}</S.Link>
    <S.Title>{item.Title}</S.Title>
    <S.Description>{item.Description}</S.Description>
  </S.ElementBox>
    )
})

    return (
      <S.Elements>
        <S.InsideWrapper>
            {newElementsArray}
        </S.InsideWrapper>
      </S.Elements>
    )
}

export default Elements