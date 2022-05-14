import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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

    const getData = axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(getData)
    console.log(getData.res.data)

    return (
       <S.Wrapper>
           <button onClick={() => navigate(-1)}>Back</button>
            <AboutMeComponent description = {id}/>
       </S.Wrapper>
    )
}

export default CharacterInfo