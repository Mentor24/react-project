import styled from 'styled-components'

const S = {

  NavComponent: styled.a`
    font-size: 19px;
    text-decoration: none;
    color: black;
    `
}

const NavComponent = ({ComponentName, link}) => {
    return (
        <S.NavComponent href = {link}>{ComponentName}</S.NavComponent>
    )
}

export default NavComponent