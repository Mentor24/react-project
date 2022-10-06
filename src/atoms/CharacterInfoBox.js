import styled from "styled-components";

const S = {
     Box: styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 500px;
          height: 500px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 6px 8px 24px #000000;
          margin-top: 3%;
     `,

     Image: styled.img`
          width: 270px;
          height: 270px;
          border-radius: 8px;
          margin-bottom: 15px;
     `,

     Name: styled.span`
          font-size: 27px;
          margin-bottom: 8px;
     `,

     Status: styled.span`
          font-size: 15px;
     `,

     Text: styled.span`
          font-weight: bold;
     `,
};

const CharacterInfoBox = ({image, name, status, species, gender}) => {
     return (
          <S.Box>
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
               <S.Status>
                    <S.Text>Gender: </S.Text>
                    {gender}
               </S.Status>
          </S.Box>
     );
};
export default CharacterInfoBox;
