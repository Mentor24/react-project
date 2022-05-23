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
    min-width: 768px;
  `,

  InsideWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 70%;

    @media screen and (max-width: 1480px){
      width: 80%;
    }

    @media screen and (max-width: 1024px){
      width: 100%;
    }

    @media screen and (max-width: 900px){
      width: 100%;
    }
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
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  `
}

const ELEMENTS_ARRAY = [
  {
    icon: <S.AccessibilityNewIcon/>,
    title: 'O mnie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '../AboutMe',
  },
  {
    icon: <S.TimerIcon/>,
    title: 'Stoper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '../Stopwatch',
  },
  {
    icon: <S.PinIcon/>,
    title: 'Licznik',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '../Counter',
  },    
  {
    icon: <S.FormatListBulletedIcon/>,
    title: 'Lista Postaci',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '../CharacterList',
  },    
  {
    icon: <S.AppRegistrationIcon/>,
    title: 'Rejestracja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '../Registration',
  },    
  {
    icon: <S.LoginIcon/>,
    title: 'Logowanie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '../Login',
  }, 
]

const Elements = () => {
    return (
      <S.Elements>
        <S.InsideWrapper>
          {ELEMENTS_ARRAY.map(({icon, title, description, link}) => {
            return(
              <S.ElementBox>
                <S.Link href = {link}>{icon}</S.Link>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
              </S.ElementBox> 
          )})}
        </S.InsideWrapper>
      </S.Elements>
    )
}

export default Elements