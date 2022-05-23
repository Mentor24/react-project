import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'

import { Pagination } from '../atoms'
import { CharacterCards } from '../molecules'

const S = {

    Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    background-color: #9fa9a3;
    align-items: center;
    `,
  
    Loading: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size: 30px;
  `,
  }

const CharacterList = () => {
    const [character, setCharacter] = useState([])
    const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character')
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [loading, setLoading] = useState(true)

    useEffect( async () => {
        setLoading(true)
        await axios.get(currentPage).then(res => {
            setLoading(false)
            setNextPage(res.data.info.next)
            setPrevPage(res.data.info.prev)
            setCharacter(res.data.results)
    })
    }, [currentPage])

    const goToNextPage = () => {
        setCurrentPage(nextPage)
    }

    const goToPrevPage = () => {
        setCurrentPage(prevPage)
    }

   if (loading) return (
    <S.Loading>Loading...</S.Loading>
   )

    return (
        <S.Wrapper>
            <CharacterCards character={character}/>
            <Pagination 
            goToNextPage={nextPage ? goToNextPage : null} 
            goToPrevPage={prevPage ? goToPrevPage : null}
            />
        </S.Wrapper>  
    )
    }
    
export default CharacterList