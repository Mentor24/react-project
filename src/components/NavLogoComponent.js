import styled from 'styled-components'

const S = {
  
  NavLogo: styled.a`
    font-size: 21px; 
    letter-spacing: 5px; 
    font-weight: 700;
    text-decoration: none;
    color: #000000;
    `,
}

const NavLogoComponent = ({logoName, link}) => {
    return (
        <S.NavLogo href = {link}>{logoName}</S.NavLogo>
    )
}

export default NavLogoComponent