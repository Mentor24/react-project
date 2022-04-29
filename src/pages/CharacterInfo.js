import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';

import AboutMeComponent from '../components/AboutMeComponent'

const S = {
  
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #9fa9a3;
    `,
}

const CharacterInfo = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {name} = useParams()

    return (
       <S.Wrapper>
           <button onClick={() => navigate(-1)}>Back</button>
            <AboutMeComponent personals = {name} description = {id}/>
       </S.Wrapper>
    )
}

export default CharacterInfo