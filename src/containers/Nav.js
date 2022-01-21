import styled from 'styled-components'

const S = {
  Nav: styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  background-color: pink;
  `,
}

const Nav = () => {
    return (
        <S.Nav></S.Nav>
    )
}

export default Nav