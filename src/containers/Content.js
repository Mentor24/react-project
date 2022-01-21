import styled from 'styled-components'

const S = {
  Content: styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  background-color: green;
  `,
}

const Content = () => {
    return (
        <S.Content></S.Content>
    )
}

export default Content