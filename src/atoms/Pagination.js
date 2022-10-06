import styled from "styled-components";

const S = {
     Wrapper: styled.div`
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #9fa9a3;
     `,

     Button: styled.button`
          width: 80px;
          height: 50px;
          margin: 30px 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 6px 8px 24px #000000;

          &:hover {
               box-shadow: 6px 8px 24px 5px #000000;
          }

          &:active {
               box-shadow: 6px 8px 24px 10px #000000;
          }
     `,
};

const Pagination = ({goToNextPage, goToPrevPage}) => {
     return (
          <S.Wrapper>
               {goToPrevPage && (
                    <S.Button onClick={goToPrevPage}>Previus</S.Button>
               )}
               {goToNextPage && (
                    <S.Button onClick={goToNextPage}>Next</S.Button>
               )}
          </S.Wrapper>
     );
};

export default Pagination;
