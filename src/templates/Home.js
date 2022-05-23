import styled from 'styled-components'

import {Content, Elements} from '../molecules'

const S = {
  
  View: styled.div`
    display: flex;
    flex-direction: column;
  `,
}

const Home = () => {
  return (
 
      <S.View>
        <Content/>
        <Elements/>
      </S.View>    
  )
}

export default Home