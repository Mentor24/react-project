import styled from 'styled-components'

const S = {
  
  NavLogo: styled.a`
    font-size: 21px; 
    letter-spacing: 5px; 
    font-weight: 700;
    text-decoration: none;
    color: black;
    `,
}

const NavLogoComponent = ({LogoName, link}) => {
    return (
        <S.NavLogo href = {link}>{LogoName}</S.NavLogo>
    )
}

export default NavLogoComponent