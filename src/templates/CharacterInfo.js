import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";

import CharacterInfoBox from "../atoms/CharacterInfoBox";

const S = {
     Wrapper: styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #9fa9a3;
     `,

     Button: styled.div`
          width: 100px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 6px 8px 24px #000000;
          cursor: pointer;
          font-size: 15px;

          &:hover {
               box-shadow: 6px 8px 24px 5px #000000;
          }

          &:active {
               box-shadow: 6px 8px 24px 10px #000000;
          }
     `,
};

const CharacterInfo = () => {
     const navigate = useNavigate();
     const {id} = useParams();

     const [image, setImage] = useState();
     const [name, setName] = useState();
     const [gender, setGender] = useState();
     const [status, setStatus] = useState();
     const [species, setSpecies] = useState();

     useEffect(async () => {
          await axios
               .get(`https://rickandmortyapi.com/api/character/${id}`)
               .then((res) => {
                    setImage(res.data.image);
                    setName(res.data.name);
                    setGender(res.data.gender);
                    setStatus(res.data.status);
                    setSpecies(res.data.species);
               });
     }, []);

     return (
          <S.Wrapper>
               <S.Button onClick={() => navigate(-1)}>Back</S.Button>
               <CharacterInfoBox
                    image={image}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
               />
          </S.Wrapper>
     );
};

export default CharacterInfo;
