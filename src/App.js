import styled from 'styled-components'
import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { NavLogoComponent, NavComponent } from './components'
import { Home, AboutMe, Stopwatch, Counter, CharacterList, Registration, Login, ErrorPage } from './pages'
import ReorderIcon from '@mui/icons-material/Reorder';

const S = {
  
  Nav: styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: #f0f0f0;
    position: fixed;
    width: 100%;
    z-index: 2;
    box-shadow: 0px 1px 5px #000000;
    min-width: 768px;

    > button {
      display: none;
    }

    @media screen and (max-width: 850px){
      height: ${({ isClicked }) => isClicked ? '340px' : ''};
      text-align: ${({ isClicked }) => isClicked ? 'center' : ''};

      > button {
          display: flex;
        }
      }
    }
  `,

  Logo: styled.span`
    position: absolute;
    left: 70px;
    top: 33px;
  `,

  Menu: styled.div`
    position: absolute;
    right: 50px;

    @media screen and (max-width: 850px){
      display: ${({ isClicked }) => isClicked === true ? 'flex' : 'none'};
      flex-direction: ${({ isClicked }) => isClicked === true ? 'column' : 'none'};
      width: ${({ isClicked }) => isClicked === true ? '100%' : ''};
      right: 0px;
      position: absolute;
      top: 80px;
    }
  `,

  Button: styled.button`
    position: absolute;
    top: 33px;
    right: 50px;
    border: #000000;
    cursor: pointer;
  `,
}

const App = () => {

const [showMenu, setShowMenu] = useState(false);
  return (
    <Router>
        <S.Nav isClicked={showMenu}>
          <S.Logo>
            <NavLogoComponent logoName = 'myLogo' link = '/'/>
          </S.Logo>
          <S.Menu isClicked={showMenu}>
            <NavComponent componentName = 'O mnie' link = '/AboutMe'/>
            <NavComponent componentName = 'Stoper' link = '/Stopwatch'/>
            <NavComponent componentName = 'Licznik' link = '/Counter'/>
            <NavComponent componentName = 'Lista postaci' link = '/CharacterList'/>
            <NavComponent componentName = 'Rejestracja' link = '/Registration'/>
            <NavComponent componentName = 'Logowanie' link = '/Login'/>
          </S.Menu>
          <S.Button onClick={() => setShowMenu(!showMenu)}>
            <ReorderIcon/>
          </S.Button>
        </S.Nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutMe' element={<AboutMe/>}/>
        <Route path='/Stopwatch' element={<Stopwatch/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/CharacterList' element={<CharacterList/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App