import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const S = {
     Box: styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 300px;
          margin: 2%;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 6px 8px 24px #000000;
          cursor: pointer;

          &:hover {
               box-shadow: 6px 8px 24px 5px #000000;
          }

          &:active {
               box-shadow: 6px 8px 24px 10px #000000;
          }
     `,

     Image: styled.img`
          width: 150px;
          height: 150px;
          border-radius: 8px;
          margin-bottom: 15px;
     `,

     Name: styled.span`
          font-size: 23px;
          margin-bottom: 8px;
     `,

     Status: styled.span`
          font-size: 15px;
     `,

     Text: styled.span`
          font-weight: bold;
     `,
};

const CharacterBox = ({image, name, status, species, id}) => {
     const navigate = useNavigate();

     return (
          <S.Box onClick={() => navigate(`/CharacterList/${id}`)}>
               <S.Image src={image} />
               <S.Name>{name}</S.Name>
               <S.Status>
                    <S.Text>Status: </S.Text>
                    {status}
               </S.Status>
               <S.Status>
                    <S.Text>Species: </S.Text>
                    {species}
               </S.Status>
          </S.Box>
     );
};
export default CharacterBox;
