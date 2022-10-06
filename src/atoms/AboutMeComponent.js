import styled from "styled-components";

const S = {
     Wrapper: styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
     `,

     Circle: styled.img`
          border-radius: 50%;
          width: 250px;
          height: 250px;
     `,

     Personals: styled.span`
          font-size: 31px;
          font-weight: bold;
          margin: 1% 0;
     `,

     Description: styled.span`
          font-size: 20px;
          font-weight: 300;
          text-align: justify;
          width: 30%;

          @media screen and (max-height: 900px) {
               width: 40%;
          }

          @media screen and (max-height: 800px) {
               width: 50%;
          }
     `,
};

const AboutMeComponent = ({image, personals, description}) => {
     return (
          <S.Wrapper>
               <S.Circle src={image} />
               <S.Personals>{personals}</S.Personals>
               <S.Description>{description}</S.Description>
          </S.Wrapper>
     );
};

export default AboutMeComponent;
