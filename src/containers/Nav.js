import styled from 'styled-components'
import { NavLogo, NavComponent } from '../components'

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

const Nav = () => {
    return (
        <S.Nav>
          <S.Logo>
            <NavLogo LogoName = 'myLogo' link = '#'/>
          </S.Logo>
          <S.Menu>
            <NavComponent ComponentName = 'O mnie' link = '#'/>
            <NavComponent ComponentName = 'Licznik' link = '#'/>
            <NavComponent ComponentName = 'Stoper' link = '#'/>
            <NavComponent ComponentName = 'Lista postaci' link = '#'/>
            <NavComponent ComponentName = 'Rejestracja' link = '#'/>
            <NavComponent ComponentName = 'Logowanie' link = '#'/>
          </S.Menu>
        </S.Nav>
    )
}

export default Nav