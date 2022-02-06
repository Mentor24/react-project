import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavLogoComponent, NavComponent } from './components'
import { Home, AboutMe, Stopwatch, Counter, CharacterList, Registration, Login, ErrorPage } from './pages'

const S = {
  Nav: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    background-color: #f0f0f0;
    position: fixed;
    width: 100%;
    z-index: 2;
    box-shadow: 0px 1px 5px black;
    min-width: 1024px;
  `,

  Logo: styled.span`
    padding-left: 10%;
  `,

  Menu: styled.div`
    padding-right: 10%;
    display: flex;
    justify-content: space-evenly;
    width: 50%;
  `,
}

const App = () => {
  return (
    <Router>
        <S.Nav>
          <S.Logo>
            <NavLogoComponent LogoName = 'myLogo' link = '/'/>
          </S.Logo>
          <S.Menu>
            <NavComponent ComponentName = 'O mnie' link = '/AboutMe'/>
            <NavComponent ComponentName = 'Stoper' link = '/Stopwatch'/>
            <NavComponent ComponentName = 'Licznik' link = '/Counter'/>
            <NavComponent ComponentName = 'Lista postaci' link = '/CharacterList'/>
            <NavComponent ComponentName = 'Rejestracja' link = '/Registration'/>
            <NavComponent ComponentName = 'Logowanie' link = '/Login'/>
          </S.Menu>
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