import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
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
   
    const [image, setImage] = useState()
    const [name, setName] = useState()
    const [gender, setGender] = useState()

    useEffect( async () => {
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
            setImage(res.data.image)
            setName(res.data.name)
            setGender(res.data.gender)
    })
    }, [])

    return (
       <S.Wrapper>
           <button onClick={() => navigate(-1)}>Back</button>
            <AboutMeComponent image = {image} personals = {name} description = {gender}/>
       </S.Wrapper>
    )
}

export default CharacterInfo