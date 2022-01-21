import styled from 'styled-components'

const S = {
  Elements: styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  background-color: blue;
  `,
}

const Elements = () => {
    return (
        <S.Elements></S.Elements>
    )
}

export default Elements