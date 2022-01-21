import styled from 'styled-components'
import {Nav, Content, Elements} from './containers'

const S = {
  View: styled.div`
  display: flex;
  flex-direction: column;
  `,
}

const App = () => {
  return (
    <S.View>
      <Nav/>
      <Content/>
      <Elements/>
    </S.View>
  )
}

export default App