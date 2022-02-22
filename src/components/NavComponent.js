import styled from 'styled-components'

const S = {

  NavComponent: styled.a`
    font-size: 19px;
    text-decoration: none;
    color: black;
    margin-right: 20px;
    

    &:hover {
    opacity: 0.7;
    }
    
    &:active {
    opacity: 0.5;
    }

    @media screen and (max-width: 850px){
        font-size: 30px;
        width: 100%;

        &:hover {
            opacity: 1;
            background-color: #9fa9a3;
            color: white;
            }
            
            &:active {
            opacity: 1;
            }
    }
    `
}

const NavComponent = ({ComponentName, link}) => {
    return (
        <S.NavComponent href = {link}>{ComponentName}</S.NavComponent>
    )
}

export default NavComponent